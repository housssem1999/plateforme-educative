const express = require("express");
const router = express.Router();
const  multer = require('multer');

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'../Frontend/src/images');
    },
    filename : function(req,file,cb){
        cb(null,file.originalname);
    }

});

const upload = multer({storage : storage});

const {getCourses,getCourse,addCourse, deleteCourse, getCoursesByTitre, uploadFile, updateCourse, getFilesByTitle, readFiles} = require('../controllers/courseController');

router.route("/courses").get(getCourses);
router.route("/course").get(getCoursesByTitre);
router.route("/courses").post(addCourse);
router.route("/courses/:id").delete(deleteCourse);
router.route("/courses/:id").get(getCourse);
router.route("/courses/:id").put(updateCourse);
router.route("/upload").post(upload.single("file"),uploadFile);
router.route("/files").get(getFilesByTitle);
router.route('/files/:idCourse').get(readFiles);

module.exports = router;