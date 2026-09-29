const livros = require("../models/livroModel");

// GET /livros
function listarLivros(req, res) {
  res.json(livros);
}

function listarLivroPorId(req, res) {
  const idLivro = parseInt(req.params.id);

  const livro = livros.find((t) => t.id === idLivro);

  if (!livro) {
    return res.status(404).json({
      erro: "Livro não encontrado",
    });
  }

  res.json(livro);
}

// POST /livros
function criarLivro(req, res) {
  const novoLivro = {
    id: livros.length + 1,
    descricao: req.body.descricao,
    concluida: false,
  };

  livros.push(novoLivro);

  res.status(201).json(novoLivro);
}

// PUT /livros/:id
function atualizarLivro(req, res) {
  const idLivro = parseInt(req.params.id);

  const livro = livros.find((t) => t.id === idLivro);

  if (!livro) {
    return res.status(404).json({
      erro: "Livro não encontrado",
    });
  }

  livro.descricao = req.body.descricao || livro.descricao;

  livro.concluida =
    req.body.concluida === undefined
      ? livro.concluida
      : req.body.concluida;

  res.json(livro);
}

// DELETE /livros/:id
function deletarLivro(req, res) {
  const idLivro = parseInt(req.params.id);

  const index = livros.findIndex((t) => t.id === idLivro);

  if (index === -1) {
    return res.status(404).json({
      erro: "Livro não encontrado",
    });
  }

  livros.splice(index, 1);

  res.status(204).send();
}

module.exports = {
  listarLivros,
  listarLivroPorId,
  criarLivro,
  atualizarLivro,
  deletarLivro,
};
