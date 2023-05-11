'use strict';


/**
 * Add item to a cabinet
 *
 * homeId Long 
 * itemName String 
 * amount Double 
 * returns Object
 **/
exports.addItemToCabinet = function(homeId,itemName,amount) {
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
 * Delete a item from a cabinet
 *
 * homeId Long 
 * itemId Long 
 * returns Object
 **/
exports.deleteCabinetItem = function(homeId,itemId) {
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
 * Retrieve all items from cabinet
 *
 * homeId Long 
 * returns Object
 **/
exports.getAllCabinetItems = function(homeId) {
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
 * Delete all items from a cabinet
 *
 * homeId Long 
 * returns String
 **/
exports.removeAllCabinetItems = function(homeId) {
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
 * Update the amount of an item in a home's cabinet
 *
 * itemId Long 
 * amount Double 
 * returns String
 **/
exports.updateAmount_1 = function(itemId,amount) {
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

