const express = require("express");

const router = express.Router();

const livroController = require("../controllers/livroController");
const autenticar = require("../middlewares/autenticacao");

// GET /livros
router.get("/", livroController.listarLivros);
// GET /livros/:id
router.get("/:id", livroController.listarLivroPorId);

// POST /livros
router.post("/", autenticar, livroController.criarLivro);

// PUT /livros/:id
router.put("/:id", autenticar, livroController.atualizarLivro);

// DELETE /livros/:id
router.delete("/:id", livroController.deletarLivro);

module.exports = router;
