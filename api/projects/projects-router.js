// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')
const { validateProjectId, validatePost } = require('./projects-middleware')

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.get()
    .then(prj => {
        res.status(200).json(prj)
    })
    .catch(next)
})

router.get('/:id', validateProjectId, (req, res, next) => {
    res.status(200).json(req.prj)
})

router.post('/', validatePost, (req, res, next) => {
    Projects.insert(req.body)
    .then(newPrj => {
        res.status(200).json(newPrj)
    })
    .catch(next)
})

module.exports = router;