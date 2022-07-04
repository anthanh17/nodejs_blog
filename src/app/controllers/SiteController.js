const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
// CRUD <=> Create Read Update Delete Data
module.exports = new SiteController();
