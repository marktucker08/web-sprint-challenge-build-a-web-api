// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')
const { validateActionsId, validateAction } = require('./actions-middlware')
const { validateProjectId } = require('../projects/projects-middleware')

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

router.post('/', validateAction, (req, res, next) => {
    Actions.insert(req.body)
    .then(newAction => {
        res.status(200).json(newAction)
    })
    .catch(next)
})

router.put('/:id', validateActionsId, validateAction, (req, res, next) => {
    Actions.update(req.params.id, req.body)
    .then(updated => {
        res.status(200).json(updated)
    })
    .catch(next)
})

router.delete('/:id', validateActionsId, (req,res,next) => {
    Actions.remove(req.params.id)
    .then(deleted => {
        res.status(200).json(deleted)
    })
    .catch(next)
})

module.exports = router