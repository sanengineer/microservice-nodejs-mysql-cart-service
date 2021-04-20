const itemController = require("../controllers/itemController");
const userAuthentication = require("../middlewares/userAuthMiddleware");

const apiItem = async (app) => {
  app.route({
    method: "GET",
    url: "/item",
    preHandler: userAuthentication,
    handler: itemController.getAllItem,
  });
  app.route({
    method: "GET",
    url: "/item/count",
    preHandler: userAuthentication,
    handler: itemController.countAllItem,
  });
  app.route({
    method: "POST",
    url: "/item",
    preHandler: userAuthentication,
    handler: itemController.createItem,
  });
};

module.exports = apiItem;
