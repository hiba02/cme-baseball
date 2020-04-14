const express = require("express");
const router = express.Router();

module.exports = ({ addTeam, getTeamIdByteamName, getTeamNameByUserId }) => {
  router.post("/addTeam", function(req, res) {
    console.log("router: /addTeam", req.body, req.body.userId);
    const team_name = req.body.teamName;
    const user_id = req.body.userId;
    addTeam(team_name, user_id)
      .then(response => res.json(response))
      .catch(e => console.log(e));
  });

  // get team name by user id 4.14.20
  router.get("/getTeamName/:id", function(req, res) {
    console.log("/:name", req.params.name);
    getTeamNameByUserId(req.params.name).then(result => res.json(result));
  });

  // get team id by name 4.13.20
  router.get("/:name", function(req, res) {
    console.log("/:name", req.params.name);
    getTeamIdByteamName(req.params.name).then(result => res.json(result));
  });

  return router;
};
