import sql from "mssql";
import config from "../db/config.js";

export const getProducts = async (req, res) => {
  try {
    const { name } = req.params;
    let pool = await sql.connect(config.sql);
    const results = await pool
      .request()
      .input("CategoryName", sql.VarChar, name)
      .query(
        "SELECT p.* , c.CategoryName FROM Products p LEFT JOIN Categories c ON p.CategoryId = c.CategoryId "
      );

    res.status(201).json(results.recordset);
  } catch (error) {
    res.status(301).send("Categories not found");
  } finally {
    sql.close();
  }
};
