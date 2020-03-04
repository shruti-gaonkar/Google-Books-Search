const axios = require("axios");

module.exports = {
    getMain: (req, res) => {
        res.send('Welcome to API v1.');
    },

    getGoogleBooks: (req, res) => {
        axios
            .get("https://www.googleapis.com/books/v1/volumes?q=Harry+Potter&key=AIzaSyAcEm_v2o-ZJQuv-P0a2DRSX4qsQWn287U&maxResults=40", { params: req.query })
            .then(response => res.json(response.data))
            .catch(err => res.status(422).json(err));
    }
};