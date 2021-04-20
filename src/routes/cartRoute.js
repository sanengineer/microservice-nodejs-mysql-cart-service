const cartController = require("../controllers/cartController");
const userAuthentication = require("../middlewares/userAuthMiddleware");

const api = async (app) => {
  app.route({
    method: "GET",
    url: "/cart",
    preHandler: userAuthentication,
    handler: cartController.getAllCart,
  });
  app.route({
    method: "POST",
    url: "/cart",
    preHandler: userAuthentication,
    handler: cartController.createCart,
  });
  app.route({
    method: "GET",
    url: "/cart/count",
    preHandler: userAuthentication,
    handler: cartController.countAllCart,
  });
  app.route({
    method: "GET",
    url: "/cart/:cart_id",
    preHandler: userAuthentication,
    handler: cartController.getOneCart,
  });
};

console.log(userAuthentication);

module.exports = api;
