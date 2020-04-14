const express = require("express");
const router = express.Router();

module.exports = ({ addTeam }) => {
  router.get("/:users_id", function(req, res) {
    console.log("userid", req.params.users_id);
    getUserInfo(req.params.users_id).then(result => res.json(result));
  });

  router.post("/addTeam", function(req, res) {
    console.log("router: /addTeam", req.body);
    const team_name = req.body.teamName;

    addTeam(team_name)
      .then(response => res.json(response))
      .catch(e => console.log(e));
  });

  return router;
};
