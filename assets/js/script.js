//Dependencies
var searchForm = document.getElementById('search-form');
var inputField = document.getElementById("search");
var searchSubmit = document.getElementById("search-submit");
var drinksDiv = document.getElementById("drinks-div");
var imageDiv = document.getElementById("image-div");

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => getRandomCocktail(data));

// Helper Functions
function getRandomCocktail(data) {


    for (let drink of data.drinks) {
        var drinkElement = document.createElement("h3");

        if (drink.strImageSource !== null) {
            var drinkImage = document.createElement("img");
            drinkImage.setAttribute('src', drink.strImageSource);
            drinkImage.src = drink.strImageSource;
            imageDiv.appendChild(drinkImage);
        } else {
            var placeholderDrink = document.createElement("img");
            placeholderDrink.setAttribute('src', 'assets/images/bartender-placeholder.jpeg');
            imageDiv.appendChild(placeholderDrink);
        }

        drinkElement.textContent = drink.strDrink;
        drinksDiv.appendChild(drinkElement);

        var ingredientsUL = document.createElement("ul");
        for (var i = 1; i <= 15; i++) {
            var line = "";
            var ingredientName = drink[`strIngredient${i}`];
            // console log of ingredients working
            console.log(ingredientName);
            if (drink[`strIngredient${i}`] !== null && drink[`strIngredient${i}`] !== "") {
                line += drink[`strIngredient${i}`];
                var lineElement = document.createElement("li");
                line += " " + drink[`strMeasure${i}`];
                lineElement.textContent = line;
                ingredientsUL.appendChild(lineElement);
            }
            drinksDiv.appendChild(ingredientsUL);
        }
    }
};

// function logKey(e) {
//     console.log(e);
//     if (e.code === "Enter") {
//         console.log("enter key detected")
//         inputField.value = "";
//         getCocktailApi();
//     }

// }

function getCocktailApi(e) {
    e.preventDefault();
    console.log(inputField.value);

    var cocktailSearch = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inputField.value;

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
            // JSON.stringify(data) because local storage only handles strings
            var cocktailData = JSON.stringify(data);
            // localStorage.setItem('cocktailData', stringifiedData);
            localStorage.setItem('cocktailData', JSON.stringify(cocktailData));
        });

}

// function authenticate() {
//     return gapi.auth2
//         .getAuthInstance()
//         .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
//         .then(
//             function () {
//                 console.log("Sign-in successful");
//             },
//             function (err) {
//                 console.error("Error signing in", err);
//             }
//         );
// }
// function loadClient() {
//     gapi.client.setApiKey("AIzaSyCdDdBtp_6yVMIy_8Wx1XJHcQ4FZRPJ3rs");
//     return gapi.client
//         .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(
//             function () {
//                 console.log("GAPI client loaded for API");
//             },
//             function (err) {
//                 console.error("Error loading GAPI client for API", err);
//             }
//         );
// }
// // Make sure the client is loaded and sign-in is complete before calling this method.
// function execute() {
//     return gapi.client.youtube.search
//         .list({
//             part: ["snippet"],
//             maxResults: 25,
//             q: "margarita",
//         })
//         .then(
//             function (response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//             },
//             function (err) {
//                 console.error("Execute error", err);
//             }
//         );
// }
// gapi.load("client:auth2", function () {
//     gapi.auth2.init({
//         client_id:
//             "1075128440110-maq126f8513lh0qlp50416e2o6pco0n7.apps.googleusercontent.com",
//     });
// });

function googleFetch() {
    var googleVid = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" + inputField.value + "&type=video&key=AIzaSyCTGqFnZNElv_dPPcCH13dgc-tQAnu7kE0"
    fetch(googleVid)
        .then(
            function (response) {
                console.log(response.status)
                return response.json();
            }

        )
        .then(function (data) {

            console.log(data);
        });
}

// googleFetch();

// User Interactions
searchForm.addEventListener("submit", (e) => {
    // e.preventDefault();
    // getCocktailApi();
});
//generateBtn.addEventListener("click", random);
//console.log(random);
// INIT

//getCocktailApi();

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

