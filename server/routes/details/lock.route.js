const express =  require("express");
const router = express.Router();

const Lock = require('../../controllers/details/lock.controller')


router.post('/create', Lock.create)
router.get('/get', Lock.getAll) 
router.put('/update', Lock.update)
router.delete('/delete/:id', Lock.delete)

module.exports = router;