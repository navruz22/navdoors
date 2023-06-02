const  express =  require("express");
const router = express.Router();

const Jamb = require('../../controllers/details/jamb.controller')


router.post('/create', Jamb.create)
router.get('/get', Jamb.getAll) 
router.put('/update', Jamb.update)
router.delete('/delete/:id', Jamb.delete)

module.exports = router;