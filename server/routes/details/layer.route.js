const  express =  require("express");
const router = express.Router();

const Layer = require('../../controllers/details/layer.controller')


router.post('/create', Layer.create)
router.get('/get', Layer.getAll) 
router.put('/update', Layer.update)
router.delete('/delete/:id', Layer.delete)

module.exports = router;