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

// REST API
router.route('/login')
.get((req,res,next) => res.send('This is the login form'))
.post((req,res) => {
  console.log('processing')
  res.send('processing the login form')
})
.delete((req,res,next) => res.send('Delete'))

router.route('/foo')
.get((req,res,next) => res.send({user:'food',password:'password'}))
.post((req,res) => {
  console.log('foo')
  res.send('processing the foo')
})
.delete((req,res,next) => res.send('Delete'))


app.get('/user/:uid/files/*', function(req, res){
    var uid = req.params.uid,
        path = req.params[0] ? req.params[0] : 'index.html';
    res.sendfile(path, {root: './public'});
});

app.use('/', express.static('client/public'))
// router.route('/map/:id')
// .get((req,res,next) => res.send('Get ID ' + req.params.id))
// .put((req,res,next) => res.send('Put ID ' + req.params.id))
// .delete((req,res,next) => res.send('Delete ID' + req.params.id))

app.use('/', router)

//index
app.get('/',(req,res) => res.send('Hello Rose'))
// app.get('/test',(req,res) => res.send('test page'))

const server = app.listen(port, ()=> console.log(`http://localhost:${port}`))

