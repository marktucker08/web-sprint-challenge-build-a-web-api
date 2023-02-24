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

  module.exports = {
    validateActionsId,
  }