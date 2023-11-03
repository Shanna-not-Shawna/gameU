apiKey = 758f0fb8bc1741f39e2f3777d1996684;
const apiUrl = 'https://rawg.io/api/games?token&key=';
const url = `${apiUrl}${apiKey}${numRes}`;
const rating = '&metacritic=97,100';
const url2 = `${apiUrl}${apiKey}${rating}${numRes}`;
const numRes = '&page_size=10';

// top 10 query
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
        const slug = response.slug;
        const title = response.slug;
        const image = response.background_image;


    });
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// RAWG title search
fetch(url2)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
       


    });
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// API calls: 
// 1) top 8-10 games based on metacritic rating
        // need slug, name and background_image url string

        // https://api.rawg.io/api/games?key=758f0fb8bc1741f39e2f3777d1996684&page_size=10&metacritic=97,100

// 2) search for a title on RAWG via search box on homepage
        // need slug, name and background_image url string

        // https://api.rawg.io/api/games?key=758f0fb8bc1741f39e2f3777d1996684&page_size=10&search=%22mario%22