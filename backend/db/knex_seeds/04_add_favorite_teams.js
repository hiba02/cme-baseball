exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("favorite_teams").del(),
    knex.raw("ALTER SEQUENCE favorite_teams_id_seq RESTART WITH 1"),
    knex("favorite_teams").then(function() {
      // Inserts seed entries
      return knex("favorite_teams").insert([
        {
          user_id: 1,
          team_id: 1
        },
        {
          user_id: 2,
          team_id: 2
        }
      ]);
    })
  ]);
};
