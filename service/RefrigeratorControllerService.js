'use strict';


/**
 * Add an item to a home's refrigerator
 *
 * homeId Long 
 * ingredientName String 
 * amount Double 
 * date date 
 * returns String
 **/
exports.addRefrigeratorItem = function(homeId,ingredientName,amount,date) {
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
 * Retrieve all ingredients
 *
 * returns List
 **/
exports.getAllIngredients = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "unit" : "unit",
  "price" : 0.8008281904610115,
  "name" : "name",
  "category" : "Melkeprodukter"
}, {
  "unit" : "unit",
  "price" : 0.8008281904610115,
  "name" : "name",
  "category" : "Melkeprodukter"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all items from a home's refrigerator
 *
 * homeId Long 
 * returns Object
 **/
exports.getAllRefrigeratorItems = function(homeId) {
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
 * Get's the expiration date for categories
 *
 * returns Map
 **/
exports.getCategoryExpirationTimes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get ingredients by a filter
 *
 * filter String 
 * returns List
 **/
exports.getFilteredIngredients = function(filter) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "unit" : "unit",
  "price" : 0.8008281904610115,
  "name" : "name",
  "category" : "Melkeprodukter"
}, {
  "unit" : "unit",
  "price" : 0.8008281904610115,
  "name" : "name",
  "category" : "Melkeprodukter"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete all items from a home's refrigerator
 *
 * homeId Long 
 * returns String
 **/
exports.removeAllRefrigeratorItems = function(homeId) {
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
 * Remove an item from a home's refrigerator
 *
 * homeId Long 
 * ingredientName String 
 * returns String
 **/
exports.removeRefrigeratorItem = function(homeId,ingredientName) {
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
 * Update an item's amount in a home's refrigerator
 *
 * homeId Long 
 * ingredientName String 
 * updatedAmount Double 
 * returns String
 **/
exports.updateRefrigeratorItemAmount = function(homeId,ingredientName,updatedAmount) {
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

