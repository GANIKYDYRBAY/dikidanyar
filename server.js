const express = require ('express'),
    router = express.Router()
const app = express();
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const config = require('./config/mongo.config');
const port = 3006;

//Views, css, static files//
app.use(express.static(__dirname + '/public'));

mongoose.connect(config.mongoURI).then(() => console.log("Database connected successfully"))
    .catch((err) => console.log(err));

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
router.get('', (req, res) => {
    res.render('', {text: "About the page"})
})


app.use("/", require("./routes/index"));
app.use("/toys", require("./routes/toys"));
app.use("/contacts", require("./routes/contacts"));
app.use("/registration", require("./routes/registration"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

