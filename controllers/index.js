var db = require('../db');
var bcrypt = require('bcrypt');
var saltRounds = 10;


module.exports = {
  user: {
    get: (req, res) => {
      db.User.find({
        where: {
          id: req.query.id
        }
      }).then(result => res.json(result.firstname + ' ' + result.lastname));
    },
    authenticate: (attempted, password) => {
      return bcrypt.compareSync(attempted, password);
    },
    post: (req, res) => {
      db.User
        .find({where: {username: req.body.username}})
        .then(result => {
          if (!result) {
            bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
              if (err) console.log(err)
              db.User.create({
                username: req.body.username,
                password: hash,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
              }).then(user => {
                console.log('POSTED USER', user);
                res.sendStatus(201)
              }).catch(error => console.log(error))
            });
          }
        });
    },
    login: (req, res) => {
      res.send(req.body).status(201);
    },
    logout: (req, res) => {
      req.logout();
      res.redirect('/#/login');
    }
  }
};
