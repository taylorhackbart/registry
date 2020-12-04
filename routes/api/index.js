const router = require("express").Router();
const usersRoutes = require("./users");
const reviewRoutes = require("./reviews")

// Book routes
router.use("/users", usersRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
