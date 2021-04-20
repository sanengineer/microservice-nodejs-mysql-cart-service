const http = require("http");

const dataResponse = "";

const userAuthentication = async (request, reply, done) => {
  if (!request.raw.headers.authorization) {
    return done(new Error("missing token"));
  }

  const tokenRaw = request.raw.headers.authorization;
  const bearerTokenSplitRaw = tokenRaw.split("Bearer")[1];
  const bearerToken = bearerTokenSplitRaw.replace(/\s/g, "");
  const userServicesHostname = process.env.USER_MICROSERVICES_HOSTNAME;
  const userServicePort = process.env.USER_MICROSERVICES_PORT;

  console.log("tokenRaw:", tokenRaw);

  const postData = JSON.stringify({
    token: `${bearerToken}`,
  });

  const options = {
    hostname: `${userServicesHostname}`,
    port: `${userServicePort}`,
    path: "/user/auth/authenticate",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": postData.length,
    },
  };

  console.log("options const:", options);

  const req = http.request(options, (res) => {
    let data = "";

    console.log("DATA:", data);

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("close", () => {
      console.log("statusCode:", res.statusCode);

      if (res.statusCode == 401) {
        //debug
        // console.log(JSON.parse(data));

        reply.statusCode = res.statusCode;
        reply.send(JSON.parse(data));
      } else if (res.statusCode == 200) {
        //debug
        // console.log(JSON.parse(data));
        reply.send(dataResponse);
        done();
      }
    });
  });

  req.write(postData);

  req.on("error", (error) => {
    //debug
    console.log("request error:", error);
  });

  request.log.info("test request middleware it's ok");
};

console.log("data response:", dataResponse);

module.exports = userAuthentication;
