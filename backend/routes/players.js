const express = require("express");
const router = express.Router();

module.exports = ({
  getPlayers,
  getPlayersFromSameTeam,
  getPlayersFromUserId,
  getPlayersByUserId,
  addNewPlayers
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

  router.get("/players/:user_id", function(req, res) {
    getPlayersByUserId(req.params.user_id)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(`Error retrieving data: ${err.message}`));
  });

  router.post("/newplayer", function(req, res) {
    console.log("router: /newplayer", req.body);
    const team_id = req.body.team_id;
    const name = req.body.name;
    const uniform_number = req.body.uniform_number;
    const position = req.body.position;
    const bats = req.body.bats;
    const throws = req.body.throws;
    addNewPlayers(team_id, name, uniform_number, position, bats, throws)
      .then(response => res.json(response))
      .catch(e => console.log(e));
  });

  return router;
};
