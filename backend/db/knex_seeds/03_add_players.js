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
          throws: "R",
          check: false
        },
        {
          team_id: 1,
          name: "H Austin  ",
          uniform_number: "18",
          position: "C",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 1,
          name: "H Eric    ",
          uniform_number: "30",
          position: "1B",
          bats: "L",
          throws: "L",
          check: false
        },
        {
          team_id: 1,
          name: "G Greg    ",
          uniform_number: "05",
          position: "2B",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 1,
          name: "M Machado ",
          uniform_number: "27",
          position: "3B",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 1,
          name: "C Jake    ",
          uniform_number: "09",
          position: "SS",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 1,
          name: "M Will    ",
          uniform_number: "04",
          position: "RF",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 1,
          name: "P Tommy   ",
          uniform_number: "28",
          position: "LF",
          bats: "R",
          throws: "R"
        },
        {
          team_id: 1,
          name: "N Josh    ",
          uniform_number: "22",
          position: "CF",
          bats: "L",
          throws: "L",
          check: false
        },
        {
          team_id: 2,
          name: "P David   ",
          uniform_number: "33",
          position: "P",
          bats: "L",
          throws: "L",
          check: false
        },
        {
          team_id: 2,
          name: "B Austin  ",
          uniform_number: "15",
          position: "C",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 2,
          name: "M Muncy   ",
          uniform_number: "13",
          position: "1B",
          bats: "L",
          throws: "R",
          check: false
        },
        {
          team_id: 2,
          name: "L Galvin  ",
          uniform_number: "09",
          position: "2B",
          bats: "L",
          throws: "R",
          check: false
        },
        {
          team_id: 2,
          name: "T Justin  ",
          uniform_number: "10",
          position: "3B",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 2,
          name: "C Seager  ",
          uniform_number: "05",
          position: "SS",
          bats: "L",
          throws: "R",
          check: false
        },
        {
          team_id: 2,
          name: "T Chris   ",
          uniform_number: "03",
          position: "LF",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 2,
          name: "P A.J     ",
          uniform_number: "11",
          position: "CF",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 2,
          name: "B Cody    ",
          uniform_number: "35",
          position: "RF",
          bats: "L",
          throws: "L",
          check: false
        },
        {
          team_id: 3,
          name: "Y Tibon",
          uniform_number: "88",
          position: "3B",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 3,
          name: "R Uribe",
          uniform_number: "21",
          position: "RF",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 3,
          name: "B Lake",
          uniform_number: "33",
          position: "P",
          bats: "L",
          throws: "L",
          check: false
        },
        {
          team_id: 3,
          name: "A Kennedy",
          uniform_number: "08",
          position: "C",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 3,
          name: "C Castillo",
          uniform_number: "02",
          position: "1B",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 3,
          name: "G Rudy",
          uniform_number: "63",
          position: "2B",
          bats: "L",
          throws: "L",
          check: false
        },
        {
          team_id: 3,
          name: "Z Brad",
          uniform_number: "34",
          position: "SS",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 3,
          name: "C Taylor",
          uniform_number: "12",
          position: "CF",
          bats: "R",
          throws: "R",
          check: false
        },
        {
          team_id: 3,
          name: "U Buddy",
          uniform_number: "55",
          position: "LF",
          bats: "R",
          throws: "R",
          check: false
        }
      ]);
    })
  ]);
};
