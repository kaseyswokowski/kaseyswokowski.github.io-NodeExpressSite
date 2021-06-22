const express = require('express');
const router = express.Router();
const { projects } = require('..//data/data.json');
const { route } = require('./about');

router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/projects/:id', (req, res, next) => {
    const { id } = req.params;

    if (projects[req.params.id]) {
        res.render('project', projects[id]);
    } else {
        const err = new Error();
        err.status = 404;
        err.message = `There was an error with the server!`;
        next(err);
    };
});

modulee.exports = router;