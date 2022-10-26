const express = require("express"),
  app = express();

// De forma geral, basicamente temos a seguinte estrutura:
// app.METHOD(PATH, HANDLER)
// Sendo:
// app => a instância do Express
// METHOD => o método que deverá ser utilizado (get, post, delete, etc.) app.get()
// PATH => o caminho em si (URL) app.get('/produtos')
// HANDLER => define como lidaremos com o acesso à rota  app.get('/produtos', (req, res) => {consolo.log(res)})
// Assim como já vimos, nosso HANDLER é um callback, que recebe os argumentos req e res.

app.get("/", (req, res) => {
  res.send("Você está na página inicial");
});
app.get("/home", (req, res) =>
  res.send("<h1>Você está na página inicial</h1>")
);
app.get("/sobre", (req, res) => res.send("<h1>Você está na página sobre</h1>"));
app.get("/produtos", (req, res) =>
  res.send("<h1>Você está na página produtos</h1>")
);
// app.get("/produtos/:categoria", (req, res) => {
//   console.log(req.params);
//   res.send(`<h1>Você está na página de produtos de categoria ${req.params.categoria}</h1>`);
// });
app.get("/produtos/:categoria/:nome?", (req, res) => {
  const { categoria, nome } = req.params;
  console.log(req.params);
  res.send(
    nome !== undefined
      ? `<h1>Você está na página do produto ${nome} (categoria ${categoria})</h1>`
      : `<h1>Você está na página da categoria ${categoria}</h1>`
  );
});

app.get("/contato", (req, res) =>
  res.send("<h1>Você está na página contato</h1>")
);
app.get("/exemplo-array", (req, res) => {
  res.send([
    "Pepê e Neném",
    "Lagoinha e Poça Dágua",
    "O Cãozinho dos Teclados",
  ]);
});
app.get("/exemplo-objeto", (req, res) => {
  res.send({
    nome: "Joselito",
    sobrenome: "Sem Noção",
    melhoresAmigos: ["Hermes", "Renato"],
  });
});

app.listen(3000, () => console.info("Servidor rodando a milhão!"));
