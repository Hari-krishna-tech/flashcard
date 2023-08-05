import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

export interface IDeck extends mongoose.Document {
    title: string;
    cards: [string];
}

const DeckSchema = new Schema({
    title: String,
    cards: [String]
});

const DeckModel = mongoose.model("Deck", DeckSchema);

export default DeckModel;