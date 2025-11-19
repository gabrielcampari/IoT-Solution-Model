const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

function decideDoor(presence, obstruction) {
//  if (presence === 0) return 1;
//  if (obstruction === 1) return 1;
  return (presence === 0 || obstruction === 1)?1:0
//  return 0;
}

app.post("/sensors", (req, res) => {
  const { presence, obstruction } = req.body || {};

  const actuator = decideDoor(presence, obstruction);

  console.log(`Sensor de obstrução (${obstruction})`);
  console.log(`Sensor de presença (${presence})`);
  console.log(actuator === 1 ? "Porta Aberta" : "Porta Fechada");
  console.log("----------------------");

  res.status(200).json({ actuator });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor recebendo dados dos sensores na porta ${PORT}`);
});
