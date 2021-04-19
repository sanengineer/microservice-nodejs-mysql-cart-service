const db = require("../models");
const Cart = db.cart;

module.exports = {
  getAllCart: async function (req, res) {
    //
    //debug
    req.log.info("read cart");

    Cart.findAll()
      .then((data) => {
        //
        //debug
        console.log("get all cart:", data);

        res.statusCode = 200;
        res.send(data);
      })
      .catch((error) => {
        //
        //debug
        console.log("\nerro:", error.message, "\n");
        res.statusCode = 500;
        res.send();
      });
  },

  createOrder: async (req, res) => {
    //debug
    req.log.info("create cart");

    const new_cart = req.body;

    Cart.create(new_cart)
      .then((data) => {
        res.statusCode = 200;
        res.send({
          name: data.name,
        });
      })
      .catch((e) => {
        //debug
        console.log("\n error message:", e, "\n");

        res.send({ message: "user_id cannot be empty" });
      });
  },
};
