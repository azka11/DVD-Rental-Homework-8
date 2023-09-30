const express = require('express');
const app = express();
const pool = require('./queries.js');
const actor = require('./route/actor.js')
const film = require('./route/film.js')
const category = require('./route/category.js')


app.get('/', function(req, res){
    res.send('Halaman Utama');
})

app.use(actor);
app.use(film);
app.use(category);

pool.connect((err, res) => {
    if(err){
        console.log(err);
    }
    console.log('Connected');
});


app.listen(3000, function(){
    console.log(`Server OK`)
}); 