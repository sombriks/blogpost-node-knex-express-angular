
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mensagem', function (table) {
    table.increments('idmensagem');
    table.string('email').unique();
    table.string('titulomensagem').notNullable();
    table.text('corpomensagem').notNullable();
    table.date('datamensagem').defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mensagem');
};
