var express = require('express');
var bodyParser = require('body-parser');
var cookieSession = express('cookie-session');

var app = express();

// app.use(cookieSession({
//   name: 'session',
//   keys: [/* secret keys */],

//   // Cookie Options
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

var tareas = [];

app.get('/', function (request, response) {
  response.render('formulario.ejs', { tareas: tareas });
});

app.post('/adicionar', function (request, response) {
  var tarea = request.body.nuevaTarea;
  tareas.push(tarea);
  response.redirect('/');
});

app.get('/borrar/:id', function(llamado, respuesta){
  tareas.splice(llamado.params.id, 1);
  respuesta.redirect('/');
})

app.listen(3006, function () {
  console.log('corriendo en el purto 3006');
});
