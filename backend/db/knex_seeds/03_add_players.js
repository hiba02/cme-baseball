exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("players").del(),
    knex.raw("ALTER SEQUENCE players_id_seq RESTART WITH 1"),
    knex("players").then(function() {
      // Inserts seed entries
      return knex("players").insert([
        {
          team_id: 1,
          name: "R Hyun-jin",
          uniform_number: "99",
          position: "P",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "H Austin",
          uniform_number: "18",
          position: "C",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "H Eric",
          uniform_number: "30",
          position: "1B",
          bats: "L",
          throws: "L"
        },
        {
          team_id: 1,
          name: "R Hyun-jin",
          uniform_number: "99",
          position: "P",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "G Greg",
          uniform_number: "5",
          position: "2B",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "M Machado",
          uniform_number: "27",
          position: "3B",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "C Jake",
          uniform_number: "9",
          position: "SS",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "R Hyun-jin",
          uniform_number: "99",
          position: "P",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "M Will",
          uniform_number: "4",
          position: "OF",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "P Tommy",
          uniform_number: "28",
          position: "OF",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "N Josh",
          uniform_number: "22",
          position: "OF",
          bats: "L",
          throws: "L"
        },
        {
          team_id: 1,
          name: "C Franchy",
          uniform_number: "28",
          position: "OF",
          bats: "L",
          throws: "R"
        },
      ]);
    })
  ]);
};