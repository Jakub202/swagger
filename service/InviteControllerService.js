'use strict';


/**
 * Accept an invite
 *
 * inviteId Long 
 * returns String
 **/
exports.acceptInvite = function(inviteId) {
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
 * Decline an invite
 *
 * inviteId Long 
 * returns String
 **/
exports.declineInvite = function(inviteId) {
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
 * Delete an invite
 *
 * inviteId Long 
 * returns String
 **/
exports.deleteInvite = function(inviteId) {
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
 * Retrieve all the pending invites
 *
 * userEmail String 
 * returns List
 **/
exports.getPendingInvites = function(userEmail) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "role" : "EIER",
  "invitingUserEmail" : "invitingUserEmail",
  "id" : 0,
  "invitedUserEmail" : "invitedUserEmail",
  "home" : {
    "name" : "name",
    "location" : {
      "latitude" : 6.027456183070403,
      "longitude" : 1.4658129805029452
    },
    "id" : 0,
    "users" : [ {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "password" : [ "", "" ],
      "salt" : [ "", "" ],
      "homeUserRoles" : [ {
        "role" : "EIER",
        "id" : 5
      }, {
        "role" : "EIER",
        "id" : 5
      } ],
      "homes" : [ null, null ],
      "email" : "email"
    }, {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "password" : [ "", "" ],
      "salt" : [ "", "" ],
      "homeUserRoles" : [ {
        "role" : "EIER",
        "id" : 5
      }, {
        "role" : "EIER",
        "id" : 5
      } ],
      "homes" : [ null, null ],
      "email" : "email"
    } ]
  },
  "status" : "PENDING"
}, {
  "role" : "EIER",
  "invitingUserEmail" : "invitingUserEmail",
  "id" : 0,
  "invitedUserEmail" : "invitedUserEmail",
  "home" : {
    "name" : "name",
    "location" : {
      "latitude" : 6.027456183070403,
      "longitude" : 1.4658129805029452
    },
    "id" : 0,
    "users" : [ {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "password" : [ "", "" ],
      "salt" : [ "", "" ],
      "homeUserRoles" : [ {
        "role" : "EIER",
        "id" : 5
      }, {
        "role" : "EIER",
        "id" : 5
      } ],
      "homes" : [ null, null ],
      "email" : "email"
    }, {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "password" : [ "", "" ],
      "salt" : [ "", "" ],
      "homeUserRoles" : [ {
        "role" : "EIER",
        "id" : 5
      }, {
        "role" : "EIER",
        "id" : 5
      } ],
      "homes" : [ null, null ],
      "email" : "email"
    } ]
  },
  "status" : "PENDING"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all the sent invites
 *
 * homeId Long 
 * returns List
 **/
exports.getSentInvitesFromHome = function(homeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "role" : "EIER",
  "invitingUserEmail" : "invitingUserEmail",
  "id" : 0,
  "invitedUserEmail" : "invitedUserEmail",
  "home" : {
    "name" : "name",
    "location" : {
      "latitude" : 6.027456183070403,
      "longitude" : 1.4658129805029452
    },
    "id" : 0,
    "users" : [ {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "password" : [ "", "" ],
      "salt" : [ "", "" ],
      "homeUserRoles" : [ {
        "role" : "EIER",
        "id" : 5
      }, {
        "role" : "EIER",
        "id" : 5
      } ],
      "homes" : [ null, null ],
      "email" : "email"
    }, {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "password" : [ "", "" ],
      "salt" : [ "", "" ],
      "homeUserRoles" : [ {
        "role" : "EIER",
        "id" : 5
      }, {
        "role" : "EIER",
        "id" : 5
      } ],
      "homes" : [ null, null ],
      "email" : "email"
    } ]
  },
  "status" : "PENDING"
}, {
  "role" : "EIER",
  "invitingUserEmail" : "invitingUserEmail",
  "id" : 0,
  "invitedUserEmail" : "invitedUserEmail",
  "home" : {
    "name" : "name",
    "location" : {
      "latitude" : 6.027456183070403,
      "longitude" : 1.4658129805029452
    },
    "id" : 0,
    "users" : [ {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "password" : [ "", "" ],
      "salt" : [ "", "" ],
      "homeUserRoles" : [ {
        "role" : "EIER",
        "id" : 5
      }, {
        "role" : "EIER",
        "id" : 5
      } ],
      "homes" : [ null, null ],
      "email" : "email"
    }, {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "password" : [ "", "" ],
      "salt" : [ "", "" ],
      "homeUserRoles" : [ {
        "role" : "EIER",
        "id" : 5
      }, {
        "role" : "EIER",
        "id" : 5
      } ],
      "homes" : [ null, null ],
      "email" : "email"
    } ]
  },
  "status" : "PENDING"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send an invite to a user for joining a home
 *
 * body Invite 
 * returns Object
 **/
exports.sendInvite = function(body) {
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

