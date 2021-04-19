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
};

console.log(userAuthentication);

module.exports = api;
