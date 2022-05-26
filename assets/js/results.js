//Dependencies
var drinksDiv = document.getElementById("drinks-div");
var inputField = document.getElementById("search");

// get string from local storage with localStorage.getItem('cocktailData')
var cocktailData = JSON.parse(localStorage.getItem("cocktailData"));
// JSON.parse(stringData) to get a javascript object
console.log(cocktailData);
// Helper Functions
function getCocktailApi() {

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
        });
}

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
inputField.addEventListener("input", getCocktailApi);
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
