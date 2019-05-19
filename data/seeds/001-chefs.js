
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chefs')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('chefs').insert([
        {
          username: 'jasonh',
          password: 'holloway',
          location: 'WEBPT4'
        },
        {
          username: 'jabrilb',
          password: 'breckenridge',
          location: 'WEBPT5'
        },
        {
          username: 'scottg',
          password: 'grobe',
          location: 'WEBPT4'
        },
        {
          username: 'terriek',
          password: 'kim',
          location: 'SS'
        },
      ]);
    });
};
