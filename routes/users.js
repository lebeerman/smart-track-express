const express = require('express');
const router = express.Router();
const queries = require('../queries');
const oktaClient = require('../lib/oktaClient');
/* Create a new User (register). */
router.post('/', (req, res, next) => {
  console.log('Made it to the user routes:', req.body);
  if (!req.body) return res.sendStatus(400);
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email
    },
    credentials: {
      password: {
        value: req.body.password
      }
    }
  };

  oktaClient
    .createUser(newUser)
    .then(user => {
      // add the validated + authorized user to the api database
      res.send(user);
      console.log(user.profile);
      queries.createUser({
        profile: {
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
          email: user.profile.email
        }
      });
      res.end();
    })
    .catch(next);
});
// Middleware --- all the routing needed for CRUD funcitonality!
// List all the USERS
router.get('/db', (req, res, next) => {
  queries
    .listUsers()
    .then(users => {
      res.json({ users: users });
    })
    .catch(next);
});
// List a single user as res
router.get('/db/:id', (req, res, next) => {
  queries
    .readUser(req.params.id)
    .then(users => {
      users ? res.json({ users }) : res.sendStatus(404);
    })
    .catch(next);
});
// remove a goal by ID from the database
router.delete('/db/:id', (req, res, next) => {
  queries
    .deleteUser(req.params.id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
});
// update a user in the database
router.put('/db/:id', (req, res, next) => {
  queries
    .updateUser(req.params.id, req.body)
    .then(user => {
      res.json({ users: user });
    })
    .catch(next);
});

module.exports = router;
