let url = "https://striveschool-api.herokuapp.com/api/movies/horror";

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
      renderMovie(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const renderMovie = (arrayOfMovies) => {
  let container = document.querySelector(".edit-wrapper");
  container.innerHTML = "";
  arrayOfMovies.forEach(singleMovie =>{
    const {name, description, category, imageUrl, _id} = singleMovie;
    container.innerHTML += `
      <div class="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-2 m-2">
          <img src="${imageUrl}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${category}</p>
              <p class="card-text">${description}</p>
              <a href="#" class="btn btn-primary">See More...</a>
              <br>
              <a href="backoffice.html?id=${_id}" class="btn btn-secondary"><i class="bi bi-pencil-square"></i></a>
              <button class="btn btn-danger" onclick="deleteEvent("${_id}")"><i class="bi bi-trash"></i></button>
          </div>
      </div>
    
    `
  });
};

const deleteEvent = async(idToDelete) => {
  try { 
    let res = await fetch (url + "/" + idToDelete,{
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzQyMTIwODAsImV4cCI6MTY3NTQyMTY4MH0.zN48s058sFaVM0Bbk-uaqF29hWCn4_jd6prsQCHQt-U",
      })
    })
    let deletedMovie = await res.json()
    
  } catch (error) {
  }
}
