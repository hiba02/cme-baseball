exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("teams").del(),
    knex.raw("ALTER SEQUENCE teams_id_seq RESTART WITH 1"),
    knex("teams").then(function() {
      // Inserts seed entries
      return knex("teams").insert([
        {
          name: "Sharks"
        },
        {
          name: "Padres"
        },
        {
          name: "Padres"
        },
        {
          name: "Expos"
        }
      ]);
    })
  ]);
};
