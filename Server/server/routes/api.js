// noinspection JSUnresolvedFunction
const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video.controller');


router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/videos', (req, res) => {
    videoController.getAllVideos(function (result) {
        res.json(result);
    });
});

router.get('/videos/:id', (req, res) => {
    videoController.getVideoById(req.params.id, function (result) {
        res.json(result);
    });
});

router.post('/videos', (req, res) => {
    videoController.addVideo(req, (result) => {
        res.json(result);
    });
});

router.put('/videos', (req, res) => {

    videoController.updateVideo(req, (result) => {
        res.json(result);
    })

});

router.delete('/videos/:id', (req, res) => {

    videoController.deleteVideo(req.params.id, (result) => {
        res.json(result);
    });

});


module.exports = router;