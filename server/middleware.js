const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Models = require('../models/models.js');
const db = require('../db/db.js');
const config = require('./config.js');

module.exports = function(app, express) {
  app.user(morgan('dev'))
  app.use(parser.json())
  app.use(express.static(__dirname + '/../client'))

  app.user(require('express-session')({
    secret: 'fairygardensecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 6.048e8
    }
  }))

  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser((user,done) => {
    console.log('SERIALIZER', user)
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    db.User
      .find({where: {id: id}})
      .then(result => done(null, result.dataValues))
      .catch(err => done(err, null))
  })

  passport.use('local-signin', new LocalStrategy( {passReqToCallback: true}, (req, username, password, done) => {
    db.User
      .find({ where: {username: username}})
      .then(result => {
        req.body = {
          firstname: result.dataValues.firstname,
          lastname: result.dataValues.lastname
        }
        if (!result) return done(null, false)
        if (!(controller.user.authenticate(password, result.dataValues.password))) return done(null, false)
        return  done(null, result.dataValues)
      })
  }))


  // passport.use('google', new GoogleStrategy({
  //   clientID: config.GOOGLE_CLIENT_ID,
  //   clientSecret: config.GOOGLE_CLIENT_SECRET,
  //   callbackURL: 'http://localhost:8000/api/google/return'
  // }, (accessToken, refreshToken, profile, done) => {
  //   db.User
  //     .find({ where: {email: email}})
  //     .then(result => {
  //       req.body = {
  //         firstname: result.dataValues.firstname,
  //         lastname: result.dataValues.lastname
  //       }
  //       if (!result.length) return done(null, false)
  //       if (!(controller.user.authenticate(password, result.dataValues.password))) return done(null, false)
  //       return  done(null, result.dataValues)
  //     })
  // }));

};
