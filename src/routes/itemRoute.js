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
  app.route({
    method: "DELETE",
    url: "/item",
    preHandler: userAuthentication,
    handler: itemController.deleteAllItem,
  });
  app.route({
    method: "DELETE",
    url: "/item/:id",
    preHandler: userAuthentication,
    handler: itemController.deleteItem,
  });
};

module.exports = apiItem;
