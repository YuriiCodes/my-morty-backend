import express from 'express';
import mongoose from "mongoose";
import Bank from "./Bank.js";
import router from "./router.mjs";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;
const password = process.env.PASSWORD;


const DB_URL = `mongodb+srv://user:${password}@cluster0.mhzgp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

// enable CORS for preflight operations
app.options('*', cors());

app.use(express.json());
app.use('/api', router);

app.use(cors({origin:true,credentials: true}));

app.get('/', (req, res) => {
    res.json({message:"Welcome to MyMorty api! To see banks info go to /api/banks, or visit https://github.com/YuriiCodes/my-morty-backend/blob/main/README.md for docs"});
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}!`);
        });
    } catch (e) {
        console.log(e);
    }
}

startApp();