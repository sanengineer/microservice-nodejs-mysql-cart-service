const db = require("../models");
const Cart = db.cart;
const Item = db.item;

module.exports = {
  getAllCart: async function (req, res) {
    //
    //debug
    // req.log.info("read cart");

    Cart.findAll({
      include: [
        {
          model: Item,
          as: "item_id",
          attributes: {
            exclude: ["cart_id"],
          },
        },
      ],
    })
      .then((data) => {
        //
        //debug
        // console.log("get all cart:", data);
        if (data == 0) {
          res.statusCode = 204;
        } else {
          res.statusCode = 200;
          res.send(data);
        }
      })
      .catch((error) => {
        //
        //debug
        console.log("\nerro:", error.message, "\n");

        res.statusCode = 500;
        res.send(error);
      });
  },

  getOneCart: async (req, res) => {
    const id = req.params.cart_id;

    Cart.findByPk(id, {
      include: [
        {
          model: Item,
          as: "item_id",
          attributes: {
            exclude: ["cart_id"],
          },
        },
      ],
    })
      .then((data) => {
        //debug
        console.log("DATA:", data);

        res.statusCode = 200;
        res.send(data);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.send(error);
      });
  },

  countAllCart: async function (req, res) {
    //debug
    // req.log.info("query cart");

    Cart.count()
      .then((data) => {
        res.statusCode = 200;
        res.send({
          cart_number: String(data),
        });
      })
      .catch((err) => {
        res.statusCode = 500;
        res.send(err);
      });
  },

  createCart: async function (req, res) {
    //debug
    // req.log.info("create cart");

    const new_cart = req.body;

    const { user_id } = req.body;

    console.log("USER_ID:", user_id);

    Cart.create(new_cart, { where: { user_id: user_id } })
      .then((data) => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch((e) => {
        //debug
        console.log("\n error message:", e, "\n");

        res.send({ message: "user_id cannot be empty" });
      });
  },
};
