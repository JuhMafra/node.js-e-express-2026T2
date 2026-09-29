function autenticar(req, res, next) {
  const token = req.headers["x-token"];

  if (token !== "senha") {
    return res.status(401).json({
      erro: "Token inválido. Acesso negado.",
    });
  }

  next();
}

module.exports = autenticar;
