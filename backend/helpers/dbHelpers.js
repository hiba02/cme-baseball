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

  //rabbithole
  const registerUser = function(first_name, last_name, email, password) {
    console.log("dbhelper: ", first_name, last_name, email, password);
    return knex("users")
      .insert({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
      })
      .returning("*")
      .then(res => res[0]);
    // will return the id for login / cookie session
  };

  //rabbithole
  const validateUserLogin = function(email, password) {
    return knex("users")
      .select("*")
      .where({
        email: email,
        password: password
      })
      .then(res => res[0])
      .catch(e => "There was an error logging in");
  };
  return {
    getUsers,
    getUserInfo,
    getPlayers,
    getPlayersFromSameTeam,
    getPlayersFromUserId,
    registerUser,
    validateUserLogin
  };
};
