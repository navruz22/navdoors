const  express =  require("express");
const router = express.Router();

const Client = require('../controllers/client.controller')


router.post('/create', Client.create)
router.get('/get', Client.getAll) 
router.put('/update', Client.update)
router.delete('/delete/:id', Client.delete)

module.exports = router;