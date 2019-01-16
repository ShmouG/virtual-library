const router = require("express").Router();
const addressRoutes = require("./contact");

// Book routes
router.use("/contact", addressRoutes);

module.exports = router;
