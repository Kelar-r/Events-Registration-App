const Router = require('express')
const router = new Router()
const eventsMemberController = require('../controllers/eventsMemberController')


router.post('/addEventMember', eventsMemberController.addEventMember)
router.get('/getALL', eventsMemberController.getALL)
router.get('/:id', eventsMemberController.getId)
router.delete('/del', eventsMemberController.delete)


module.exports = router