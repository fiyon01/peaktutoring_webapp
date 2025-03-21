const registerStudents = require("../controllers/tuitionController")
var express = require('express');
const router = express.Router()

router.post("/",registerStudents)

module.exports = router