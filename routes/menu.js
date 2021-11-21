const express = require("express");
const router = express.Router();
var menuData = require('../data/menuDetails')

router.get("/categories", (req, res) => {
  res.render('menu-categories',{layout:'empty'});
});

router.get("/single-categories/:category", (req, res) => {
  var category = req.params.category;
  var MenuDetails= menuData[category];
  //console.log(MenuDetails);
  //console.log(category);
 
  res.render('single-categories',{MenuDetails:MenuDetails,category:category,layout:'empty'})
});


module.exports = router;
