import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import commentRoute from "./routes/comments.js";
import fileUpload from 'express-fileupload';

const app = express();

app.use(cors());
app.use(fileUpload())
app.use(express.json());
app.use(express.static('uploads'))

app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);
app.use('/api/comments', commentRoute);

async function start(){
    try {
        await mongoose.connect(
            'mongodb+srv://Admin:admin@cluster0.6frfxei.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0'
        );
        app.listen(3002, ()=> console.log(`Server started on port: ${3002}` ));
    } catch (error) {
        console.log(error);
    }
}

start();