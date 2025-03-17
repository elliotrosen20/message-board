const { Router } = require("express")

const newRouter = Router();
  

newRouter.get('/', (req, res) => res.send("New message page"));

module.exports = newRouter;