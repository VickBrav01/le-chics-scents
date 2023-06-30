import express from "express";
import config from "./db/config.js";
import routes from "./routes/Routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import jsonwebtoken from "jsonwebtoken";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//JWT setup
app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    console.log(req.user);
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      `${process.env.JWT_SECRET}`,
      (err, decode) => {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

routes(app);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome you all" });
});
app.listen(config.port, () => {
  console.log(`sever is ${config.sql.server}`);

  console.log(`Server is running at ${config.url}`);
});
