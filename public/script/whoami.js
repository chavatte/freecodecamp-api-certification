const getDataButton = document.getElementById("getDataButton");
const resultsDiv = document.getElementById("results");

getDataButton.addEventListener("click", () => {
  fetch("/api/whoami")
    .then((response) => response.json())
    .then((data) => {
      resultsDiv.innerHTML = `
        <p><b>Endereço IP:</b> ${data.ipaddress}</p>
        <p><b>Idioma:</b> ${data.language}</p>
        <p><b>Software:</b> ${data.software}</p>
      `;
    })
    .catch((error) => {
      console.error("Erro ao obter os dados:", error);
      resultsDiv.innerHTML = "<p>Erro ao obter os dados.</p>";
    });
});
