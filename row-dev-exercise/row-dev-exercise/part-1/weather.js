window.addEventListener('load',() =>{
const url='https://restofworld.org/wp-content/projects/code/exercise/data/weather.js';
fetch(url , {
    mode:'no-cors',
    method: "post",
    headers: {
         "Content-Type": "application/json"
    },
    // body: JSON.stringify(ob)
}
.then((response) =>{
    return response.json();
  .then((data) => {
    console.log(data);
    const city= data.name;
    const {temp} = data.main;

  });
}));
}