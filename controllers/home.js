const Post = require("../models/Post");
module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },

    getThankYou: (req, res) => {

      res.render("thankyou.ejs");
    },
    getPosts: async (req, res) => {

      const posts = await Post.find(); // Retrieve all posts
       
        res.render("post.ejs", { posts: posts});
    },
  };



