'use strict';

var utils = require('../utils/writer.js');
var MealPlanController = require('../service/MealPlanControllerService');

module.exports.addIngredientsToShoppingListForMealPlan = function addIngredientsToShoppingListForMealPlan (req, res, next, homeId) {
  MealPlanController.addIngredientsToShoppingListForMealPlan(homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addIngredientsToShoppingListForRecipe = function addIngredientsToShoppingListForRecipe (req, res, next, body, homeId) {
  MealPlanController.addIngredientsToShoppingListForRecipe(body, homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generateANewMealForADayInAMealPlan = function generateANewMealForADayInAMealPlan (req, res, next, homeId, recipeId) {
  MealPlanController.generateANewMealForADayInAMealPlan(homeId, recipeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generateMealPlan = function generateMealPlan (req, res, next, body, homeId) {
  MealPlanController.generateMealPlan(body, homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMealFromRefrigerator = function getMealFromRefrigerator (req, res, next, homeId, numberOfUsers) {
  MealPlanController.getMealFromRefrigerator(homeId, numberOfUsers)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMealPlanByHomeId = function getMealPlanByHomeId (req, res, next, homeId) {
  MealPlanController.getMealPlanByHomeId(homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRecipeForDate = function getRecipeForDate (req, res, next, homeId, date) {
  MealPlanController.getRecipeForDate(homeId, date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.markRecipeAsEaten = function markRecipeAsEaten (req, res, next, homeId, date) {
  MealPlanController.markRecipeAsEaten(homeId, date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
