const  express =  require("express");
const router = express.Router();

const OrnamentFigure = require('../../controllers/details/ornamentfigure.controller')


router.post('/create', OrnamentFigure.create)
router.get('/get', OrnamentFigure.getAll) 
router.put('/update', OrnamentFigure.update)
router.delete('/delete/:id', OrnamentFigure.delete)

module.exports = router;