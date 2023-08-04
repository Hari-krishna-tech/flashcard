import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";



export  async function getOneDeckController(req: Request, res: Response) {
    const {deckId} = req.params;
 //   console.log(deckId)
    const decks = await Deck.findById(deckId);
    res.json(decks);
}