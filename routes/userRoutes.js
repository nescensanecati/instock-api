const express = require("express");
const router = express.Router();
// const { remove } = require("../controllers/inventoriesDelete");

const inventoriesDelete = require("../controllers/inventoriesDelete"); // Import your controller module

// DELETE route for deleting an inventory item by ID

router.delete("/:id", inventoriesDelete.remove);
console.log("delete");

module.exports = router;
