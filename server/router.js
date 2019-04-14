const router = require('express').Router();
const controller = require('./controller');

router.route('/tracks').get(controller.getAll);

router.route('/playTracks/:id').get(controller.getOnePlay);

router.route('/queueTracks/:id').get(controller.getOneQueue);

router.route('/trackToPlay').get(controller.getTrackToPlay);

router.route('/trackToQueue').get(controller.getTrackToQueue);

module.exports = router;
