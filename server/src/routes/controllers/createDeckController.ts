import Deck from "../../models/Deck";
import express, {Request, Response} from "express";
import mongoose from "mongoose";




export async function createDeckController(req: Request, res: Response)  {
    
    const deck = new Deck({
        title: req.body.title || "Untitled Deck",
        });
    const createdDeck = await deck.save();
    res.json(createdDeck);
 }