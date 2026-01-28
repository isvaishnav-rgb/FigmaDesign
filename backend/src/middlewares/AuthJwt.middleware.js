const authJwt = (req, res, next) => {
    try {

    } catch (err) {
        return res.status(500).json(
            {
                message: "Server Error",
                error: err?.message
            }
        )
    }
}