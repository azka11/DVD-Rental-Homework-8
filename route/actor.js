const express = require('express');
const router = express.Router();
const pool = require('../queries.js');

router.get('/actor', (req, res) => {
    pool.query('SELECT * FROM actor', (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
});

module.exports = router;