const router = require("express").Router();
const reviewsController = require("../../controllers/reviewsController");


//Matches with "/api/reviews"
router.route("/")
.get(reviewsController.findAll)
.post(reviewsController.create);


module.exports = router;