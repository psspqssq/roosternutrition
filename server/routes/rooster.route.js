module.exports = (app) => {
  const rooster = require("../controllers/rooster.controller.js");

  var router = require("express").Router();

  // Create a new record
  router.post("/", rooster.create);

  // Get latest record
  router.get("/", rooster.getLatest);

  // Retrieve all records
  router.get("/all", rooster.findAll);

  // Retrieve a single record with id
  router.get("/:id", rooster.findOne);

  // Update a record with id
  router.put("/:id", rooster.update);

  // Delete a record with id
  router.delete("/:id", rooster.delete);

  app.use("/api/rooster", router);
};
