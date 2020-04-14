exports.up = function(knex) {
  return knex.schema.createTable("teams", t => {
    t.increments("id")
      .primary()
      .unsigned();
    t.string("name");
    t.integer("user_id")
      .references("id")
      .inTable("users")
      .notNull()
      .onDelete("cascade");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("teams");
};
