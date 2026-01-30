import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isUserExist = await User.findOne({ email })

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        if (!isUserExist) {
            return res.status(404).json({
                message: "User is not registered"
            })
        }

        const isPasswordVerified = await bcrypt.compare(password, isUserExist?.password);

        if (!isPasswordVerified) {
            return res.status(401).json({
                message: "Invalid Credentials"
            })
        }

        const accessToken = jwt.sign(
            { id: isUserExist._id, email: isUserExist?.email },
            process.env.ACCESSTOKEN_SECRET_KEY,
            { expiresIn: "15m" }
        )

        const refreshToken = jwt.sign(
            { id: isUserExist._id, email: isUserExist?.email },
            process.env.REFRESHTOKEN_SECRET_KEY,
            { expiresIn: "2d" }
        )

        isUserExist.refreshToken = refreshToken;
        isUserExist.isLoggedIn = true;
        await isUserExist.save();

        return res.status(200).json({
            message: "User is loggedIn successfully",
            accessToken
        })

    } catch (err) {
        return res.status(500).json(
            {
                message: "Server Error",
                error: err?.message
            }
        )
    }
}

const signupControlller = async (req, res) => {
    try {
        const { name, email, phoneNumber, password } = req.body;

        if (!name || !email || !phoneNumber || !password) {
            return res.status(400).json({
                message: "All Fields are required"
            })
        }

        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            return res.status(400).json({
                message: "User is already registered"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const userData = await User.create({
            name,
            email,
            phoneNumber,
            password: hashPassword,
        })

        if (!userData) {
            return res.status(400).json({
                message: "Something went wrong"
            })
        }

        const accessToken = jwt.sign(
            { id: userData._id, email: userData.email },
            process.env.ACCESSTOKEN_SECRET_KEY,
            { expiresIn: "15m" }
        )

        const refreshToken = jwt.sign(
            { id: userData._id, email: userData.email },
            process.env.REFRESHTOKEN_SECRET_KEY,
            { expiresIn: "2d" }
        )

        userData.refreshToken = refreshToken;
        userData.isLoggedIn = true;
        await userData.save();

        return res.status(201).json({
            message: "User is registered successfully",
            accessToken
        })


    } catch (err) {
        return res.status(500).json(
            {
                message: "Server Error",
                error: err?.message
            }
        )
    }
}

const logoutController = async (req, res) => {
    try {
        if (!req.userInfo) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const { id } = req.userInfo;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // already logged out
        if (!user.refreshToken) {
            return res.status(400).json({
                message: "User already logged out"
            });
        }

        user.refreshToken = "";
        user.isLoggedIn = false;
        await user.save();

        return res.status(200).json({
            message: "User is logged out successfully"
        });

    } catch (err) {
        return res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
};

const refreshTokenController = async (req, res) => {
  try {
    const {refreshToken} = req.body;

    if (!refreshToken) {
      return res.status(401).json({
        message: "Refresh token required"
      });
    }

    // verify refresh token
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESHTOKEN_SECRET_KEY
    );

    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({
        message: "Invalid refresh token"
      });
    }

    // generate new access token
    const newAccessToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.ACCESSTOKEN_SECRET_KEY,
      { expiresIn: "15m" }
    );

    return res.status(200).json({
      accessToken: newAccessToken
    });

  } catch (err) {
    return res.status(403).json({
      message: "Refresh token expired or invalid",
      error: err.message
    });
  }
};


export { loginController, signupControlller, logoutController, refreshTokenController };