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
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User", // Supone que tienes un modelo llamado 'User' para los autores
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

export default { getAllArticles, createArticle }
