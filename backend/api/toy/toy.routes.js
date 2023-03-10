const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getToys, getToyById, addToy, updateToy, removeToy, addToyMsg, removeToyMsg } = require('./toy.controller')
const router = express.Router()

router.get('/', getToys)
router.get('/:id', getToyById)
router.post('/', requireAuth, addToy)
router.put('/:id', requireAuth, updateToy)
router.delete('/:id', requireAuth, removeToy)
// router.delete('/:id', requireAuth, requireAdmin, removeToy)

router.post('/:id/msg', requireAuth, addToyMsg)
router.delete('/:id/msg/:msgId', requireAuth, removeToyMsg)

module.exports = router