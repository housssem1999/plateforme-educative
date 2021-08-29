const express = require("express");
const { getQuiz, getQuizById, addQuiz, deleteQuiz, updateQuiz } = require("../controllers/quizController");
const router = express.Router();


router.route("/quiz").get(getQuiz);
router.route("/quiz/:id").get(getQuizById);
router.route("/quiz").post(addQuiz);
router.route("/quiz/:id").delete(deleteQuiz);
router.route("/quiz/:id").put(updateQuiz);

module.exports = router;