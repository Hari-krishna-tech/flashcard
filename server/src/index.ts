import express, {Request, Response} from "express";
import mongoose from "mongoose";
import cors from "cors";
import {config} from "dotenv";
config();

import Deck from "./models/Deck";

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());


app.get('/',(req:Request ,res:Response) => {

    res.send("hello world");
})

app.get("/decks", async (req: Request, res: Response) => {
    const decks = await Deck.find();
    res.json(decks);
    });


app.post("/decks", async (req: Request, res: Response) => {
    console.log(req.body);
    const deck = new Deck({
        title: req.body.title || "Untitled Deck",
        });
    const createdDeck = await deck.save();
    res.json(createdDeck);
    });


app.delete("/decks/:deckId", async (req: Request, res: Response) => {
    const deckId = req.params.deckId;
    try {
        const deck = await Deck.findByIdAndDelete(deckId);
        res.json(deck);
    } catch(err) {
        res.status(500).json(err);
    }




});
mongoose.connect(process.env.MONGO_URL || "")
.then(() => {
    console.log("connected to DB and listening on port " + PORT);
app.listen(PORT);

})