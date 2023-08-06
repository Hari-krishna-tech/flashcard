import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";
import User from "../../models/User";
import {IDeck } from "../../models/User"


export async function createDeckController(req: Request, res: Response)  {
    
    try {
        if(req.email) {
            const user = await User.findOne({email: req.email});
            if(!user) {
                res.status(400).json({message: "user does not exist"});
                return;
            }
            const deck:IDeck = req.body;
            if(!deck.title) {
                res.status(400).json({message: "deck must have a title"});
                return;
            }
            user.decks.push(deck);
            await user.save();
            res.json(user.decks);
        }
    } catch (err) {
        res.status(500).json({message: "internal server error"});
    }
 }