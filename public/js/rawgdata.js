apiKey = "758f0fb8bc1741f39e2f3777d1996684";
const apiUrl = "https://rawg.io/api/games?token&key=";
// const rating = "&metacritic=97,100";
const numRes = "&page_size=10";
const url = `${apiUrl}${apiKey}${numRes}`;
// const url2 = `${apiUrl}${apiKey}${rating}${numRes}`;
const gameContainer = document.querySelector("#requested-games");
gameContainer.setAttribute("style", "display: flex; flex-wrap: wrap;");


// top 10 query
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // const slug = response.slug;
    // const title = response.name;
    // const image = response.background_image;


  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });

function gameSearch(event) {
  event.preventDefault();
  // RAWG title search
  const gameInput = document.querySelector("#game-query").value;
  fetch(`https://api.rawg.io/api/games?key=758f0fb8bc1741f39e2f3777d1996684&page_size=10&search=${gameInput}`)
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
        // const p = document.createElement("p");
        const button = document.createElement("button");

        card.classList.add("card");
        card.style.width="22rem";
        img.classList.add("card-img-top");

        img.setAttribute("src", game.background_image);
        img.style.height="200px";
        h2.textContent = game.name;
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

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */

// API calls:
// 1) top 8-10 games based on metacritic rating
// need slug, name and background_image url string

// https://api.rawg.io/api/games?key=758f0fb8bc1741f39e2f3777d1996684&page_size=10&metacritic=97,100

// 2) search for a title on RAWG via search box on homepage
// need slug, name and background_image url string

// https://api.rawg.io/api/games?key=758f0fb8bc1741f39e2f3777d1996684&page_size=10&search=%22mario%22