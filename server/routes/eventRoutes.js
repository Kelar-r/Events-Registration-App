const Router = require('express')
const router = new Router()
const eventcontroller = require('../controllers/eventController')


router.post('/adding', eventcontroller.adding)
router.get('/getALL', eventcontroller.getALL)
router.get('/:id', eventcontroller.getEventId)
router.delete('/del', eventcontroller.delete)


module.exports = router