import http from "http";
import vercelHandler from "./.vercel/output/functions/__server.func/index.mjs";

const server = http.createServer((req, res) => {
  try {
    vercelHandler(req, res);
  } catch (err) {
    console.error("Crash!", err);
    res.statusCode = 500;
    res.end(err.message);
  }
});

server.listen(3000, () => console.log("Listening on 3000"));
