const express = require("express");
const router = express.Router();

const inventoriesDelete = require("../controllers/inventoriesDelete"); // Deletion controller module

const inventoriesGet = require("../controllers/inventoriesGet"); // Get "all" controller module

// GET "all" route for getting all inventory items
router.get("/", inventoriesGet.get);

// DELETE route for deleting an inventory item by ID
router.delete("/:id", inventoriesDelete.remove);


module.exports = router;
