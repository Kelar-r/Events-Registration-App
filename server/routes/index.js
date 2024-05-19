const Router = require('express')
const router = new Router()

const eventRoutes = require('./eventRoutes')
const eventsMemberRoutes = require('./eventsMemberRoutes')



router.use('/event', eventRoutes)
router.use('/eventsMember', eventsMemberRoutes)


module.exports = router