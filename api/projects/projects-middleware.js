// add middlewares here related to projects
const Projects = require('./projects-model')

async function validateProjectId(req, res, next) {
    // DO YOUR MAGIC
    try {
      const prj = await Projects.get(req.params.id)
      if (prj) {
        req.prj = prj;
        next();
      } else {
          res.status(404).json({ message: "project not found" })
      }
    }
    catch(err) {
        // res.status(500).json({ message: "something bad happened" })
        err.next()
    }
  }

  function validatePost(req, res, next) {
    // DO YOUR MAGIC
    const { name, description } = req.body
    if ( (name !== undefined && typeof name === 'string' && name.length && name.trim().length > 0) || 
    (description !== undefined && typeof description === 'string' && description.length && description.trim().length > 0)) {
      next()
    } else {
      res.status(400).json({ message: "missing required field" })
    }
  }

  module.exports = {
    validateProjectId,
    validatePost
  }