import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";



export  async function getDeckController(req: Request, res: Response) {
    const decks = await Deck.find();
    res.json(decks);
}