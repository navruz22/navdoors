const  express =  require("express");
const router = express.Router();

const GlassCount = require('../../controllers/details/glasscount.controller')


router.post('/create', GlassCount.create)
router.get('/get', GlassCount.getAll) 
router.put('/update', GlassCount.update)
router.delete('/delete/:id', GlassCount.delete)

module.exports = router;