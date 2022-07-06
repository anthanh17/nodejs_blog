const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { count } = require('../models/Course');

class CourseController {
    // [GET] /search
    show(req, res, next) {
        Course.findOne({slug:req.params.slug})
            .then(course => {
                res.render('courses/show');
            })
            .catch(next)
    }
}
// CRUD <=> Create Read Update Delete Data
module.exports = new CourseController();
