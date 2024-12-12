
import Article from "../models/articleModel.js"


const getAllArticles = async (req, res ) => {
    try {
        const articles = await Article.getAllArticles()
        res.json(articles)        
    } catch (error) {
        res.status(500).json({status:500, error: error.message})
    }
}

const createArticle =async (req, res) => {
    const { title, content, author, tags }= req.body
    const articleBody = { title, content, author, tags };
    try{
        const newArticle = await Article.createArticle({})
        res.status(201).json(newArticle)
    } catch(error){
        res.status(500).json({ status: 500, error: error.message });
    }
}

const getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const articleFound = await Article.getArticleById(id);
    if (!articleFound) return res.status(404).json({ error: "Aricle not found" });
    res.json(articleFound);
  } catch (error) {
    res.status(500).json({ error: "Error finding your article" });
  }
};

const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const articleFound = await Article.updateArticle(id, body);
    if (!articleFound)
      return res.status(404).json({ message: "Article not found" });
    res.json(articleFound);
  } catch (error) {
    res.status(500).json({ error: "Error finding your article" });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const articleFound = await Article.deleteArticle(id);
    if (!articleFound)
      return res.status(404).json({ message: "Article not found" });
    res.json(articleFound);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

export { getAllArticles, createArticle, getArticleById, updateArticle, deleteArticle }