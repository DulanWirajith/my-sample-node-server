const express = require("express");
const router = express.Router();
const fakerController = require("./../controllers/fakerComtroller");

router.get("/get_dummy_data_post", fakerController.sendPostDummyData);
router.get("/get_dummy_data_person", fakerController.sendPersonDummyData);

module.exports = router;
