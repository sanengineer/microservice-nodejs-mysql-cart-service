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
    handler: cartController.createOrder,
  });
  app.route({
    method: "GET",
    url: "/cart/count",
    preHandler: userAuthentication,
    handler: cartController.countAllCart,
  });
  app.route({
    method: "DELETE",
    url: "/cart",
    preHandler: userAuthentication,
    handler: cartController.deleteAllCart,
  });
};

console.log(userAuthentication);

module.exports = api;
