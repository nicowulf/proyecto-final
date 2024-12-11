import { Router } from "express";
import { createArticle, getAllArticles } from "../controllers/articleController.js"

const articleRouter = Router()

articleRouter.get("/", getAllArticles)
articleRouter.post("/", createArticle)


export { articleRouter }