const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;
 
require('./hbs/helpers');

app.use( express.static( __dirname + '/public') );

hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
  res.render('home', {
      nombre: 'Gonzalo Andrade',
      anio: new Date().getFullYear()
  });
})

app.get('/about', (req, res) => {
  res.render('about', {
      nombre: 'Gonzalo Andrade',
      anio: new Date().getFullYear()
  });
})

 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});