const express = require("express");
const router = express.Router();
const { getUsers, deleteUser, updateEtat, updateListeCours, getCoursesbyuser } = require("../controllers/userController");

router.route("/users").get(getUsers);
router.route("/users/mycourses/:id").get(getCoursesbyuser);
router.route("/users/:id").delete(deleteUser);
router.route("/users/:id").put(updateEtat);
router.route("/users/:idUser/:idCourse").put(updateListeCours);

module.exports = router;