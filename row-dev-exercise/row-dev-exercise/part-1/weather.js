// window.addEventListener('load',() =>{
// const url='https://restofworld.org/wp-content/projects/code/exercise/data/weather.js';
// fetch(url , {
//     mode:'no-cors',
//     method: "post",
//     headers: {
//          "Content-Type": "application/json"
//     },
//     // body: JSON.stringify(ob)


// }
// .then(response => response.json())
//     .then(data => {
//     })
//     .catch(()=> {
//         msg.textContent="Please search for a valid city";
//     // const city= data.name;
//     // const {temp} = data.main;
//     }));
// });


// window.onload = function(){
//     const obj={geoloc: "city", limit:15 };
//     let sc = document.createElement("script");
//     sc.src='https://restofworld.org/wp-content/projects/code/exercise/data/weather.js '
//     + JSON.stringify(obj);
//      document.body.appendChild("#content");
//     function myFunc(myObj){
//         let txt="";
//         for(let x in myObj){
//             txt += myObj[x].name + "<br>"
//         }
//         document.getElementById("content").innerHTML = txt;
//     }
// }