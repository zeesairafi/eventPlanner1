const express = require("express");
const router = express.Router();
const { fetchEvent, createEvent, updateEvent, deleteEvent } = require("./controllers");

router.get("/", fetchEvent)

router.post("/", createEvent)

router.put("/:eventId", updateEvent)

router.delete("/:eventId", deleteEvent)


module.exports = router;