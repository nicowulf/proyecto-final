import { Router } from "express";
import {
  createArticle,
  getAllArticles, 
  getArticleById,
  updateArticle,
  deleteArticle,
} from "../controllers/articleController.js";
import { auth } from "../middleware/authMiddleware.js";

const articleRouter = Router()

articleRouter.get("/", getAllArticles)
articleRouter.get("/:id", getArticleById);
articleRouter.post("/", createArticle)
articleRouter.put("/:id", updateArticle);
articleRouter.delete("/:id", deleteArticle);


export { articleRouter }