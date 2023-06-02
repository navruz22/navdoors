const  express =  require("express");
const router = express.Router();

const Depth = require('../../controllers/details/depth.controller')


router.post('/create', Depth.create)
router.get('/get', Depth.getAll) 
router.put('/update', Depth.update)
router.delete('/delete/:id', Depth.delete)

module.exports = router;