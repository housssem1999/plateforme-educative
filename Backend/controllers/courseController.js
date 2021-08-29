const Course = require('../models/course');
const File = require('../models/upload');

exports.uploadFile = async (req,res,next) =>{
    try{
        const file ={
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype
        }
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
        console.log(regex);
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
        contenu: req.body.contenu,
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

exports.updateCourse = async(req,res) => {
    var id = req.params.id
    try{
        const updatedCourse = await Course.findByIdAndUpdate({ "_id": id }, { $set: { description: req.body.description}});
        res.status(200).json(updatedCourse);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
