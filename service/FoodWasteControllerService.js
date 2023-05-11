'use strict';


/**
 * Add food waste entry
 *
 * homeId Long 
 * date date 
 * ingredientName String 
 * amount Double 
 * returns String
 **/
exports.addWaste = function(homeId,date,ingredientName,amount) {
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
 * Add a list of food waste entries
 *
 * body Map 
 * homeId Long 
 * date date 
 * returns String
 **/
exports.addWasteList = function(body,homeId,date) {
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
 * Get category waste stats for a specific home
 *
 * homeId Long 
 * startDate date 
 * endDate date 
 * returns Object
 **/
exports.getCategoryWasteStatsByHomeId = function(homeId,startDate,endDate) {
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
 * Get food waste stats by date range
 *
 * homeId Long 
 * startDate date 
 * endDate date 
 * returns Object
 **/
exports.getStatsByDateRange = function(homeId,startDate,endDate) {
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
 * Get food waste by specific date
 *
 * homeId Long 
 * date date 
 * returns Object
 **/
exports.getWasteByDate = function(homeId,date) {
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
 * Get food waste for a date range
 *
 * homeId Long 
 * startDate date 
 * endDate date 
 * returns Object
 **/
exports.getWasteByDateRange = function(homeId,startDate,endDate) {
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

