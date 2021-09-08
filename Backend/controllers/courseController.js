const Course = require('../models/course');
const upload = require('../models/upload');
const File = require('../models/upload');
const Quiz = require('../models/quiz');
const fs = require('fs');

exports.uploadFile = async (req,res,next) =>{
    const file ={
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype
    }
    try{
        const multipleFiles = new File({
            title: req.body.title,
            files: file 
        });
        await multipleFiles.save();
        res.status(201).send('File Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
}
exports.getFilesByTitle = async(req, res) => {
    try {
        const str = req.body.titre;
        const regex =new RegExp(str,'i');
        const files = await upload.find( { "title": { $regex: regex } });
        res.json(files);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.getCourses = async(req, res) => {
    try {
        const cours = await Course.find();
        res.json(cours);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.getCourse = async(req, res) => {
    try {
        const id = req.params.id;
        const cours = await Course.findById(id);
        res.json(cours);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

exports.getCoursesByTitre = async(req, res) => {
    try {
        const regex =new RegExp(req.query.term ,'i'); 
        const cours = await Course.find(
            { $or: [{titre: regex},{description: regex}] }
         )
        res.json(cours);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.addCourse = async(req, res) => {
    
    const course = new Course({
        titre: req.body.titre,
        description: req.description,
        date: req.body.date,
        type: req.body.type 
    });
    try {
        const newCours = await course.save();
        res.status(201).json(newCours);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.deleteCourse = async(req, res) => {
    const id = req.params.id;

    try {
        const course = await Course.findByIdAndDelete(id); 
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.updateCourseFile = async(req,res) => {
    var id = req.params.id;
    const str = req.body.titre;
    const regex =new RegExp(str,'i')
    const files = await upload.find( { "title": { $regex: regex } });
    const mapp = files.map(i => i._id);
    try{
        const updatedCourse = await Course.findByIdAndUpdate({ "_id": id }, { $set: { contenue: mapp}});
        res.status(200).json(updatedCourse);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.updateCourseQuiz = async(req,res) => {
    var id = req.params.id;
    const str = req.body.titre;
    const regex =new RegExp(str,'i')
    const quizes = await Quiz.find( { "titre": { $regex: regex } });
    const mapp = quizes.map(i => i._id);
    try{
        const updatedCourse = await Course.findByIdAndUpdate({ "_id": id }, { $set: { quiz: mapp}});
        res.status(200).json(updatedCourse);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.readFiles = async(req,res) => {
    var idCourse = req.params.idCourse;
    try{
        var data =[];
        const course = await Course.findById({ "_id": idCourse });
        for(var i=0;i<course.contenue.length;i++){
            const file = await upload.findById({"_id":course.contenue[i]});
            console.log(file.files[0].filePath);
            const item = fs.readFileSync(file.files[0].filePath, {encoding:'utf8', flag:'r'});
            data.push(item);
        }
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
