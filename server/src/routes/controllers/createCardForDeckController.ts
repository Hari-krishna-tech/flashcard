
import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";





export async function createCardForDeckController(req: Request, res: Response)  {
    const {deckId} = req.params;
    const deck = await Deck.findById(deckId);
    
    if (!deck) {
        return res.status(404).json({message: "Deck not found"});
    }
    const {text} = req.body;
    deck.cards.push(text);
    await deck.save();

    res.json(deck);
 }