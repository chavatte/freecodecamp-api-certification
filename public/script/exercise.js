const createUserBtn = document.getElementById("createUserBtn");
const addExerciseBtn = document.getElementById("addExerciseBtn");
const getLogsBtn = document.getElementById("getLogsBtn");
const userCreatedMsg = document.getElementById("userCreatedMsg");
const exerciseAddedMsg = document.getElementById("exerciseAddedMsg");
const logsMsg = document.getElementById("logsMsg");

createUserBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `username=${username}`,
  })
    .then((response) => response.json())
    .then((data) => {
      userCreatedMsg.textContent = `Usuário criado: ${data.username} (ID: ${data._id})`;
    })
    .catch((error) => console.error("Erro:", error));
});

addExerciseBtn.addEventListener("click", () => {
  const userId = document.getElementById("userId").value;
  const description = document.getElementById("description").value;
  const duration = document.getElementById("duration").value;

  const date = document.getElementById("date").value;

  fetch(`/api/users/${userId}/exercises`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `description=${description}&duration=${duration}&date=${date}`,
  })
    .then((response) => response.json())
    .then((data) => {
      exerciseAddedMsg.textContent = `Exercício adicionado para ${data.username} (ID: ${data._id}) em ${data.date}`;
    })
    .catch((error) => console.error("Erro:", error));
});

getLogsBtn.addEventListener("click", () => {
  const userId = document.getElementById("userIdLogs").value;
  const fromDate = document.getElementById("fromDate").value;
  const toDate = document.getElementById("toDate").value;
  const limit = document.getElementById("limit").value;

  let url = `/api/users/${userId}/logs`;
  if (fromDate || toDate || limit) {
    url += "?";
    if (fromDate) url += `from=${fromDate}`;
    if (fromDate && (toDate || limit)) url += "&";
    if (toDate) url += `to=${toDate}`;
    if (toDate && limit) url += "&";
    if (limit) url += `limit=${limit}`;
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      logsMsg.textContent = `Logs de ${data.username} (ID: ${
        data._id
      }): ${JSON.stringify(data.log, null, 2)}`;
    })
    .catch((error) => console.error("Erro:", error));
});
