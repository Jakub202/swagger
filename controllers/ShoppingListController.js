'use strict';

var utils = require('../utils/writer.js');
var ShoppingListController = require('../service/ShoppingListControllerService');

module.exports.addItem = function addItem (req, res, next, homeID, name, amount) {
  ShoppingListController.addItem(homeID, name, amount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getShoppingItemsByHomeID = function getShoppingItemsByHomeID (req, res, next, homeID) {
  ShoppingListController.getShoppingItemsByHomeID(homeID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeItem = function removeItem (req, res, next, itemId) {
  ShoppingListController.removeItem(itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transferItems = function transferItems (req, res, next, homeID, date) {
  ShoppingListController.transferItems(homeID, date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transferItemsBatch = function transferItemsBatch (req, res, next, body, date, homeID) {
  ShoppingListController.transferItemsBatch(body, date, homeID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAmount = function updateAmount (req, res, next, itemId, amount) {
  ShoppingListController.updateAmount(itemId, amount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
