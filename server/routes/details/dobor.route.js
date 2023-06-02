const  express =  require("express");
const router = express.Router();

const Dobor = require('../../controllers/details/dobor.controller')


router.post('/create', Dobor.create)
router.get('/get', Dobor.getAll) 
router.put('/update', Dobor.update)
router.delete('/delete/:id', Dobor.delete)

module.exports = router;