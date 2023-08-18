const knex = require("knex")(require("../knexfile"));
const crypto = require("node:crypto");

const post = (req, res) => {
  if (
    !req.body.warehouse_name ||
    !req.body.item_name ||
    !req.body.description ||
    !req.body.category ||
    !req.body.status ||
    !req.body.quantity
  ) {
    this.errorCount++;
    return res.status(400).send("Error Please fill all the fields");
  }

  // const newInventory = { ...req.body, id: crypto.random.UUID() };
  else {
    knex("inventories")
      .insert(newInventory)
      .then((result) => {
        if (result.length === 0) {
          return res.status(404).json({
            message: `Iventory with ID: ${req.params.id} not found.`,
          });
        }
        // no content response
        res.status(204).send({ message: "successfully posted" });
      })
      .catch(() => {
        res.status(500).json({ message: "Unable to post" });
      });
  }
};

module.exports = {
  post,
};
