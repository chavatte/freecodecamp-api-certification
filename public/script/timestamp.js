const timestampButton = document.getElementById("timestamp-button");
const dateInput = document.getElementById("date-input");
const resultDiv = document.getElementById("result");

timestampButton.addEventListener("click", () => {
  const dateValue = dateInput.value;
  fetch(`/api/${dateValue}`)
    .then((response) => response.json())
    .then((data) => {
      const formattedResponse = `
          <p><b>unix:</b> ${data.unix}</p> 
          <p><b>utc:</b> ${data.utc}</p> 
      `;
      resultDiv.innerHTML = formattedResponse;
    })
    .catch((error) => {
      console.error("Erro ao consultar timestamp:", error);
      resultDiv.innerHTML = "<p>Erro ao consultar timestamp.</p>";
    });
});
