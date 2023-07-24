import express, {Request, Response} from "express";
import mongoose from "mongoose";


import Deck from "./models/Deck";

const app = express();
const PORT = 5001;

app.use(express.json());

app.get('/',(req:Request ,res:Response) => {

    res.send("hello world");
})


app.post("/decks", async (req: Request, res: Response) => {
    console.log(req.body);
    const deck = new Deck({
        title: req.body.title || "Untitled Deck",
        });
    const createdDeck = await deck.save();
    res.json(createdDeck);
    });
mongoose.connect("mongodb+srv://hari:hari1234@authentification-demo.7swcq.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("connected to DB and listening on port " + PORT);
app.listen(PORT);

})