exports.up = function(knex) {
  return knex.schema.createTable("favorite_teams", t => {
    t.increments("id")
      .primary()
      .unsigned();
    t.integer("user_id")
      .references("id")
      .inTable("users")
      .notNull()
      .onDelete("cascade");
    t.integer("team_id")
      .references("id")
      .inTable("teams")
      .notNull()
      .onDelete("cascade");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("favorite_teams");
};
