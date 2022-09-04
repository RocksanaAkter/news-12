const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url)
    const data = await res.json();
    displayNews(data.data);
}

const displayNews = data => {
    const newsContainer = document.getElementById('news-container');
    console.log(data)
    data.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="card mb-3 p-3" style="max-width: full;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details.slice(0, 150) + '...'}</p>
        
        <div class="player">
                        <img id="author-img" class="rounded-circle w-2" src="${news.author.img}" alt="">
                        <p class="player-name">${news.author.name}</p>
                    </div>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        `;
        newsContainer.appendChild(newsDiv)
    })
}

loadData();
