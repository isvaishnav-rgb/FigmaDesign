import {body} from "express-validator";

const loginValidation = [
    body("email").notEmpty()
]