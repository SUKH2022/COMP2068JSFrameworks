const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/**
 * GET / HOME
*/
router.get('', async (req,res)=>{
  const locals = {
    title: "Blog Website",
    description: "Blog created with NodeJs, Express, & MongoDb."
    }  
  try {
    const data = await Post.find();
    res.render('index', { locals, data });
  } catch (error) {
    console.log(error);
  }
});

/**
 * GET / About
*/
router.get('/about', (req, res) => {
  res.render('about', {
    // currentRoute: '/about'
  });
});


module.exports = router;