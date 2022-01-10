require("dotenv").config();
const fastify = require("fastify");
const cartRoute = require("./src/routes/cartRoute");
const itemRoute = require("./src/routes/itemRoute");

const app = fastify({
  // logger: {
  //   prettyPrint: fal,
  // },
});

const PORT = process.env.PORT || 80;
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";

app.register(cartRoute, itemRoute);
app.listen(PORT, HOSTNAME, () =>
  console.log(`server run on http://${HOSTNAME}:${PORT}`)
);
