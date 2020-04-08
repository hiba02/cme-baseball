const express = require("express");
const router = express.Router();

module.exports = ({ getUsers, getUserInfo }) => {
  router.get("/", function(req, res) {
    getUsers()
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(`Error retrieving data: ${err.message}`));
  });

  router.get("/:users_id", function(req, res) {
    console.log("userid", req.params.users_id);
    getUserInfo(req.params.users_id).then(result => res.json(result));
  });

  return router;
};
