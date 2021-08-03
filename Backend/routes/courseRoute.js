const express = require("express");
const router = express.Router();

const {getCourses,getCourse,addCourse, deleteCourse, getCoursesByTitre} = require('../controllers/courseController');

router.route("/courses").get(getCourses);
router.route("/course").get(getCoursesByTitre);
router.route("/courses").post(addCourse);
router.route("/courses/:id").delete(deleteCourse);
router.route("/courses/:id").get(getCourse);

module.exports = router;