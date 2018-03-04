exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          profile: JSON.stringify({
            firstName: 'user1a',
            lastName: 'user1b',
            email: 'second@poop.com'
          })
        },
        {
          profile: JSON.stringify({
            firstName: 'user1a',
            lastName: 'user1b',
            email: 'third@poop.com'
          })
        },
        {
          profile: JSON.stringify({
            firstName: 'user3a',
            lastName: 'user3b',
            email: 'third@poop.com'
          })
        }
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 4;');
    });
};
