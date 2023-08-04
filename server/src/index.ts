import express, {Request, Response} from "express";
import mongoose from "mongoose";
import cors from "cors";
import {config} from "dotenv";
config();

import Deck from "./models/Deck";
import { createDeckController } from "./routes/controllers/createDeckController";
import { getDeckController } from "./routes/controllers/getDeckController";
import { deleteDeckController } from "./routes/controllers/deleteDeckController";
import { createCardForDeckController } from "./routes/controllers/createCardForDeckController";
import { getOneDeckController } from "./routes/controllers/getOneDeckController";
import { deleteCardOnDeckController } from "./routes/controllers/deleteCardOnDeckController";

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());


app.get("/decks", getDeckController);
app.post("/decks", createDeckController);
app.delete("/decks/:deckId", deleteDeckController);
app.get("/decks/:deckId", getOneDeckController);
app.post("/decks/:deckId/cards", createCardForDeckController);
app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController);



mongoose.connect(process.env.MONGO_URL || "")
.then(() => {
    console.log("connected to DB and listening on port " + PORT);
app.listen(PORT);

})