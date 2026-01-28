const loginController = (req, res) => {
  try{
    const {email, passwword} = req.body;


    } catch(err) {
     return res.status(500).json(
        {
            message: "Server Error",
            error: err?.message
        }
       )
    }
}

const signupControlller = (req, res) => {
    try{
        const {name, email, phoneNumber, passwword} = req.body;

    } catch(err) {
       return res.status(500).json(
        {
            message: "Server Error",
            error: err?.message
        }
       )
    }
}

export {loginController, signupControlller};