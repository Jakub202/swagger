'use strict';

var utils = require('../utils/writer.js');
var RecipeController = require('../service/RecipeControllerService');

module.exports.getAllRecipes = function getAllRecipes (req, res, next) {
  RecipeController.getAllRecipes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImage = function getImage (req, res, next, imageName) {
  RecipeController.getImage(imageName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRandomRecipes = function getRandomRecipes (req, res, next, numberOfRecipes) {
  RecipeController.getRandomRecipes(numberOfRecipes)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
