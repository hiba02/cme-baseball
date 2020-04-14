const express = require("express");
const router = express.Router();

module.exports = ({ addTeam, getTeamIdByteamName }) => {
  router.post("/addTeam", function(req, res) {
    console.log("router: /addTeam", req.body);
    const team_name = req.body.teamName;

    addTeam(team_name)
      .then(response => res.json(response))
      .catch(e => console.log(e));
  });

  // get team id by name 4.13.20
  router.get("/:name", function(req, res) {
    console.log("/:name", req.params.name);
    getTeamIdByteamName(req.params.name).then(result => res.json(result));
  });

  return router;
};
