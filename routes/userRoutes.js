const express = require("express");
const router = express.Router();

const inventoriesDelete = require("../controllers/inventoriesDelete"); // inventories DELETE controller module

const inventoriesGet = require("../controllers/inventoriesGet"); // inventories GET controller module

// inventories GET route for getting all inventory items
router.get("/", inventoriesGet.get);

// inventories DELETE route for deleting an inventory item by ID
router.delete("/:id", inventoriesDelete.remove);


module.exports = router;
