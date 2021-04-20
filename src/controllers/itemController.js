const db = require("../models");
const Item = db.item;
const Cart = db.cart;

module.exports = {
  getAllItem: async function (req, res) {
    Item.findAll({
      include: [
        {
          model: Cart,
        },
      ],
    })
      .then((data) => {
        if (data == 0) {
          res.statusCode = 204;
          //   res.send();
        } else {
          res.statusCode = 200;
          res.send(data);
        }
      })
      .catch((err) => {
        res.statusCode = 500;
        res.send(err);
      });
  },

  countAllItem: async function (req, res) {
    Item.count()
      .then((data) => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.send(err);
      });
  },

  createItem: async function (req, res) {
    const new_item = req.body;

    Item.create(new_item)
      .then((data) => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.send(error);
      });
  },
};
