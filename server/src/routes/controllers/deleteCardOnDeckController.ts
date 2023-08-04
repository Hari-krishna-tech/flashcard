
import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";



export async function deleteCardOnDeckController(req: Request, res: Response) {
    const deckId = req.params.deckId;
    const index = req.params.index;
    try {
        const deck = await Deck.findById(deckId); 
        if(!deck) {
            return res.status(404).json({message: "Deck not found"});
        }
        deck.cards.splice(parseInt(index), 1);
        await deck.save();
        res.json(deck);
    } catch(err) {
        res.status(500).json(err);
    }
}