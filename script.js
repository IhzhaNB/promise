const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch(
    "https://newsapi.org/v2/everything?q=Apple&from=2023-02-02&sortBy=popularity&apiKey=80c19574d7c24c92bb6e1276194ab793&s=" +
      inputKeyword.value
  )
    .then((response) => response.json())
    .then((response) => {
      const news = response.articles;
      let cards = "";
      news.forEach((n) => (cards += showCards(n)));
      const newsContainer = document.querySelector(".news-container");
      newsContainer.innerHTML = cards;
    });
});

function showCards(n) {
  return `<div class="col-md-4 my-5">
          <div class="card">
            <img src="${n.urlToImage}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${n.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${n.description}</h6>
              <a href="${n.url}" class="btn btn-primary">Show Detail</a>
            </div>
          </div>
        </div>`;
}
