
import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";



export async function deleteDeckController(req: Request, res: Response) {
    const deckId = req.params.deckId;
    try {
        const deck = await Deck.findByIdAndDelete(deckId);
        res.json(deck);
    } catch(err) {
        res.status(500).json(err);
    }
}