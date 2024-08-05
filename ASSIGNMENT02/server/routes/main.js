const express = require('express');
const router = express.Router();

// router
router.get('', (req,res)=>{
  const locals = {
    title: "Blog Website",
    description: "Blog created with NodeJs, Express, & MongoDb."
    }  
    res.render('index', { 
      locals
    });
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