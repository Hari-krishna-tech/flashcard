import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";
import User from "../../models/User";


export  async function getOneDeckController(req: Request, res: Response) {
    const {deckId} = req.params;
 //   console.log(deckId)
    try {
        const user = await User.findOne({email: req.email});
        if(!user) {
            res.status(400).json({message: "user does not exist"});
            return;
        }

        const deck = user.decks.find((deck) => {
            return deck._id.toString() === deckId;
        });
        if(!deck) {
            res.status(400).json({message: "deck does not exist"});
            return;
        }
        res.json(deck);
        
    } catch(err) {
        res.status(500).json({message: "internal server error"});
    }

    
}