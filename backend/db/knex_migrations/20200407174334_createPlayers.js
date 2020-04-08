exports.up = function(knex) {
  return knex.schema.createTable("players", t => {
    t.increments("id")
      .primary()
      .unsigned();
    t.integer("team_id")
      .references("id")
      .inTable("teams")
      .notNull()
      .onDelete("cascade");
    t.string("name");
    t.string("uniform_number");
    t.string("position");
    t.string("bats");
    t.string("throws");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("players");
};
