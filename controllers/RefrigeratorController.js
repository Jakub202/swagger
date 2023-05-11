'use strict';

var utils = require('../utils/writer.js');
var RefrigeratorController = require('../service/RefrigeratorControllerService');

module.exports.addRefrigeratorItem = function addRefrigeratorItem (req, res, next, homeId, ingredientName, amount, date) {
  RefrigeratorController.addRefrigeratorItem(homeId, ingredientName, amount, date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllIngredients = function getAllIngredients (req, res, next) {
  RefrigeratorController.getAllIngredients()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllRefrigeratorItems = function getAllRefrigeratorItems (req, res, next, homeId) {
  RefrigeratorController.getAllRefrigeratorItems(homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCategoryExpirationTimes = function getCategoryExpirationTimes (req, res, next) {
  RefrigeratorController.getCategoryExpirationTimes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilteredIngredients = function getFilteredIngredients (req, res, next, filter) {
  RefrigeratorController.getFilteredIngredients(filter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeAllRefrigeratorItems = function removeAllRefrigeratorItems (req, res, next, homeId) {
  RefrigeratorController.removeAllRefrigeratorItems(homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeRefrigeratorItem = function removeRefrigeratorItem (req, res, next, homeId, ingredientName) {
  RefrigeratorController.removeRefrigeratorItem(homeId, ingredientName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateRefrigeratorItemAmount = function updateRefrigeratorItemAmount (req, res, next, homeId, ingredientName, updatedAmount) {
  RefrigeratorController.updateRefrigeratorItemAmount(homeId, ingredientName, updatedAmount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
