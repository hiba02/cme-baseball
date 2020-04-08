exports.up = function(knex) {
  return knex.schema.createTable("teams", t => {
    t.increments("id")
      .primary()
      .unsigned();
    t.string("name");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("teams");
};
