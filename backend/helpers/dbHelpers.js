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

  //get user Id - 4.13.20

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
        // .where("teams.id", "=", id)
        .where("users.id", "=", id)
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

  //new login validation 4.9.20
  const userLoginValidation = (email, password) => {
    return knex("users")
      .where({ email: email })
      .select("id", "password")
      .then(result => {
        if (!result || !result[0]) {
          return; //not found
        }
        const pass = result[0].password;
        console.log("pass", pass);
        console.log("result", result[0]);

        if (password === pass) {
          // return pass;
          return result[0];
        } else {
          console.log("login fail");
        }
      })
      .catch(e => "There was an error logging in");
  };

  //4.19.20: add teams when registration
  const addTeam = function(team_name) {
    console.log("dbhelper addTeam: ", team_name);
    return knex("teams")
      .insert({
        name: team_name
      })
      .returning("*")
      .then(res => res[0]);
  };

  //4.19.20: add userId and teamId when registration
  const addFavoriteTeam = function(userId, teamId) {
    console.log("dbhelper addFavoriteTeam: ", userId, teamId);
    return knex("favorite_teams")
      .insert({
        user_id: userId,
        team_id: teamId
      })
      .returning("*")
      .then(res => res[0]);
  };

  return {
    getUsers,
    getUserInfo,
    getPlayers,
    getPlayersFromSameTeam,
    getPlayersFromUserId,
    registerUser,
    validateUserLogin,
    userLoginValidation,
    addTeam,
    addFavoriteTeam
  };
};
