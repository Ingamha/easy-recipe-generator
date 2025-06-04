function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "How to make pizza doug: Mix flour, salt and a little yeast.",
    delay: 10,
    autoStart: true,
  });
}

let recipeFormElement = document.querySelector("#recipe-form-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
