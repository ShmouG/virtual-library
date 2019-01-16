const router = require("express").Router();
const addressRoutes = require("./address");

// Book routes
router.use("/address", addressRoutes);

module.exports = router;
