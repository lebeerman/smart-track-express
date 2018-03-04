# SMART Track App
---
A basic CRUD app, front end repo [HERE]()

Feedback welcome!

---
### References:
- [Data Modeling, JSON + Postgres](https://blog.codeship.com/unleash-the-power-of-storing-json-in-postgres/)
- [React app + node/express](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)

- Take a look at [this repo] for examples of serving static files(https://github.com/esausilva/quick-node-server/blob/master/server.js).

- Heroku deployment help video by Stephen Grider [here](https://youtu.be/Ru3Rj_hM8bo) 

- Random Example code:
  * https://gist.github.com/lucdew/10d7ab14a2b4db106285
  * https://medium.com/@jaeger.rob/seed-knex-postgresql-database-with-json-data-3677c6e7c9bc
  * http://frontend.turing.io/lessons/module-4/knex-postgres.html

### Auth Help: This is basically THE walkthrough: [OKTA + REACT + EXPRESS/NODE](https://developer.okta.com/blog/2018/02/06/build-user-registration-with-node-react-and-okta)

---

### RUBRIC:  Database

* [ ] Uses migrations
* [ ] Uses seeds
* [ ] Database is connected

### Model 1 & Model 2

* [ ] List   [ ] List
* [ ] Read   [ ] Read    
* [ ] Create [ ] Create
* [ ] Update [ ] Update
* [ ] Delete [ ] Delete




To use this URL in a route with Express:

 /api?paramA=valueA&paramB=valueB

You do this:

router.get('/api', function(req, res) {
    console.log(req.query.paramA);     // valueA
    console.log(req.query.paramB);     // valueB
    console.log(req.query.paramC);     // undefined (doesn't exist)
});