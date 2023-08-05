import jwt from "jsonwebtoken";
// import User from "../models/User";
import { Request, Response, NextFunction } from "express";



const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if(!token) {
        return res.status(401).json({message: "unauthorized"});
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as {email: string};

        const email= decoded.email;
        req.email = email;
        console.log(req.email);
        next();
    }catch(err) {
        res.status(401).json({message: "unauthorized"});
    }


}

export default authMiddleware;