const config = require('../config');
const mongoose = require('mongoose');
const Video = require('../models/video');
mongoose.Promise = global.Promise;
mongoose.connect(config.database, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected to database')
    }
})

const controller = {};

controller.getAllVideos = function (callback) {
    Video.find({})
        .exec((err, videos) => {
            if (err) {
                return callback(err);
            } else {
                return callback(videos);
            }
        });
};

controller.getVideoById = function (id, callback) {
    Video.findById(id)
        .exec((err, videos) => {
            if (err) {
                console.log("Error retrieving videos " + err)
                return callback(err);
            } else {
                console.log(videos);
                return callback(videos);
            }
        });
};

controller.addVideo = function (req, callback) {
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.desc = req.body.desc;
    newVideo.save((err, result) => {
        if (err)
            return callback({
                desc: 'Error inserting video',
                error: err
            });
        else {
            return callback({
                desc: "Successfully added",
                result: result
            });
        }
    });
}

controller.updateVideo = function (req, callback) {
    Video.findByIdAndUpdate(req.body.id,
        {
            $set: {
                title: req.body.title,
                url: req.body.url,
                desc: req.body.desc
            }
        },
        {
            new: true
        },
        (err, result) => {
            if (err)
                return callback({
                    desc: "Error updating video",
                    error: err
                });
            else {
                return callback({
                    desc: "Successfully updated",
                    result: result
                });
            }
        });
};

controller.deleteVideo = function (id, callback) {

    Video.findByIdAndRemove(id,(err,result) =>{
        if(err)
            return callback({
                desc :"Error deleting video",
                error : err
            });
        else{
            return callback({
                desc : "Successfully deleted",
                result: result
            })
        }
    })

};

module.exports = controller;