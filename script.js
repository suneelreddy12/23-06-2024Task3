document.getElementById("fetch-joke").addEventListener("click", fetchJoke);

function fetchJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
      displayJoke(data);
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
}

function displayJoke(data) {
  const jokeDiv = document.getElementById("joke");
  jokeDiv.classList.remove("hidden");
  if (data.type === "single") {
    jokeDiv.innerHTML = `<p class="lead">${data.joke}</p>`;
  } else {
    jokeDiv.innerHTML = `<p class="lead">${data.setup}</p><p class="lead"><strong>${data.delivery}</strong></p>`;
  }
}
