import sql from "mssql";
import config from "../db/config.js";
import bcrypt from "bcrypt";
//create user

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password, address } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 10);

  try {
    let pool = await sql.connect(config.sql);

    const results =
      //  await pool
      //   .request()
      //   .input("CustomerId", sql.BigInt, customerId)
      //   .input("Email", sql.VarChar, email)
      //   .query(
      //     "SELECT * FROM Customers WHERE CustomerId = @CustomerId OR Email = @Email"
      //   );
      // const user = results.recordSet[0];

      // if (user) {
      //   res.status(201).json({ message: "User exists" });
      // } else {
      await pool
        .request()
        // .input("CustomerId", sql.BigInt, id)
        .input("FirstName", sql.VarChar, firstName)
        .input("LastName", sql.VarChar, lastName)
        .input("Email", sql.VarChar, email)
        .input("Password", sql.VarChar, encryptedPassword)
        .input("Address", sql.VarChar, address)
        // .query("SELECT CONVERT(uniqueidentifier, CustomerId) FROM Customers")
        .query(
          "INSERT INTO Customers(CustomerId, FirstName, LastName, Email, Password, Address) VALUES(NEWID(), @FirstName, @LastName, @Email, @Password, @Address)"
        );
    res.status(201).json(results.recordset);
    // }
  } catch (error) {
    res.status(301).json(error.message);
  } finally {
    sql.close();
  }
};

// login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 10);

  try {
    let pool = await sql.connect(config.sql);
    const results = await pool
      .request()
      .input("Email", sql.VarChar, email)
      .input("Password", sql.VarChar, encryptedPassword)
      .query(
        "SELECT * FROM Customers WHERE Email = @Email && Password = @Password"
      );
    res.status(201).json(results.recordset);
  } catch (error) {
    res.status(301).json({ error: "There is an error " });
  } finally {
    sql.close();
  }
};

// delete user

export const deleteUser = async (req, res) => {
  const { customerId } = req.body;
  try {
    let pool = await sql.connect(config.sql);
    const results = await pool
      .request()
      .input("CustomerId", sql.BigInt, customerId)
      .query("Delete FROM Customers WHERE CustomerId = @CustomerId");
    res.status(201).json(results.recordSet[0]);
  } catch (error) {
    res.status(301).json({ error: "There is an error " });
  } finally {
    sql.close();
  }
};

// update user

export const updateUser = async (req, res) => {
  const { customerId, email, password, address } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 10);

  try {
    let pool = await sql.connect(config.sql);
    const results = await pool
      .request()
      .input("CustomerId", sql.BigInt, customerId)
      .input("Email", sql.VarChar, email)
      .input("Password", sql.VarChar, encryptedPassword)
      .input("Address", sql.VarChar, address)
      .query(
        "UPDATE Customers SET Email = @Email, Password = @Password, Address = @Address WHERE CustomerId = @CustomerId"
      );
    res.status(201).json(results.recordset);
  } catch (error) {
    res.status(301).json({ error: "There is an error " });
  } finally {
    sql.close();
  }
};
