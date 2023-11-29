const Movie = require("../models/movie.model"); 

module.exports = {
    getAllMovies: (req, res) => {
        res.json({message: "Hello World Syvees!"})
    }
}