require("dotenv").config();
const fastify = require("fastify");
const cartRoute = require("./src/routes/cartRoute");
const itemRoute = require("./src/routes/itemRoutes");

const app = fastify({
  // logger: {
  //   prettyPrint: fal,
  // },
});

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || "localhost";

app.register(cartRoute, itemRoute);
app.listen(PORT, () => console.log(`server run on http://${HOSTNAME}:${PORT}`));
