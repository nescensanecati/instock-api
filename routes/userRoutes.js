const express = require("express");
const router = express.Router();

const inventoriesDelete = require("../controllers/inventoriesDelete"); // Import your controller module
const getSingleWarehouse = require("../controllers/getWarehouse");

// DELETE route for deleting an inventory item by ID

router.delete("/:id", inventoriesDelete.remove);

router.get("/:id", getSingleWarehouse.add);

module.exports = router;
