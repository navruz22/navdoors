const  express =  require("express");
const router = express.Router();

const FramogFigure = require('../../controllers/details/framogfigure.controller')


router.post('/create', FramogFigure.create)
router.get('/get', FramogFigure.getAll) 
router.put('/update', FramogFigure.update)
router.delete('/delete/:id', FramogFigure.delete)

module.exports = router;