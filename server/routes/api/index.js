const express = require('express'),
    { api: controller } = require('../../controllers');

const bookRoutes = require("./books");

const router = express.Router();

router.route('/')
    .get(controller.getMain);

router
    .route('/search')
    .get(controller.getGoogleBooks);

// Book routes
router.use("/books", bookRoutes);

module.exports = router;