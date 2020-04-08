const express = require("express");
const router = express.Router();

module.exports = ({
  getPlayers,
  getPlayersFromSameTeam,
  getPlayersFromUserId
}) => {
  router.get("/", function(req, res) {
    getPlayers()
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(`Error retrieving data: ${err.message}`));
  });

  router.get("/:team_id", function(req, res) {
    getPlayersFromSameTeam(req.params.team_id)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(`Error retrieving data: ${err.message}`));
  });

  router.get("/by_user/:user_id", function(req, res) {
    getPlayersFromUserId(req.params.user_id)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
