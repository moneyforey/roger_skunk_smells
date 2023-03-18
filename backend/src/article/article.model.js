const { Schema, model } = require("mongoose");

const articleSchema = new Schema({
      
})

const Article = model('article',articleSchema);
module.exports = Article;