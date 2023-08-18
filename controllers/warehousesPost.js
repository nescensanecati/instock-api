const knex = require("knex")(require("../knexfile"));
const crypto = require("crypto"); //import the built-in crypto module, to generate secure random number for unique video ID req

// All request body data needs to have validation.
//All values are required (non-empty).
//For Phone Number and Email fields validate correct phone number and email.
//For incorrect/incomplete data, the correct error response needs to be sent (with status code and message).

const add = (req, res) => {
  console.log(req.body);
  if (
    !req.body.contact_position ||
    !req.body.contact_name ||
    !req.body.country ||
    !req.body.city ||
    !req.body.address ||
    !req.body.warehouse_name
  ) {
    return res.status(400).send("Missing properties in the request body");
  }
  if (!req.body.contact_phone || !req.body.contact_email) {
    return res
      .status(400)
      .send(
        "Invalid email address or phone number, please provide a valid phone and email for the user in the request"
      );
  }

  knex("warehouses")
    .insert(req.body)
    .then((result) => {
      return knex("warehouses").where({ id: result[0] });
    })
    .then((createdWarehouse) => {
      res.status(201).json(createdWarehouse);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to create new user" });
    });
};

module.exports = { add }; //Export the router so that it can be used in other parts of the application
