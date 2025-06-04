function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: [response.data.answer],
    autoStart: true,
  }).start();
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "1a6546fbd4afe78fc90o08t2850b2e3e";
  let context =
    "You are a cooking expert, and make easy recipes. You will generate a short recipe in basic HTML based on the user instructions below. Only give ingredients and instructions. Provide measurements in the metric system.";
  let prompt = `User instructions: Generate a recipe based ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
