// add middlewares here related to actions
const Actions = require('./actions-model')

async function validateActionsId(req, res, next) {
    // DO YOUR MAGIC
    try {
      const action = await Actions.get(req.params.id)
      if (action) {
        req.action = action;
        next();
      } else {
          res.status(404).json({ message: "action not found" })
      }
    }
    catch(err) {
        // res.status(500).json({ message: "something bad happened" })
        err.next()
    }
  }

  function validateAction(req, res, next) {
    // DO YOUR MAGIC
    const { project_id, notes, description } = req.body
    if (notes !== undefined && typeof notes === 'string' && notes.length && description !== undefined && description.length && project_id) {
        next()
    }
    // if (description !== undefined && typeof description === 'string' && description.length && description.trim().length > 0) {
    //     next()
     else {
        res.status(400).json({ message: "missing required field" })
    }
  }


  module.exports = {
    validateActionsId,
    validateAction
  }