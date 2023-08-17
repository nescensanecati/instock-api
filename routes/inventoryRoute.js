const express = require("express");
const inventoryRoute = express.Router();

const inventoriesDelete = require("../controllers/inventoriesDelete"); // inventories DELETE controller module

const inventoriesGet = require("../controllers/inventoriesGet"); // inventories GET controller module

// inventories GET route for getting all inventory items
inventoryRoute.get("/", inventoriesGet.getAll);

// inventories GET route for getting all inventory items
inventoryRoute.get("/:id", inventoriesGet.getSingleItem);

// inventories DELETE route for deleting an inventory item by ID
inventoryRoute.delete("/:id", inventoriesDelete.remove);


module.exports = inventoryRoute;
