import { connectDB } from "./src/config/mongo.js";
import express from 'express';
import {articleRouter} from "./src/routes/articleRouter.js"
import cors from "cors"

process.loadEnvFile();
const PORT = process.env.PORT 

const app = express()
app.use(express.json())
app.use(cors())

connectDB()

app.use("/api/articles", articleRouter)

app.listen(PORT, () => {
    console.log("Server listening on port http://localhost:" + PORT)
})

