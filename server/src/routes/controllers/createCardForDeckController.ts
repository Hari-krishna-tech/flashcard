
import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";
import User, {IDeck, IUser} from "../../models/User"





export async function createCardForDeckController(req: Request, res: Response)  {
    const {deckId} = req.params;
    try {
        if(req.email) {
            const user = await User.findOne({email: req.email});
            if(!user) {
                res.status(400).json({message: "user does not exist"});
                return;
            }
            console.log("user exist");
            if(req.body.text === undefined) {
                res.status(400).json({message: "card must have text"});
                return;
            }
           const deck = user.decks.find((deck) => {
                if(deck._id.toString() === deckId) {
                    const card:string = req.body.text;
                    deck.cards.push(card);
                    return true;
                }
                return false;
            }
            );
            
            
            await user.save();
            res.json(deck);
        }
    } catch(err) {
        res.status(500).json({message: "internal server error 2"});
    }
 }