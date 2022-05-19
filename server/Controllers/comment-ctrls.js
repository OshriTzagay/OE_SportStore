const Comment = require("../Models/comments-model");

//GET
let Get = async (req, res) => {
  const { page, limit } = req.query;
  await Comment.find()
    .limit(limit)
    .skip((page - 1) * limit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: rror }));
};
let GetByProduct = async (req, res) => {
  const { page, limit } = req.query;
  await Comment.find({ ProductId: req.params.ProductId })
    .populate("UserId")
    .limit(limit)
    .skip((page - 1) * limit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: error }));
};

//GET:ID
let GetById = async (req, res) => {
  await Comment.findById({ _id: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: error }));
};
//POST
let Add = async (req, res) => {
  await Comment.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: error }));
};

//PUT
let Update = async (req, res) => {
  await Comment.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: error }));
};

//DELETE
let Delete = async (req, res) => {
  await Comment.findByIdAndRemove({ _id: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ message: error }));
};

module.exports = {
  GetByProduct,
  Get,
  GetById,
  Add,
  Update,
  Delete,
};
