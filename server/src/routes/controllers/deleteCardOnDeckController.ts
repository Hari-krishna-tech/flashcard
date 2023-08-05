
import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";
import User from "../../models/User";



export async function deleteCardOnDeckController(req: Request, res: Response) {
    const deckId = req.params.deckId;
    const index = req.params.index;
    try {
        const user = await User.findOne({email: req.email});
        //console.log(deckId, index)
        if(!user) {
            return res.status(404).json({message: "user does not exist"});
        }
        const deck = user.decks.find((deck) => {
            if(deck._id.toString() === deckId) {
               deck.cards.splice(parseInt(index), 1);
                return true;
            }
        });
        await user.save();
        console.log("delete" ,deck);
        return res.json(deck);
    } catch(err) {
        res.status(500).json(err);
    }
}