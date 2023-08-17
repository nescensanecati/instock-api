const express = require("express"); //express to create the route
const router = express.Router(); //router to create an instance of an express router used to define the routes

const warehousesPost = required("../controllers/warehousesPost");

router.post(":id", warehousesPost.add);
module.exports = router;
