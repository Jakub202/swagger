'use strict';


/**
 * Adds the missing ingredients for a meal plan to the shopping list
 *
 * homeId Long 
 * returns String
 **/
exports.addIngredientsToShoppingListForMealPlan = function(homeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds the missing ingredients for a meal to the shopping list
 *
 * body Recipe 
 * homeId Long 
 * returns String
 **/
exports.addIngredientsToShoppingListForRecipe = function(body,homeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Generates a new meal for a day in a meal plan
 *
 * homeId Long 
 * recipeId Long 
 * returns Map
 **/
exports.generateANewMealForADayInAMealPlan = function(homeId,recipeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Generate a meal plan for a home
 *
 * body MealPlan 
 * homeId Long 
 * returns Map
 **/
exports.generateMealPlan = function(body,homeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Generates a meal depending on the ingredients in the fridge
 *
 * homeId Long 
 * numberOfUsers Integer 
 * returns Object
 **/
exports.getMealFromRefrigerator = function(homeId,numberOfUsers) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the active meal plan for a home
 *
 * homeId Long 
 * returns Map
 **/
exports.getMealPlanByHomeId = function(homeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a recipe for a given date from the active meal plan for a home
 *
 * homeId Long 
 * date date 
 * returns Map
 **/
exports.getRecipeForDate = function(homeId,date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Marks meal plan recipe as eaten, and updates the fridge accordingly
 *
 * homeId Long 
 * date date 
 * returns String
 **/
exports.markRecipeAsEaten = function(homeId,date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

