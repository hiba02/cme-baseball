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
          position: "P ",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "H Austin  ",
          uniform_number: "18",
          position: "C ",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "H Eric    ",
          uniform_number: "30",
          position: "1B",
          bats: "L",
          throws: "L"
        },
        {
          team_id: 1,
          name: "G Greg    ",
          uniform_number: "05",
          position: "2B",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "M Machado ",
          uniform_number: "27",
          position: "3B",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "C Jake    ",
          uniform_number: "09",
          position: "SS",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "M Will    ",
          uniform_number: "04",
          position: "OF",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "P Tommy   ",
          uniform_number: "28",
          position: "OF",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "N Josh    ",
          uniform_number: "22",
          position: "OF",
          bats: "L",
          throws: "L"
        },
        {
          team_id: 1,
          name: "C Franchy ",
          uniform_number: "28",
          position: "OF",
          bats: "L",
          throws: "R"
        },
        {
          team_id: 2,
          name: "P David   ",
          uniform_number: "33",
          position: "P ",
          bats: "L",
          throws: "L"
        },
        {
          team_id: 2,
          name: "B Austin  ",
          uniform_number: "15",
          position: "C ",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 2,
          name: "M Muncy   ",
          uniform_number: "13",
          position: "1B",
          bats: "L",
          throws: "R"
        },
        {
          team_id: 2,
          name: "L Galvin  ",
          uniform_number: "09",
          position: "2B",
          bats: "L",
          throws: "R"
        },
        {
          team_id: 2,
          name: "T Justin  ",
          uniform_number: "10",
          position: "3B",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 2,
          name: "C Seager  ",
          uniform_number: "05",
          position: "SS",
          bats: "L",
          throws: "R"
        },
        {
          team_id: 2,
          name: "T Chris   ",
          uniform_number: "03",
          position: "OF",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 2,
          name: "P A.J     ",
          uniform_number: "11",
          position: "OF",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 2,
          name: "B Cody    ",
          uniform_number: "35",
          position: "OF",
          bats: "L",
          throws: "L"
        }
      ]);
    })
  ]);
};
