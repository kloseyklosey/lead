const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

// const User = require('../models/User')


module.exports = {
  // getProfile: async (req, res) => {
  //   try {
  //     const posts = await Post.find({ user: req.user.id });
  //     res.render("profile.ejs", {user: req.user, posts:posts });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // editProfile: async (req, res) => {
  //   try {
      
  //     res.render("editprofile.ejs", {user: req.user });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // getFeed: async (req, res) => {
  //   try {
  //     const posts = await Post.find().sort({createdAt: "desc"}).lean();
   
  //     res.render("feed.ejs", { posts: posts, user: req.user });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
    // getPost: async (req, res) => {
    //   try {
    //     const posts = await Post.find(); // Retrieve all posts
    //     console.log(posts)
    //     res.render("post.ejs", { posts: posts});
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  
    createPost: async (req, res) => {
      try {
        const imagePromises = req.files.map((file) => cloudinary.uploader.upload(file.path));
        const uploadedImages = await Promise.all(imagePromises);

        const images = uploadedImages.map((image) => ({
          url: image.secure_url,
          cloudinaryId: image.public_id,
        }));
    
        // console.log(images.forEach(image => {image.url, image.cloudinaryId}))
        const post = {
          firstName: req.body.firstName,
          middleName: req.body.middleName,
          lastName: req.body.lastName,
          email: req.body.email,
          socials: req.body.socials,
          street: req.body.street,
          appt: req.body.appt,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          phone: req.body.phone,
          caption: req.body.caption,
          imageOne: images[0].url,
          cloudinaryIdOne: images[0].cloudinaryId,
          imageTwo: images[1].url,
          cloudinaryIdTwo: images[1].cloudinaryId,
    
        };
    
        await Post.create(post);
        
        res.redirect("/thankyou");
      } catch (err) {
        console.log(err);
      }
    },
  
};
