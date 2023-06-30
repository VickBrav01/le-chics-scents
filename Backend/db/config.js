import dotenv from "dotenv";
// import assert from "assert";

dotenv.config();

const {
  HOST,
  HOST_PORT,
  HOST_URL,
  SQL_SERVER,
  SQL_USER,
  SQL_PASSWORD,
  SQL_DB,
  JWT_SECRET,
} = process.env;
// console.log(SQL_PASSWORD)
// const encrypted = process.env.SQL_ENCRYPTED === "true";

// assert(HOST_PORT, "Port is required");
// assert(HOST_URL, "Url required");

const config = {
  host: HOST,
  port: HOST_PORT,
  url: HOST_URL,
  sql: {
    user: "sa",
    password: "12345",
    server: "BRAV",
    database: "goods",
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
    jwt_secret: JWT_SECRET,
  },
};

export default config;
