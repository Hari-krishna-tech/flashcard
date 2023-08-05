
import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";
import User from "../../models/User";
import jwt from "jsonwebtoken";


export async function createUserController(req: Request, res: Response) {
    const {email, password} = req.body;
   
    try {
        const existingUser = await User.findOne({email});
        if(existingUser) {
            res.status(400).json({message: "user already exists"});
            return;
        }

        const newUser = new User({email, password});

        await newUser.save();

        const token = jwt.sign({email: newUser.email}, process.env.JWT_SECRET || "" , {expiresIn: "7days"});
        newUser.tokens.push(token);
        res.json({token, user: newUser});


    } catch (error) {
        res.status(500).json({message: "internal server error"});
    }
}