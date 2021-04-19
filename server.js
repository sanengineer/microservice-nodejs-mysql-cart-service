require("dotenv").config();
const fastify = require("fastify");
const cartRoute = require("./src/routes/cartRoute");

const app = fastify({
  logger: {
    prettyPrint: true,
  },
});

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || "localhost";

app.register(cartRoute);
app.listen(PORT, () => console.log(`server run on http://${HOSTNAME}:${PORT}`));
