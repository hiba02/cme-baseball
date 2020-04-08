module.exports = knex => {
  const getUsers = () => {
    return knex.select("*").from("users");
  };

  //get all users
  const getUserInfo = id => {
    return knex
      .select("*")
      .from("users")
      .where("users.id", "=", id);
  };

  //get all players
  const getPlayers = () => {
    return knex.select("*").from("players");
  };

  //get all players with same team
  const getPlayersFromSameTeam = id => {
    return knex
      .select("*")
      .from("players")
      .where("players.team_id", "=", id);
  };

  //get all players from user ID
  const getPlayersFromUserId = id => {
    console.log("id from getPlayersFromUserId", id);
    return (
      knex
        .select("*")
        .from("users")
        .innerJoin("favorite_teams", "users.id", "favorite_teams.user_id")
        .innerJoin("teams", "favorite_teams.team_id", "teams.id")
        .innerJoin("players", "teams.id", "players.team_id")
        // .where("favorite_teams.team_id", "=", id);
        .where("teams.id", "=", id)
    );
  };

  return {
    getUsers,
    getUserInfo,
    getPlayers,
    getPlayersFromSameTeam,
    getPlayersFromUserId
  };
};
