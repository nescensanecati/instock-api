const express = require("express");
const inventoryRoute = express.Router();

inventoryRoute.use(express.json())


const inventoriesDelete = require("../controllers/inventoriesDelete"); // inventories DELETE controller module

const inventoriesPost = require("../controllers/inventoriesPost");

const inventoriesGet = require("../controllers/inventoriesGet"); // inventories GET controller module

const inventoriesPut = require("../controllers/inventoriesPut"); // inventories PUT controller module


// inventories GET route for getting all inventory items
inventoryRoute.get("/", inventoriesGet.getAll);

// inventories GET route for getting single inventory item
inventoryRoute.get("/:id", inventoriesGet.getSingleItem);

// inventories PUT route for updating a single inventory item
inventoryRoute.put("/:id", inventoriesPut.putSingleItem);

// inventories DELETE route for deleting an inventory item by ID
inventoryRoute.delete("/:id", inventoriesDelete.remove);

inventoryRoute.post("/", inventoriesPost.post);

module.exports = inventoryRoute;
