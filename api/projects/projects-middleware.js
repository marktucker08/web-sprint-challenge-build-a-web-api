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

  module.exports = {
    validateProjectId,
  }