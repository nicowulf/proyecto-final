import { connectDB } from "./src/config/mongo.js";
import express from 'express';
import {articleRouter} from "./src/routes/articleRouter.js"
import cors from "cors"
import { checkJwtSecret } from "./src/middleware/envMiddleware";
import { userRouter } from "./src/routes/userRouter";

process.loadEnvFile();
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())

app.use(checkJwtSecret);

connectDB()

app.use("/api/articles", articleRouter)
app.use("/api/users", userRouter);
app.listen(PORT, () => {
    console.log("Server listening on port http://localhost:" + PORT)
})

