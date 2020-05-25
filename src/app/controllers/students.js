const { age, date, grade } = require('../../lib/utils')
const Student = require('../models/Student')

module.exports = {
    index(req, res) {
        Student.all(function(students) {

            for(let student of students) {
                student.school_year = grade(student.school_year)
            }
            
            return res.render("students/index", { students })
        })
    },
    create(req, res) {
        Student.teachersSelectOptions(function(options){
            return res.render("students/create", { teachersOptions: options })
        })
        
    },
    post(req, res) {
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all the fields")
            }
        }

        Student.create(req.body, function(student) {
            return res.redirect(`/students/${student.id}`)
        })

    },
    show(req, res) {
        const { id } = req.params        

        Student.find(id, function(student) {
            if(!student) return res.send("Student not found!")

            student.birth_date = date(student.birth_date).birthDay
            
            return res.render("students/show", { student })

        })
    },
    edit(req, res) {

        Student.find(req.params.id, function(student) {
            if (!student) return res.send("Student not found!")

            student.birth_date = date(student.birth_date).iso

            Student.teachersSelectOptions(function(options) {
                return res.render("students/edit", { student, teachersOptions: options })
            })            
        })
    },
    put(req, res) {

        const keys = Object.keys(req.body)

        for(let key of keys) {
            if (req.body[key] == "") return res.send("Please, fill all the fields")
        }

        Student.update(req.body, function() {
            return res.redirect(`/students/${req.body.id}`)
        })
    },
    delete(req, res) {
        Student.delete(req.body.id, function(){
            return res.redirect("/students")
        })
    }
}