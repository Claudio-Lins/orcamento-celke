const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("./models/home");
const Home = mongoose.model("Home");

require("./models/orcamento");
const Orcamento = mongoose.model("Orcamento");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type", "Authorization");
  app.use(cors());
  next();
});

mongoose
  .connect("mongodb://localhost:27017/celke", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com MONGODB realizada com sucesso!!!");
  })
  .catch((err) => {
    console.log("Conexão com MONGODB NÃO realizada com sucesso!!!");
  });

app.get("/home", async (req, res) => {
  await Home.findOne({})
    .then((home) => {
      return res.json({
        error: false,
        home,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum registro encontrado",
      });
    });
});

app.post("/home", async (req, res) => {
  const dados = {
    topTitulo: "Temos a solução que a sua empresa precisa",
    topSubtitulo:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text,",
    topTextoBtn: "Orçamento",
    topLinkBtn: "/orcamento",
    serTitulo: "Serviços",
    serSubTitulo: "Lorem Ipsum is simply dummy text of the printing industry.",
    serUmIcone: "laptop-code",
    serUmTitulo: "Serviço Um",
    serUmDesc: "Lorem Ipsum is simply dummy text of the printing industry.",
    serDoisIcone: "mobile-alt",
    serDoisTitulo: "Serviço Dois",
    serDoisDesc: "Lorem Ipsum is simply dummy text of the printing industry.",
    serTresIcone: "netwok-wired",
    serTresTitulo: "Serviço Tres",
    serTresDesc: "Lorem Ipsum is simply dummy text of the printing industry.",
  };

  const homeExiste = await Home.findOne({});
  if (homeExiste) {
    return res.status(400).json({
      error: true,
      message: "Error: A página Home já possui registros!",
    });
  }

  await Home.create(dados, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Error: Conteúdo da página Home NÃO cadastrado com secesso!",
      });
  });
  return res.json({
    error: false,
    message: "Conteúdo da página Home CADSATRADO com secesso!",
  });
});

app.post("/orcamento", async (req, res) => {
  await Orcamento.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Error: Solicitação de orçamento não enviada com secesso!",
      });
  });
  return res.json({
    error: false,
    message: "Solicitação de orçamento enviada com secesso!",
  });
});

app.listen(8080, function () {
  console.log(
    "Servidor inciado com sucesso na porta 8080: http://localhost:8080"
  );
});
