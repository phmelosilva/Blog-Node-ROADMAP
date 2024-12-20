import routes from '../src/view/routes';

const express = require("express");
const app = express();
const port = 3000;

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Iniciando rotas
app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});