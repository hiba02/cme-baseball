exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("users").del(),
    knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1"),
    knex("users").then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "Hyun-jin",
          last_name: "Ryu",
          email: "hjr@sq.com",
          password: "test"
        },
        {
          first_name: "James",
          last_name: "Lee",
          email: "leej@ai.com",
          password: "test"
        },
        {
          first_name: "Luis",
          last_name: "Pantino",
          email: "lppp@pad.com",
          password: "test"
        },
        {
          first_name: "Taylor",
          last_name: "Trammell",
          email: "tt@pad.com",
          password: "test"
        },
        {
          first_name: "Adrian",
          last_name: "Morejon",
          email: "am@sq.com",
          password: "test"
        },
        {
          first_name: "Michel",
          last_name: "Baez",
          email: "mb123@sq.com",
          password: "test"
        },
        {
          first_name: "Ryan",
          last_name: "Weathers",
          email: "rw1990@sq.com",
          password: "test"
        }
      ]);
    })
  ]);
};
