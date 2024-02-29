let data;
let maxLat,maxLng,mainLat,mainLng;
let stations=[]
let currentTime;

function preload(){
    data = loadJSON('./2023-11-06.json');
}

async function setup(){
createCanvas(600,600)
const lats = data.stations.map( station => station.lat)
maxLat = Math.max (... lats)
maxLng = Math.max(...data.stations.map(station => station.lng))
minLat = Math.min(...lats)
minLng = Math.min(...data.stations.map(station => station.lng))

console.log(maxLat,maxLng,minLat,minLng)

data.stations.forEach( s => {
    const station= new Station(s);
    stations.push(station);
})

currentTime = data.trips(0).st;
maxTime = data.trips (data.trips.length-1).et

}




function draw(){
    background(220)
    currentTime += 60000

   stations.forEach(s =>{
    s.display();
   })

}

