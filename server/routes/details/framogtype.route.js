const  express =  require("express");
const router = express.Router();

const FramogType = require('../../controllers/details/framogtype.controller')


router.post('/create', FramogType.create)
router.get('/get', FramogType.getAll) 
router.put('/update', FramogType.update)
router.delete('/delete/:id', FramogType.delete)

module.exports = router;