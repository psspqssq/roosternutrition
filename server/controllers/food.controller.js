const db = require("../models");
const Food = db.food;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const food = new Food({
    name: req.body.name,
    dayofweek: req.body.stock,
    stock: req.body.dayofweek,
  });

  food
    .save(food)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the record.",
      });
    });
};

exports.getLatest = (req, res) => {
  Food.findOne()
    .sort({ field: "asc", _id: -1 })
    .limit(1)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records.",
      });
    });
};

exports.findAll = (req, res) => {
  const beginDate = req.query.beginDate;
  const endDate = req.query.endDate;
  var condition = beginDate ? { createdAt: { $gte: beginDate, $lt: endDate } } : {};

  Food.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  var condition = id ? { _id: id } : {};

  Food.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  condition = id ? { _id: id } : {};
  Food.findOneAndUpdate(
    condition,
    { $set: req.body },
    {
      new: true,
    }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Food.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete record with id=${id}. Maybe record was not found!`,
        });
      } else {
        res.send({
          message: "Record was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete record with id=" + id,
      });
    });
};
