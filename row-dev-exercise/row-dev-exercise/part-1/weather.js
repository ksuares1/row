const url='https://restofworld.org/wp-content/projects/code/exercise/data/weather.js';
fetch(url , {
    mode:'no-cors',
    method: "post",
    headers: {
         "Content-Type": "application/json"
    },
    body: JSON.stringify(ob)
}
.then(response=> response.json())
.async(data => {
})
    .catch(() => {
        msg.textContent= 'Search for the weather conditions in Palo Alto';
}));

