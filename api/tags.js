const express = require('express');
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName } = require('../db');

tagsRouter.use((req, res, next) => {
    console.log("A request is being made to /tags");
  
    next();
});
  
tagsRouter.get('/:tagName/posts', async (req, res) => {
    // const tags = await getAllTags();
  
    res.send({
      tags
    });

    try {
        const tags = await getPostsByTagName();
        
        

    } catch ({name, message}) {
        next({name, message})
    }
});

module.exports = tagsRouter;