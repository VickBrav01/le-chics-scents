import {
  createUser,
  deleteUser,
  updateUser,
  loginUser,
} from "../controllers/Login.js";
import {
  getAllCategories,
  getItemsByCategory,
} from "../controllers/Categories.js";
import { updateOrder, deleteOrder, getOrder } from "../controllers/Orders.js";
import { getProducts } from "../controllers/Products.js";

const routes = (app) => {
  //users

  app.route("/users/:login").delete(deleteUser).put(updateUser).get(loginUser);
  app.route("/users").post(createUser);

  //categories
  app.route("/categories").get(getAllCategories);
  app.route("/categories/:id/products").get(getItemsByCategory);

  //products
  app.route("/Products").get(getProducts);

  //reviews
  app
    .route("/reviews")
    .get((req, es) => {})
    .post((req, es) => {});

  //Orders
  app
    .route("/orders")
    .get(getOrder)
    .delete(deleteOrder)
    // .post(makeOrder)
    .put(updateOrder);
};

export default routes;
