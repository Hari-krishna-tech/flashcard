import {Request, Response} from "express";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function getUserController(req: Request, res: Response) {
    if(req.email) {
        console.log(req.email);
    }
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user || await bcrypt.compare(password, user.password)) {
            res.status(400).json({message: "user does not exist"});
            return;
        }

        const token = jwt.sign({email: user.email}, process.env.JWT_SECRET || "" , {expiresIn: "7days"});
        user.tokens.push(token);
        res.json({token, user});
    } catch (err) {
        res.status(500).json({message: "internal server error"});
    }
}