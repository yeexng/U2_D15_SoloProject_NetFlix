let url = "https://striveschool-api.herokuapp.com/api/movies";
const params = new URLSearchParams(location.search)
const id = params.get("id");
console.log(id); //this can be either id or null, depend where you click

//if null => POST
//if id => PUT

//Edit/PUT Data
//Auto input the data

// window.onload = async() =>{
//   if(id !== null){
//     let res = await fetch(url + "/" + id,{
//     headers: {
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzQyMTIwODAsImV4cCI6MTY3NTQyMTY4MH0.zN48s058sFaVM0Bbk-uaqF29hWCn4_jd6prsQCHQt-U",
//     },
//   })
//   let {name,description,category,imageUrl} = await res.json()
//   document.querySelector("#name").value = name,
//   document.querySelector("#description").value = description,
//   document.querySelector("#category").value = category,
//   document.querySelector("#imageUrl").value = imageUrl
//   }
// }


const editMovie = async (editMovie) =>{
  const editedMovie = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    category: document.querySelector("#category").value,
    imageUrl: document.querySelector("#imageUrl").value,
  }
  let res = await fetch(url + "/" + id,{
    method: "PUT",
    headers: new Headers({
      "Content-type" : "application/json",
      Authorization: 
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzQyMTIwODAsImV4cCI6MTY3NTQyMTY4MH0.zN48s058sFaVM0Bbk-uaqF29hWCn4_jd6prsQCHQt-U",
    }),
    body: JSON.stringify(editedMovie),
  });

  let changed = await res.json()
console.log(changed)
}
    
//Sending Data
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
  
    


