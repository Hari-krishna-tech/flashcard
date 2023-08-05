
import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";
import User, {IDeck, IUser} from "../../models/User"



export async function deleteDeckController(req: Request, res: Response) {
    const deckId = req.params.deckId;
    try {
        if(req.email) {
            const user = await User.findOne({email: req.email});
            if(!user) {
                res.status(400).json({where: {message: "user does not exist"}});
                return;
            }
            
            user.decks = user.decks.filter((deck) => {
             //   console.log(deck.id, deckId)
                return deck._id.toString() !== deckId;
            });
            console.log(user.decks);
            await user.save();
            res.json(user.decks);
        }
    } catch(err) {
        res.status(500).json(err);
    }
}