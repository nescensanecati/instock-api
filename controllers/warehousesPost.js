const knex = require("knex")(require("../knexfile"));
const crypto = require("crypto"); //import the built-in crypto module, to generate secure random number for unique video ID req

// All request body data needs to have validation.
//All values are required (non-empty).
//For Phone Number and Email fields validate correct phone number and email.
//For incorrect/incomplete data, the correct error response needs to be sent (with status code and message).

//use the logMessage middleware for all routes
router.use(logMessage);

router.post("/", (req, res) => {
  const newWarehouse = {
    id: crypto.randomUUID(),
    warehouse_name: "Chicago",
    address: "3218 Guess Rd",
    city: "Chicago",
    country: "USA",
    contact_name: "Jameson Schuppe",
    contact_position: "Warehouse Manager",
    contact_phone: "+1 (919) 797-2875",
    contact_email: "jschuppe@instock.com",
  };

  // Respond with the warehouse that was created
  res.status(201).json(newWarehouse);
});

const add = (req, res) => {
  if (!req.body.contact_phone || !req.body.contact_email) {
    return res.status(400).send("Missing properties in the request body");
  }
  if (!req.body.contact_phone || !req.body.contact_email) {
    return res
      .status(400)
      .send(
        "Invalid email address or phone number, please provide a valid phone and email for the user in the request"
      );
  }

  knex("user") //check if this is the table
    .insert(req.body)
    .then((result) => {
      return knex("user").where({ id: result[0] });
    })
    .then((createdWarehouse) => {
      res.status(201).json(createdWarehouse);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to create new user" });
    });
};

function logMessage(req, res, next) {
  next();
}

module.exports = { router, add }; //Export the router so that it can be used in other parts of the application

router.route("/").post(userController.add);
