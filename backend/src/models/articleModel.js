import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Middleware para actualizar el campo `updatedAt` antes de guardar
ArticleSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Article = mongoose.model("article", articleSchema)

const getAllArticles = async () => {
    try {
        const articles = await Article.find()
        return articles
    } catch (error) {
        throw new Error("Error trying to get articles")
    }
}

const createArticle = async (dataArticle) => {
    try {
        const newArticle = new Article(dataArticle)
        await newArticle.save()
        return newArticle
    } catch(error){
        throw new Error("Error creating the new article")
    }
}

const getArticleById = async (id) => {
  try {
    return await Article.findById(id);
  } catch (error) {
    throw new Error(`Error fetching article by ID: ${error.message}`);
  }
};

const updateArticle = async (id, data) => {
  try {
    return await Article.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error(`Error updating article: ${error.message}`);
  }
};

const deleteArticle = async (id) => {
  try {
    return await Article.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error deleting article: ${error.message}`);
  }
};


export default { Article, getAllArticles, createArticle, getArticleById, updateArticle, deleteArticle }
