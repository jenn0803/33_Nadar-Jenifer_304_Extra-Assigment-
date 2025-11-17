const Student = require("../models/Student");

// GET: list all students
exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.render("index", { students });
};

// GET: form page
exports.addForm = (req, res) => {
  res.render("add");
};

// POST: create student
exports.createStudent = async (req, res) => {
  const { name, roll, english, maths, science } = req.body;
  await Student.create({
    name,
    roll,
    marks: { english, maths, science }
  });
  res.redirect("/");
};

// GET: edit page
exports.editForm = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("edit", { student });
};

// POST: update student
exports.updateStudent = async (req, res) => {
  const { name, roll, english, maths, science } = req.body;

  await Student.findByIdAndUpdate(req.params.id, {
    name,
    roll,
    marks: { english, maths, science }
  });

  res.redirect("/");
};

// GET: delete student
exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
