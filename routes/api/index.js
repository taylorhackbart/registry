const router = require("express").Router();
const usersRoutes = require("./users");

// Book routes
router.use("/users", usersRoutes);

module.exports = router;
