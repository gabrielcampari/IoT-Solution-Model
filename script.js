const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sensors", (req, res) => {
  const { presence, obstruction, actuator } = req.body || {};
  console.log(`Sensor de obstrução(${obstruction})`);
  console.log(`Sensor de presença (${presence})`);
  console.log(actuator === 1 ? "Porta Aberta" : "Porta Fechada");
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor recebido dados dos sensores na porta ${PORT}`);
});
