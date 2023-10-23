// const APIkey = "53f327c87ab2082ce6cd29ff713690fc"




// async function weatherdata(){
//     let city ="goa";
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)

//     const data =await response.json();
//     console.log(data.main.temp);



// }





// async function nazim(){

//     try{
//         let lat = 15.332;
//         let lon = 16.224
//         const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}
//         `)
    
//         const data = await res.json();
//         console.log(data);

//     }
//     catch{
//         console.log("Something went wrong", err);
//     }
   
// }

// nazim();





//GET MY CORRECT LOCATION

// function getLOcation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition)
//     }else{
//         console.log("NO grolocation supported");
//     }

// }

// function showPosition(position){
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;
//     console.log(lat);
//     console.log(long);

// }

// getLOcation();



// const x = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     console.log("Geolocation is not supported by this browser.");
//   }
// }

// function showPosition(position) {
//   let lat = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }

// getLocation();








const btn = document.getElementById("get-location-btn");


// function getLocation(position) {
//   console.log(position);
//   console.log(position.coords.latitude);
//   console.log(position.coords.longitude);
  
// }

// function failedTogetLoc(){
//   console.log("Some issue");

// }

// // geolocation 2 data leta hahai 1 succes honne par kya run hoga and 1 for rejection
// btn.addEventListener("click", async()=>{
//   const res= navigator.geolocation.getCurrentPosition(getLocation,failedTogetLoc)

// });



function getLocation(position){
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}


function failedTogetLoc(){
  console.log('Something went wrong');
}


btn.addEventListener("click", async()=>{
  navigator.geolocation.getCurrentPosition(getLocation,failedTogetLoc);
})



















