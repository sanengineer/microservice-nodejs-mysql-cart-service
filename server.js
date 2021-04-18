require("dotenv").config();
const fastify = require("fastify");

const app = fastify({
  logger: {
    prettyPrint: true,
  },
});

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || "localhost";

app.listen(PORT, () => console.log(`server run on http://${HOSTNAME}:${PORT}`));