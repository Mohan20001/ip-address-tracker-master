let ip_address=document.getElementById('ip');
let timeZone=document.getElementById('tz');
let loc=document.getElementById('location');
let isp=document.getElementById('isp');
let btn=document.getElementById('srch-btn');
let inpt=document.getElementById('domine');


function  setMapCenter(x,y) {
    
    var map = L.map('map').setView([x, y], 14);
    
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([x, y]).addTo(map)
    .bindPopup(`location:lat=${x} and y
    long=${y}`)
    .openPopup();
}

let coords={
     x:51.505,
     y:-0.09
}
// setMapCenter(coords);


// let p=`https://geo.ipify.org/api/v2/country,city?apiKey=at_frOMlXpRYEj5i1JTerPvGVVRjhnDg&ipAddress=192.212.174.101`;
//------
async function connect(end="202.153.41.219") {
    let res=await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_frOMlXpRYEj5i1JTerPvGVVRjhnDg&ipAddress=${end}`).then(data=>data.json()).then((data)=>{
        console.log(data)
        ip_address.innerText=data.ip;
        loc.innerText=data.location.city +", "+data.location.country;
        timeZone.innerText=data.location.timezone;
        isp.innerText=data.isp;
        setMapCenter(data.location.lat, data.location.lng);
    }); 
}
connect();

btn.addEventListener('click',()=>{
    connect(inpt.value);
})