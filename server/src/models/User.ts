import mongoose from "mongoose";
import Deck from "./Deck";
import isEmail  from "validator";
import bcrypt from "bcrypt";
// import { IDeck } from "./Deck";

const Schema = mongoose.Schema;
export interface IDeck extends mongoose.Document {
  title: string;
  cards: [string];
}

const DeckSchema = new Schema<IDeck>({
  title: String,
  cards: [String]
});
export interface IUser extends mongoose.Document {

    email: string;
    password: string;
    decks: IDeck[],
    tokens: [string];
}


const UserSchema = new Schema<IUser>({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    decks: {type: [DeckSchema]},
    tokens: {type: [String]}
});
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err:any) {
      return next(err);
    }
  });
  


const UserModel = mongoose.model("User", UserSchema);

export default UserModel;