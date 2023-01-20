let url = "https://striveschool-api.herokuapp.com/api/movies/";

window.onload = () => {
  getData();
};

const getData = async () => {
  try {
    let res = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzQyMTIwODAsImV4cCI6MTY3NTQyMTY4MH0.zN48s058sFaVM0Bbk-uaqF29hWCn4_jd6prsQCHQt-U",
      },
    });
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      renderCategories(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const renderCategories = (genres) => {
  genres.forEach(renderSingleCategory);
};

const renderSingleCategory = async () => {
  let container = document.querySelector(".main-wrapper");
  container.innerHTML += `
    <div class="container-fluid px-5 pt-5 pb-2">
    <h2>${genre}</h2>
    <div id="${genre}Carousel-lg" class="carousel slide d-none d-lg-block" data-interval="false">
        <a class="carousel-control-prev" href="#${genre}Carousel-lg" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#${genre}Carousel-lg" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        <div class="carousel-inner">
        </div>
    </div>
    <div id="${genre}Carousel-md" class="carousel slide d-none d-md-block d-lg-none" data-interval="false">
        <div class="carousel-inner">
        </div>
        <a class="carousel-control-prev" href="#${genre}Carousel-md" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#${genre}Carousel-md" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <div id="${genre}Carousel-sm" class="carousel slide d-block d-md-none" data-interval="false">
        <div class="carousel-inner">
        </div>
        <a class="carousel-control-prev" href="#${genre}Carousel-sm" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#${genre}Carousel-sm" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
      `;
  await getMovies(genre);
};

const getMovies = async (genre) => {
  try {
    const res = await fetch(url + genre, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzQyMTIwODAsImV4cCI6MTY3NTQyMTY4MH0.zN48s058sFaVM0Bbk-uaqF29hWCn4_jd6prsQCHQt-U",
      },
    });
  } catch (error) {}
};
