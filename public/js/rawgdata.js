apiKey = 758f0fb8bc1741f39e2f3777d1996684;
const requestUrl = 'https://rawg.io/api/games?token&key=';

function getApi() {
fetch(${apiKey})
  .then(res => res.json())
  .then(data => data.results.map(gameData => console.log(gameData)))
  .catch(error => console.error('Error:', error));
}