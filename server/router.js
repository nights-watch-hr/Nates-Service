const router = require('express').Router();
const controller = require('./controller');

router.route('/tracks').get(controller.getAll);

router.route('/tracks/:id').get(controller.getOne);

module.exports = router;
