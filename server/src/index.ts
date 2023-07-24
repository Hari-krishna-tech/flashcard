import express, {Request, Response} from "express";
import mongoose from "mongoose";

const app = express();

//mongodb+srv://hari:hari@authentification-demo.7swcq.mongodb.net/?retryWrites=true&w=majority
const db = mongoose.connect("mongodb+srv://hari:hari@authentification-demo.7swcq.mongodb.net/?retryWrites=true&w=majority");



app.get('/',(req:Request ,res:Response) => {

    res.send("hello world");
})

app.listen(5001);