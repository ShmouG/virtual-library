const router = require("express").Router();
const contactRoutes = require("./contact");

// Contact routes
router.use("/contacts", contactRoutes);

module.exports = router;
