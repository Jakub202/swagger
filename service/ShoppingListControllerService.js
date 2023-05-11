'use strict';


/**
 * Add an item to a home's shopping list
 *
 * homeID Long 
 * name String 
 * amount Double 
 * returns String
 **/
exports.addItem = function(homeID,name,amount) {
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
 * Get all items in a home's shopping list
 *
 * homeID Long 
 * returns Object
 **/
exports.getShoppingItemsByHomeID = function(homeID) {
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
 * Remove an item from a home's shopping list
 *
 * itemId Long 
 * returns String
 **/
exports.removeItem = function(itemId) {
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
 * Transfer all items from a home's shopping list to the refrigerator and cabinet
 *
 * homeID Long 
 * date date 
 * returns String
 **/
exports.transferItems = function(homeID,date) {
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
 * Transfer a batch of items from a home's shopping list to the refrigerator and cabinet
 *
 * body List 
 * date date 
 * homeID Long 
 * returns String
 **/
exports.transferItemsBatch = function(body,date,homeID) {
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
 * Update the amount of an item in a home's shopping list
 *
 * itemId Long 
 * amount Double 
 * returns String
 **/
exports.updateAmount = function(itemId,amount) {
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

