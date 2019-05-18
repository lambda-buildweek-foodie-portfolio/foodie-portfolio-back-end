
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
          location: 'WEBPT4',
          email: 'jason@holloway.com',
          firstName: 'Jason',
          lastName: 'Holloway'
        },
        {
          username: 'jabrilb',
          password: 'breckenridge',
          location: 'WEBPT5',
          email: 'jabril@breckenridge.com',
          firstName: 'Jabril',
          lastName: 'Breckenridge'
        },
        {
          username: 'scottg',
          password: 'grobe',
          location: 'WEBPT4',
          email: 'scott@grobe.com',
          firstName: 'Scott',
          lastName: 'Grobe'
        },
        {
          username: 'terriek',
          password: 'kim',
          location: 'SS',
          email: 'terrie@kim.com',
          firstName: 'Terrie',
          lastName: 'Kim'
        },
      ]);
    });
};
