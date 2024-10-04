const postUrlBtn = document.getElementById("postUrlBtn");
const urlInput = document.getElementById("urlInput");
const container = document.querySelector(".container");

postUrlBtn.addEventListener("click", () => {
  const urlToShorten = urlInput.value;

  fetch("/api/shorturl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: urlToShorten }),
  })
    .then((response) => response.json())
    .then((data) => {
      const shortUrl = data.short_url;
      const fullShortUrl = `${window.location.origin}/api/shorturl/${shortUrl}`; // URL completa
      const resultDiv = document.createElement("div");
      resultDiv.innerHTML = `
            <p><strong>URL encurtada:</strong>
            <a href="${fullShortUrl}">${fullShortUrl}</a> 
            </p>
          `;
      container.appendChild(resultDiv);
    })
    .catch((error) => {
      console.error("Erro ao encurtar a URL:", error);
    });
});
