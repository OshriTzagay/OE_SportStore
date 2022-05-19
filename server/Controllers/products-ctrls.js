const Product = require("../Models/products-model");
// const User = require("../Models/users-model");

const Get = async (req, res) => {
  const { page, limit } = req.query;
  await Product.find()
    .limit(limit)
    .skip((page - 1) * limit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: err }));
};

const GetByName = async (req, res) => {
  const { pages, limit } = req.query;
  await Product.find({ Name: req.params.name })
    .limit(limit)
    .skip((pages - 1) * limit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: err }));
};

const GetByProductType = async (req, res) => {
  const { pages, limit } = req.query;
  await Product.find({ Type: req.params.type })
    .limit(limit)
    .skip((pages - 1) * limit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: err }));
};

//POST

let Add = async (req, res) => {
  await Product.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: err }));
};

//UPDATE

let Update = async (req, res) => {
  await Product.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: err }));
};

//DELETE
let Delete = async (req, res) => {
  await Product.findByIdAndRemove({ _id: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: err }));
};

module.exports = {
  GetByName,
  Get,
  GetByProductType,
  Add,
  Update,
  Delete,
};
