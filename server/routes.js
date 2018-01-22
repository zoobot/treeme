const passport = require('passport');
const controller = require('../controllers');
// Routes
// Connect controller methods to their corresponding routes

module.exports = (app, express) => {
  let router = express.Router();

  router.route('/user')
    .get(controller.user.get)

  router.route('/auth')
    .post(passport.authenticate('local-login'), controller.user.login)
    .post(controller.user.post);
    .get(controller.user.logout);

}