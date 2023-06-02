const  express =  require("express");
const router = express.Router();

const Auth = require('../controllers/auth.controller')


router.post('/create', Auth.createUser)
router.post('/login', Auth.loginUser)

module.exports = router;
