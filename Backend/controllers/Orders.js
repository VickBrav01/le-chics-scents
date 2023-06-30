import sql from "mssql";
import config from "../db/config.js";

export const getOrder = async (req, res) => {
    const { orderId, date, productId, itemPrice, quantity, totalAmount } =
        req.body;

    try {
        let pool = await sql.connect(config.sql);
        const results = await pool
            .request()
            .input("OrderId", sql.BigInt, orderId)
            .input("OrderDate", sql.Date, date)
            .input("ProductId", sql.BigInt, productId)
            .input("ItemPrice", sql.BigInt, itemPrice)
            .input("Quantity", sql.BigInt, quantity)
            .input("TotalAmount", sql.BigInt, totalAmount)
            .query(
                "SELECT oi.*,  o.TotalAmount, o.OrderDate FROM Order_Items oi LEFT JOIN Orders o ON oi.OrderId = o.OrderId "
            );


        res.status(201).json(results);
    } catch (error) {


        res.status(301).json(error.message);
    } finally {
        sql.close();
    }
};

export const deleteOrder = async (req, res) => {
    const { orderId, date, productId, itemPrice, quantity, totalAmount } =
        req.body;

    try {
        let pool = await sql.connect(config.sql);
        const results = await pool
            .request()
            .input("OrderId", sql.BigInt, orderId)
            .input("OrderDate", sql.Date, date)
            .input("ProductId", sql.BigInt, productId)
            .input("ItemPrice", sql.BigInt, itemPrice)
            .input("Quantity", sql.BigInt, quantity)
            .input("TotalAmount", sql.BigInt, totalAmount)
            .query(
                "DELETE FROM Order_Items oi LEFT JOIN Orders o ON oi.OrderId = o.OrderId WHERE OrderId = @OrderId"
            );

        //.query(
        // "DELETE oi.*,  o.TotalAmount, o.OrderDate FROM Order_Items oi LEFT JOIN Orders o ON oi.OrderId = o.OrderId WHERE OrderId = @OrderId"
        // );

        res.status(201).json(results);
    } catch (error) {
        res.status(301).json({ error: "Product Not found" });
    } finally {
        sql.close();
    }
};

export const updateOrder = async (req, res) => {
    const { orderId, date, productId, itemPrice, quantity, totalAmount } =
        req.body;

    try {
        let pool = await sql.connect(config.sql);
        const results = await pool
            .request()
            .input("OrderId", sql.BigInt, orderId)
            .input("OrderDate", sql.Date, date)
            .input("ProductId", sql.BigInt, productId)
            .input("ItemPrice", sql.BigInt, itemPrice)
            .input("Quantity", sql.BigInt, quantity)
            .input("TotalAmount", sql.BigInt, totalAmount)
            .query(
                "UPDATE FROM Order_Items oi LEFT JOIN Orders o ON oi.OrderId = o.OrderId WHERE OrderId = @OrderId"
            );

        res.status(201).json(results);
    } catch (error) {
        res.status(301).json({ error: "Product Not found" });
    } finally {
        sql.close();
    }
};
