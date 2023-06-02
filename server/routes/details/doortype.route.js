const  express =  require("express");
const router = express.Router();

const DoorType = require('../../controllers/details/doortype.controller')


router.post('/create', DoorType.create)
router.get('/get', DoorType.getAll) 
router.put('/update', DoorType.update)
router.delete('/delete/:id', DoorType.delete)

module.exports = router;