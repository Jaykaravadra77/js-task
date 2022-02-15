
let temp = document.getElementById("temprature");
let descreption = document.getElementById("descreption");
let loc = document.getElementById("location");
let t = document.getElementById('time');
let img = document.getElementById('img');

function getTime() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let period = "AM";

    if (hrs == 0) {
        hrs = 12;
    } else if (hrs >= 12) {
        hrs = hrs - 12
        period = "PM";
    }

    return { hrs, mins, secs, period }
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        const base =
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
            `lon=${lon}&appid=5e38d197691b33cc820f6fd48c28334f`;

        fetch(base)
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                temp.innerText = Math.floor(data.main.temp - 273) + "°C";
                descreption.innerText = data.weather[0].description;
                loc.innerText = data.name + "," + data.sys.country;
                setInterval(() => {
                    t.innerText = `${getTime().hrs}:${getTime().mins}:${getTime().secs} ${getTime().period}`;
                }, 1);


            });
    });
}
// window.addEventListener("unload", function(){
//     var count = parseInt(localStorage.getItem('counter') || 0);
//     localStorage.setItem('counter', ++count)
//   }, false);


 
function fetchGif() {
    fetch("https://g.tenor.com/v1/search?q=programing&key=LIVDSRZULELA&limit=8")
        .then((res) => res.json()).
        then((res) => {
  
            function prom() {
                // console.log(ele);
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                      resolve("SDF");
                  }, 120000);
                  
                })
            }

            async function test() {
                    
                    for (let i = localStorage.getItem('count') || 0; i < res.results.length; i++) {
                     
                          localStorage.setItem('count',i);
                        //   console.log(i,localStorage.getItem('count'));
                    
                        let ele = res.results[i].media[0].gif.url;
                         if(i == 0){
                            img.src=ele;
                            console.log(i,ele);
                         }else{
                            img.src = ele;
                            await prom();
                            img.src =ele;
                            
                         }
                             
                             if(i==res.results.length-1 ){
                                localStorage.setItem('count',0);
                                 i=0;
                                 continue;
                             }
                              
                    }
    
      
                

            }
         
         
                test()
           
         


        })



    // fetch('https://api.giphy.com/v1/gifs/random?api_key=ErpO0xNwzpyX4Qs8Dv74ExEn1TDUkIg1&tag=&rating=g').then((data)=>{
    //  return data.json();
    // }).then((data)=>{
    //     console.log(data.data.images.downsized_medium.url);
    //     img.src =data.data.images.downsized_medium.url;
    //     // location.reload();
    // })
}

 
fetchGif();