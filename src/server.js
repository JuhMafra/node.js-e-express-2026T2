const express = require("express");

const app = express();

const port = 3000;

const logger = require("./middlewares/logger");
const livroRoutes = require("./routes/livroRoutes");

// Middleware para o Express entender JSON
app.use(express.json());

// Middleware de Logging
app.use(logger);

// Rota principal
app.get("/", (req, res) => {
  res.send("Bem-vindo à API de Livros da Biblia!");
});

// Rotas de livros
app.use("/livros", livroRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
