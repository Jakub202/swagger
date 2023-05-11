'use strict';

var utils = require('../utils/writer.js');
var HomeController = require('../service/HomeControllerService');

module.exports.createHome = function createHome (req, res, next, body, userEmail) {
  HomeController.createHome(body, userEmail)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteHome = function deleteHome (req, res, next, homeId) {
  HomeController.deleteHome(homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editLocation = function editLocation (req, res, next, homeID, latitude, longitude) {
  HomeController.editLocation(homeID, latitude, longitude)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editName = function editName (req, res, next, homeID, name) {
  HomeController.editName(homeID, name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllRoles = function getAllRoles (req, res, next) {
  HomeController.getAllRoles()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHomeByID = function getHomeByID (req, res, next, homeID) {
  HomeController.getHomeByID(homeID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHomesForUser = function getHomesForUser (req, res, next, userEmail) {
  HomeController.getHomesForUser(userEmail)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRoleForUserInHome = function getRoleForUserInHome (req, res, next, userEmail, homeID) {
  HomeController.getRoleForUserInHome(userEmail, homeID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsersInHome = function getUsersInHome (req, res, next, homeID) {
  HomeController.getUsersInHome(homeID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leaveHome = function leaveHome (req, res, next, homeId) {
  HomeController.leaveHome(homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeUserFromHome = function removeUserFromHome (req, res, next, userEmail, homeId) {
  HomeController.removeUserFromHome(userEmail, homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUserRole = function updateUserRole (req, res, next, userEmail, homeId, newRole) {
  HomeController.updateUserRole(userEmail, homeId, newRole)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
