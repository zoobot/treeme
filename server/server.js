const express = require('express')
const app = express()
const router = express.Router()

const morgan = require('morgan')
const parser = require('body-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const cors = require('cors')
const db = require('../db')
const controller = require('../controllers')

const port = process.env.PORT || 4000

router.param('id', (req,res,next,id) => {
  console.log('doing id validation on ', id)
  req.id = id
  next()
})

app.use(morgan('dev'))
app.use(parser.json())
// app.use(express.static(__dirname + '/../client'))
app.use('/', express.static('client/public'))

app.use(require('express-session')({
  secret: 'treeme_everyday',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 6.048e8
  }
}))

app.use(passport.initialize())
app.use(passport.session())
app.use('/', router)

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

passport.use('local-login', new LocalStrategy( {passReqToCallback: true}, (req, username, password, done) => {
  console.log('in local login', username, password)
  db.User
    .find({ where: {username: username}})
    .then(result => {
      console.log('result',result)
      req.body = {
        // firstname: result.dataValues.firstname,
        // lastname: result.dataValues.lastname
        username: result.config.data.username
      }
      if (!result) return done(null, false)
      if (!(controller.user.authenticate(password, result.dataValues.password))) {
        console.log('bad auth')
        return done(null, false)
      }
      return  done(null, result.dataValues)
    })
}))



//Routes
router.route('/user')
  .get(controller.user.get)


router.route('/auth/login')
  .post(passport.authenticate('local-login'), controller.user.login)

router.route('/auth/signup')
  .post(controller.user.post)

router.route('/auth/logout')
  .get(controller.user.logout)



//index
app.get('/',(req,res) => res.send('Hello Rose'))
// app.get('/test',(req,res) => res.send('test page'))

const server = app.listen(port, ()=> console.log(`http://localhost:${port}`))

