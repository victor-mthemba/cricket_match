const express = require('express');
const CricketScoreKeeper = require('./CricketScoreKeeper');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
var instance = CricketScoreKeeper();

const app = express();

const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});
app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    console.log(instance.finalScore())
    res.render('index', {
        scores: req.body.score,
    })
});

app.post('/current_score', function (req, res) {

    instance.score()
    res.redirect('/');

});
const PORT = process.env.PORT || 2011;

app.listen(PORT, function () {
    console.log("App started at port: ", PORT)
});