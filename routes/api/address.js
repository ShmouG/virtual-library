const router = require("express").Router();
const addressController = require("../../controllers/addressController");

// Matches with "/api/books"
router.route("/")
  .get(addressController.findAll)
  .post(addressController.create);

// Matches with "/api/address/:id"
router
  .route("/:id")
  .get(addressController.findById)
  .put(addressController.update)
  .delete(addressController.remove);

module.exports = router;
