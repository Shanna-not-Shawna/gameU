const apiKey = "758f0fb8bc1741f39e2f3777d1996684";
const apiUrl = "https://rawg.io/api/games?token&key=";
const rating = "&metacritic=97,100";
const numRes = "&page_size=9";
const url2 = `${apiUrl}${apiKey}${rating}${numRes}`;
const gameContainer = document.querySelector("#requested-games");
gameContainer.setAttribute("style", "display: flex; flex-wrap: wrap;");


// run on page load to populate default high rated games
function gamesLoad() {

  fetch(url2)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      for (let i = 0; i < data.results.length; i++) {
        const game = data.results[i];
        const card = document.createElement("div");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const button = document.createElement("a");

        card.classList.add("card");
        card.style.width="22rem";
        img.classList.add("card-img-top");

        img.setAttribute("src", game.background_image);
        img.style.height="200px";
        h2.textContent = game.name;
        button.className = ("btn", "btn-primary", "select-game-button");
        button.setAttribute("href", "/newpost");
        button.textContent = "Make a post";


        //         // logic for button click w/ images
        //         document.querySelectorAll(".select-game-button").forEach(button => {
        //           button.addEventListener("click", function() {
        //             const gameCard = this.closest("#requested-games");
        //             const
        //           })
        //         })
        // **************************************************************************

        // *****logic for "make a post" button to save gameTitle and imgUrl to database
        button.addEventListener("click", ()=> {
          const imgUrl = game.background_image;
          const gameTitle = game.name;
          // console.log(imgUrl);
          // console.log(gameTitle);
          fetch("/api/games", {
            method: "POST",
            body: JSON.stringify({ title: gameTitle, image: imgUrl }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("New game created:", data);
              // You can update your UI or take any other actions here
            })
            .catch((error) => {
              console.error("Error creating a new game:", error);
            });
        });



        gameContainer.append(card);
        card.append(img);
        card.append(h2);
        card.append(button);

      }

    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// RAWG title search
function gameSearch(event) {
  gameContainer.innerHTML = "";
  event.preventDefault();

  const gameInput = document.querySelector("#game-query").value;
  fetch(`https://api.rawg.io/api/games?key=${apiKey}&page_size=9&search=${gameInput}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      for (let i = 0; i < data.results.length; i++) {
        const game = data.results[i];
        const card = document.createElement("div");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const button = document.createElement("a");

        card.classList.add("card");
        card.style.width="22rem";
        img.classList.add("card-img-top");

        img.setAttribute("src", game.background_image);
        img.style.height="200px";
        h2.textContent = game.name;
        button.className = ("btn", "btn-primary");
        button.setAttribute("href", "/newpost");
        button.textContent = "Make a post";


        gameContainer.append(card);
        card.append(img);
        card.append(h2);
        card.append(button);

      }

    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
}


document.querySelector("#game-search-form").addEventListener("submit", gameSearch);
document.addEventListener("DOMContentLoaded", gamesLoad);

