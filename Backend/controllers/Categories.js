import sql from "mssql";
import config from "../db/config.js";

export const getAllCategories = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql);
    const results = await pool.request().query("SELECT * FROM Categories;");

    res.status(201).json(results.recordset);
    console.log(results);
  } catch (error) {
    res.status(301).json(error.message);
  } finally {
    sql.close();
  }
};

export const getItemsByCategory = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you're passing the category ID in the URL parameter as "id"
    let pool = await sql.connect(config.sql);
    const results = await pool
      .request()
      .input("CategoryId", sql.VarChar, id)
      .query(
        "SELECT p.*, c.CategoryName FROM Products p LEFT JOIN Categories c ON p.CategoryId = c.CategoryId WHERE c.CategoryId = @CategoryId"
      );
    console.log(id);

    res.status(200).json(results.recordset);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch products for the category" });
  } finally {
    sql.close();
  }
};
