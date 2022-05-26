//Dependencies

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => response.json())
  .then((data) => getRandomCocktail(data));

// Helper Functions
function getRandomCocktail(data) {
 41-random-drink
    var drinksDiv = document.getElementById("drinks-div");
    var imageDiv = document.getElementById("image-div");

    for (let drink of data.drinks) {
        var drinkElement = document.createElement("h2");
        var drinkImage = document.createElement("img");

        drinkImage.setAttribute('src', drink.strImageSource);
        drinkImage.src = drink.strImageSource;

        drinkElement.textContent = drink.strDrink;
        drinksDiv.appendChild(drinkElement);
        imageDiv.appendChild(drinkImage);

        var ingredientsUL = document.createElement("ul");
        for (var i = 1; i <= 15; i++){
            var line = "";
            var ingredientName = drink[`strIngredient${i}`];
            // console log of ingredients working
            console.log(ingredientName);
            if (drink[`strIngredient${i}`] !== null) {
                line += drink[`strIngredient${i}`];
                var lineElement = document.createElement("li");
                line += " " + drink[`strMeasure${i}`];
                lineElement.textContent = line;
                ingredientsUL.appendChild(lineElement);
            }
            drinksDiv.appendChild(ingredientsUL);
        }

  var drinksDiv = document.getElementById("drinks-div");
  var imageDiv = document.getElementById("image-div");

  for (let drink of data.drinks) {
    var drinkElement = document.createElement("h2");
    var drinkImage = document.createElement("img");

    drinkImage.setAttribute("src", drink.strImageSource);

    drinkElement.textContent = drink.strDrink;
    drinksDiv.appendChild(drinkElement);
    imageDiv.appendChild(drinkImage);

    var ingredientsUL = document.createElement("ul");
    for (var i = 1; i <= 15; i++) {
      var line = "";
      var ingredientName = drink[`strIngredient${i}`];
      // console log of ingredients working
      console.log(ingredientName);
      if (drink[`strIngredient${i}`] !== null) {
        line += drink[`strIngredient${i}`];
        var lineElement = document.createElement("li");
        line += " " + drink[`strMeasure${i}`];
        lineElement.textContent = line;
        ingredientsUL.appendChild(lineElement);
      }
      drinksDiv.appendChild(ingredientsUL);
main
    }
  }
}

function getCocktailApi() {
  // fetch request
  var cocktailSearch =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  fetch(cocktailSearch, {
    // mode cors allows cross origin requests
    mode: "cors",
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
    .then(
      function () {
        console.log("Sign-in successful");
      },
      function (err) {
        console.error("Error signing in", err);
      }
    );
}
function loadClient() {
  gapi.client.setApiKey("AIzaSyCdDdBtp_6yVMIy_8Wx1XJHcQ4FZRPJ3rs");
  return gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function () {
        console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.youtube.search
    .list({
      part: ["snippet"],
      maxResults: 25,
      q: "margarita",
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
}
gapi.load("client:auth2", function () {
  gapi.auth2.init({
    client_id:
      "1075128440110-maq126f8513lh0qlp50416e2o6pco0n7.apps.googleusercontent.com",
  });
});

// User Interactions
generateBtn.addEventListener("click", random);
console.log(random);
// INIT

getCocktailApi();

//Bulma Javascript for Hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});
