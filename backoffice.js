let url = "https://striveschool-api.herokuapp.com/api/movies";
// img = https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg

const sendData = async (movie) => {
  try {
    let res = fetch(url, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzQyMTIwODAsImV4cCI6MTY3NTQyMTY4MH0.zN48s058sFaVM0Bbk-uaqF29hWCn4_jd6prsQCHQt-U",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const submitMovie = () => {
  let movie = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    category: document.querySelector("#category").value,
    imageUrl: document.querySelector("#imageUrl").value,
  };
  sendData(movie);
};
