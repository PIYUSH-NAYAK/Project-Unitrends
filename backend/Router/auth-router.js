const express = require('express');
const router = express.Router();
const main = require('../Router/auth-controller');
const valid = require('../Middlewares/validate');
const signup = require('../Validator/signupValid');
const loginup = require('../Validator/loginValid');
const authMiddleware = require('../Middlewares/auth-middleware');


router.route('/').get(main.home);
router.route('/register').post(
    valid(signup),
    main.register);
router.route('/login').post(
    valid(loginup),
    main.login);
router.route('/contact').post(main.contactUs);
router.route('/user').get(authMiddleware, main.authUser);


module.exports = router;