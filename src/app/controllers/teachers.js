const { age, date } = require('../../lib/utils')

module.exports = {
    index(req, res) {
        return res.render("teachers/index")
    },
    create(req, res) {
        return res.render("teachers/create")
    },
    post(req, res) {
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all the fields")
            }
        }
    
            return 
    },
    show(req, res) {
        return
    },
    edit(req, res) {
        return
    },
    put(req, res) {
        return
    },
    delete(req, res) {
        return
    }
}