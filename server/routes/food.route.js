module.exports = (app) => {
  const food = require("../controllers/food.controller.js");

  var router = require("express").Router();

  // Create a new record
  router.post("/", food.create);

  // Get latest record
  router.get("/", food.getLatest);

  // Retrieve all records
  router.get("/all", food.findAll);

  // Retrieve a single record with id
  router.get("/:id", food.findOne);

  // Update a record with id
  router.put("/:id", food.update);

  // Delete a record with id
  router.delete("/:id", food.delete);

  app.use("/api/food", router);
};
