// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.get()
    .then(prj => {
        res.status(200).json(prj)
    })
    .catch(next)
})

// router.use((err,req,res,next) => {
//     res.status(500).json({
//         message: err.message,
//         stack: err.stack,
//     })
// })

module.exports = router;