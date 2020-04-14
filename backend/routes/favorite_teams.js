const express = require("express");
const router = express.Router();

module.exports = ({ addFavoriteTeam }) => {
  router.post("/addFavoriteTeam", function(req, res) {
    console.log("router: /addFavoriteTeam", req.body);
    const userId = req.body.userId;
    const teamId = req.body.teamId;
    addFavoriteTeam(userId, teamId)
      .then(response => res.json(response))
      .catch(e => console.log(e));
  });

  return router;
};
