exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('goals')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('goals').insert([
        { 
          owner: 'best@poop.com', 
          dueDate: '1988-12-09', 
          goal: 'get through the WDI', 
          complete: false },
        {
          owner: 'second@poop.com',
          dueDate: '1988-12-09',
          goal: 'be like Neo from the Matrix',
          complete: false
        },
        { 
          owner: 'third@poop.com', 
          dueDate: '1988-12-09', 
          goal: 'always be selling', 
          complete: false }
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE goals_id_seq RESTART WITH 4;');
    });
};
