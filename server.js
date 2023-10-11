const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;

const userRoutes = require("./modules/user/user.routes");
const profileRoutes = require("./modules/profile/profile.route");
const menuRoutes = require("./modules/menu/menu.route");
const subMenuRoutes = require("./modules/subMenu/subMenu.route");
const itemRoutes = require("./modules/item/item.route");
const settingRoutes = require("./modules/setting/setting.route");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

connectDB();

// routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/menus", menuRoutes);
app.use("/api/v1/sub-menus", subMenuRoutes);
app.use("/api/v1/items", itemRoutes);
app.use("/api/v1/settings", settingRoutes);

// testing api
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
