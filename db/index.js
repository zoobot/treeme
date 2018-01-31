const Sequelize = require('sequelize')
// Don't use these credentials in production, obviously
const db = new Sequelize('socialtree',
  'socialtree', 'socialtree', {
    host: 'localhost',
    dialect: 'mysql'
  })

const User = db.define('user', {
  username: { type: Sequelize.STRING, field: 'username', unique: 'username' },
  password: Sequelize.STRING,
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING
})

// const TreeIcon = 'assets/0001_tree-pine.svg'

// const TreeTypes = db.define('user', {
//   icon: Sequelize.STRING,
//   species: Sequelize.STRING,
//   name: Sequelize.STRING,
//   // position:   Sequelize.FLOAT,
//     // values: ['latitude', 'longitude']
// })

User.sync()
  // Seed thee with temp users
  // .then(() => {
  //   User.create({
  //     username: 'rose',
  //     password:'password',
  //     firtname:'Rose',
  //     lastname:'Rose'
  //   })
  //   User.create({
  //     username: 'user2',
  //     password:'password2',
  //     firtname:'User2first',
  //     lastname:'User2last'
  //   })
  // })
  .then(err => {
    console.log('Created Users Table!');
  }, err => {
    console.log('Error Creating Users Table:', err);
  });

exports.User = User;