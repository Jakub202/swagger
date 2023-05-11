'use strict';

var utils = require('../utils/writer.js');
var UserController = require('../service/UserControllerService');

module.exports.createUser = function createUser (req, res, next, body) {
  UserController.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.login = function login (req, res, next, body) {
  UserController.login(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.refreshToken = function refreshToken (req, res, next, email) {
  UserController.refreshToken(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFirstName = function updateFirstName (req, res, next, email, firstName) {
  UserController.updateFirstName(email, firstName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLastName = function updateLastName (req, res, next, body, password) {
  UserController.updateLastName(body, password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLastName_1 = function updateLastName_1 (req, res, next, email, lastName) {
  UserController.updateLastName_1(email, lastName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
