'use strict';


/**
 * Retrieve all recipes
 *
 * returns List
 **/
exports.getAllRecipes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image" : "image",
  "recipeIngredients" : [ {
    "amount" : 1.4658129805029452,
    "ingredient" : {
      "unit" : "unit",
      "price" : 0.8008281904610115,
      "name" : "name",
      "category" : "Melkeprodukter"
    },
    "id" : 6
  }, {
    "amount" : 1.4658129805029452,
    "ingredient" : {
      "unit" : "unit",
      "price" : 0.8008281904610115,
      "name" : "name",
      "category" : "Melkeprodukter"
    },
    "id" : 6
  } ],
  "name" : "name",
  "description" : "description",
  "id" : 0
}, {
  "image" : "image",
  "recipeIngredients" : [ {
    "amount" : 1.4658129805029452,
    "ingredient" : {
      "unit" : "unit",
      "price" : 0.8008281904610115,
      "name" : "name",
      "category" : "Melkeprodukter"
    },
    "id" : 6
  }, {
    "amount" : 1.4658129805029452,
    "ingredient" : {
      "unit" : "unit",
      "price" : 0.8008281904610115,
      "name" : "name",
      "category" : "Melkeprodukter"
    },
    "id" : 6
  } ],
  "name" : "name",
  "description" : "description",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the image for a recipe
 *
 * imageName String 
 * returns Object
 **/
exports.getImage = function(imageName) {
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
 * Get random recipes
 *
 * numberOfRecipes Integer 
 * returns List
 **/
exports.getRandomRecipes = function(numberOfRecipes) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image" : "image",
  "recipeIngredients" : [ {
    "amount" : 1.4658129805029452,
    "ingredient" : {
      "unit" : "unit",
      "price" : 0.8008281904610115,
      "name" : "name",
      "category" : "Melkeprodukter"
    },
    "id" : 6
  }, {
    "amount" : 1.4658129805029452,
    "ingredient" : {
      "unit" : "unit",
      "price" : 0.8008281904610115,
      "name" : "name",
      "category" : "Melkeprodukter"
    },
    "id" : 6
  } ],
  "name" : "name",
  "description" : "description",
  "id" : 0
}, {
  "image" : "image",
  "recipeIngredients" : [ {
    "amount" : 1.4658129805029452,
    "ingredient" : {
      "unit" : "unit",
      "price" : 0.8008281904610115,
      "name" : "name",
      "category" : "Melkeprodukter"
    },
    "id" : 6
  }, {
    "amount" : 1.4658129805029452,
    "ingredient" : {
      "unit" : "unit",
      "price" : 0.8008281904610115,
      "name" : "name",
      "category" : "Melkeprodukter"
    },
    "id" : 6
  } ],
  "name" : "name",
  "description" : "description",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

