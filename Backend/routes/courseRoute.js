const express = require("express");
const router = express.Router();

const {getCourses,getCourse,addCourse, deleteCourse} = require('../controllers/courseController');

router.route("/courses").get(getCourses);
router.route("/courses").post(addCourse);
router.route("/course/:id").delete(deleteCourse);
router.route("/course/:id").get(getCourse);

module.exports = router;