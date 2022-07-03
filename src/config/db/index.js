const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/anthanh_edu_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        //await mongoose.connect('mongodb://127.0.0.1:27017/anthanh_edu_dev');
        console.log('Connet successfully');
    } catch (error) {
        console.log('Connet failure');
    }
}

module.exports = { connect };
