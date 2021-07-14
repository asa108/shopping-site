const express = require("express");
const router = express.Router();

// @route  GET api/contacts
// @desc   Get all users contacts
// @access Private
router.get("/", (req, res) => {
  res.send("get all contacts");
});

// @route  POST api/contacts
// @desc   add new contact
// @access Private
router.post("/", (req, res) => {
  res.send("add contact");
});

// @route  POST api/contacts/:id
// @desc   Update contact
// @access Private
router.put("/:id", (req, res) => {
  res.send("update contact");
});

// @route  DELETE api/contacts/:id
// @desc  Dlete contacts
// @access Private
router.post("/:id", (req, res) => {
  res.send("delete contacts");
});

module.exports = router;
