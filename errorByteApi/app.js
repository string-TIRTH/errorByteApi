import express, { response } from "express"
import dotenv from "dotenv"
import path from "path"
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import router from "./src/routes/index.js"
import connectDb from "./src/helpers/db/db.js"
import { errorHandler } from "./src/middlewares/error.handler.js"

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config(
    {
        path: "./src/config/config.env"
    }
)
const url = "mongodb://127.0.0.1:27017/errorByte"
mongoose.connect(url).then(()=>{
    console.log("Connected to DB")
    app.listen(3030,()=>{
        console.log("port 3030");
    })
}).catch((err)=>{
    console.log(err);
});
// const port = process.env.PORT || 3029

// Express - Body Middleware
app.use(express.json())
// Router Middlewares
app.use("/api", router)

app.use(express.static(path.join(__dirname, "public")))

app.use(errorHandler)

app.get("*", (req, res) => {
    res.status(404).json(
        {
            err: "This page doesn't exist."
        }
    )
})

