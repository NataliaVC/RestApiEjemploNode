const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const { title, director, year, rating, img } = req.body;
    if (title && director && year && rating && img) {
        const id = movies.length + 1;
        const newMovie = {...req.body, id };
        //console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
        //rest.json('saved');
    } else {
        res.status(500).json({ error: 'There was an error.' });
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating, img } = req.body;
    if (title && director && year && rating && img) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
                movie.img = img
            }
        });
        res.json(movies);
    } else {
        res.status(500).json({ error: 'There was an error.' });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    //console.log(id);
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    });
    //console.log(movies);
    res.send(movies);
    //const {} = req.params;
});

module.exports = router;