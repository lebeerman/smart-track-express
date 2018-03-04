const database = require('./database-connection');

module.exports = {
  // goal management
  listGoals() {
    return database('goals').select();
  },
  readGoals(id) {
    return database('goals')
      .where('id', id)
      .select()
      .first();
  },
  create(goal) {
    return database('goals')
      .insert(goal)
      .returning('*')
      .then(record => record[0]);
  },
  updateGoal(id, goal) {
    return database('goals')
      .update(goal)
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  deleteGoal(value) {
    console.log('DELETING');
    return database('goals')
      .where('owner', value)
      .del();
  },
  // users management
  listUsers() {
    return database('users').select();
  },
  readUser(id) {
    return database('users')
      .where('id', id)
      .select()
      .first();
  },
  createUser(profile) {
    return database('users')
      .insert(profile)
      .returning('*')
      .then(record => record[0]);
  },
  updateUser(id, username) {
    return database('users')
      .update(username)
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  deleteUser(id) {
    return database('users')
      .where('id', id)
      .del();
  }
};
