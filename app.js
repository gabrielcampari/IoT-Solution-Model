let presence = 0;
let obstruction = 0;
let actuator = 1;

const presenceVal = document.getElementById("presenceVal");
const obstructionVal = document.getElementById("obstructionVal");
const actuatorVal = document.getElementById("actuatorVal");
const actuatorLabel = document.getElementById("actuatorLabel");
const togglePresence = document.getElementById("togglePresence");
const toggleObstruction = document.getElementById("toggleObstruction");
const autoSim = document.getElementById("autoSim");
const localLog = document.getElementById("localLog");

function updateDom() {
  presenceVal.textContent = presence;
  obstructionVal.textContent = obstruction;
  actuatorVal.textContent = actuator;
  actuatorLabel.textContent = actuator === 1 ? "Aberta" : "Fechada";
}

togglePresence.addEventListener("click", () => {
  presence = presence ? 0 : 1;
  updateDom();
});

toggleObstruction.addEventListener("click", () => {
  obstruction = obstruction ? 0 : 1;
  updateDom();
});

function logLocal(text) {
  const div = document.createElement("div");
  div.textContent = text;
  localLog.prepend(div);
}

function maybeAutoSimulate() {
  if (autoSim.checked) {
    if (Math.random() < 0.3) presence = presence ? 0 : 1;
    if (Math.random() < 0.2) obstruction = obstruction ? 0 : 1;
  }
}

async function sendToServer() {
  try {
    const res = await fetch("http://localhost:3000/sensors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ presence, obstruction }),
    });

    const data = await res.json();
    actuator = data.actuator;
    updateDom();

    logLocal(
      `Servidor retornou porta: ${actuator === 1 ? "Aberta" : "Fechada"}`
    );
  } catch (err) {
    logLocal(`Erro ao enviar ao backend: ${err.message}`);
  }
}

updateDom();

setInterval(() => {
  maybeAutoSimulate();
  sendToServer();
}, 2000);
