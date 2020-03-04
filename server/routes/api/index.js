const express = require('express'),
    { api: controller } = require('../../controllers');


const router = express.Router();

router.route('/')
    .get(controller.getMain);

router
    .route('/search')
    .get(controller.getGoogleBooks);

module.exports = router;