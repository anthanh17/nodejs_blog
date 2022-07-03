const Course = require('../models/Course');
class SiteController {
    // [GET] /
    home(req, res) {
        //res.render('home');
        Course.find({}, function (err, course) {
            if (!err) {
                res.json(course);
            } else {
                res.status(400).json({ error: 'Error!!' });
            }
        });
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
