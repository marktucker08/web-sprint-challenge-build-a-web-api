// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')
const { validateActionsId } = require('./actions-middlware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Actions.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(next)
})

router.get('/:id', validateActionsId, (req, res, next) => {
    res.status(200).json(req.action)
})

module.exports = router;