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
    const { title, content, authorId, tags }= req.body
    try{
        const newArticle = await Article.createArticle({})
        res.status(201).json(newArticle)
    } catch(error){
        res.status(500).json({ status: 500, error: error.message });
    }
}

export { getAllArticles, createArticle }