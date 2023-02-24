const express = require('express');
const app = express();

//NODE:JS
const path = require('path'); 

/* MODULOS NPM
------------------------------------------------- */
const morgan = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');

/* CONFIGURACIONES
------------------------------------------------- */
app.set('puerto', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* MIDDLEWARE
------------------------------------------------- */
app.use(morgan('dev'));
app.use( express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

app.use(flash());


/* ROUTES
------------------------------------------------- */
app.use(require('./routes/entries.routes'));


app.use( (req, res)=>{
    res.render('URL-no-valida');
});

/* RUN SERVER
----------------------------------------------- */
app.listen(app.get('puerto'), ()=>{

    console.log('Server run on port', app.get('puerto'));

});