import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";
import User from "../../models/User";


export  async function getDeckController(req: Request, res: Response) {
    try {
        if(req.email) {
            const user = await User.findOne({email: req.email});
            if(!user) {
                res.status(400).json({message: "user does not exist"});
                return;
            }
            const decks = user.decks;
            res.json(decks);
        }
    } catch(err) {
        res.status(500).json({message: "internal server error"});
    }
 
    
}