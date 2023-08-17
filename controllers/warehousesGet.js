const knex = require("knex")(require("../knexfile"));

const getAll = (_req, res) => {
};

const getSingleItem = (req, res) => {
    knex
    };


    const getSingleWarehouseItems = (req, res) => {
        knex
            .select('inventories.id', 'warehouses.warehouse_name', 'item_name', 'description', 'category', 'status', 'quantity')
            .from("inventories")
            .innerJoin('warehouses', 'inventories.warehouse_id', 'warehouses.id')
            .where({ 'warehouses.id': req.params.id })
            .then((data) => {
                if (data.length === 0){
                    return res 
                    .status(404)
                    .json({ message: `Warehouse with ID: ${req.params.id} not found` });
                }
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json({ message: `Unable to get the warehouse with ID: ${req.params.id}` });
            });
        };

    module.exports = {
        getAll,
        getSingleItem,
        getSingleWarehouseItems
    };
