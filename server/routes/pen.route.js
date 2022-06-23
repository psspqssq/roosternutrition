module.exports = (app) => {
  const pen = require("../controllers/pen.controller.js");

  var router = require("express").Router();

  // Create a new record
  router.post("/", pen.create);

  // Get latest record
  router.get("/", pen.getLatest);

  // Retrieve all records
  router.get("/all", pen.findAll);

  // Retrieve a single record with id
  router.get("/:id", pen.findOne);

  // Update a record with id
  router.put("/:id", pen.update);

  // Delete a record with id
  router.delete("/:id", pen.delete);

  app.use("/api/pen", router);
};
