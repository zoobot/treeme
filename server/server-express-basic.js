const express = require('express')
const app = express()
var router = express.Router()


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

// router.route('/map/:id')
// .get((req,res,next) => res.send('Get ID ' + req.params.id))
// .put((req,res,next) => res.send('Put ID ' + req.params.id))
// .delete((req,res,next) => res.send('Delete ID' + req.params.id))

app.use('/', router)

//index
app.get('/',(req,res) => res.send('Hello Rose'))
// app.get('/test',(req,res) => res.send('test page'))

const server = app.listen(port, ()=> console.log(`http://localhost:${port}`))

