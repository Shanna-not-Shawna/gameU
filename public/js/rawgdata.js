apiKey = '758f0fb8bc1741f39e2f3777d1996684';
const apiUrl = 'https://rawg.io/api/games?token&key=';
const rating = '&metacritic=97,100';
const numRes = '&page_size=10';
const url = `${apiUrl}${apiKey}${numRes}`;
const url2 = `${apiUrl}${apiKey}${rating}${numRes}`;

// top 10 query
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
        const slug = response.slug;
        const title = response.slug;
        const image = response.background_image;


    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

function gameSearch(event) {
    event.preventDefault()
    // RAWG title search
    const gameInput = document.querySelector('#game-query').value
    fetch(`https://api.rawg.io/api/games?key=758f0fb8bc1741f39e2f3777d1996684&page_size=10&search=${gameInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data)


        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
document.querySelector('#game-search-form').addEventListener('submit', gameSearch)
// API calls: 
// 1) top 8-10 games based on metacritic rating
// need slug, name and background_image url string

// https://api.rawg.io/api/games?key=758f0fb8bc1741f39e2f3777d1996684&page_size=10&metacritic=97,100

// 2) search for a title on RAWG via search box on homepage
// need slug, name and background_image url string

// https://api.rawg.io/api/games?key=758f0fb8bc1741f39e2f3777d1996684&page_size=10&search=%22mario%22