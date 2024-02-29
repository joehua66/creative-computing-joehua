let data;
let btn
let resPromise

/*function preload(){
    data = loadJSON('data.json');
}*/

async function setup(){
createCanvas(400,400)

let res = await fetch('data.json');
data= await res.json();

/*data={
    "id":1234,
    "name":"cc",
    "shapes": [
        {
            "pos":[100,100],
            "color":[255,0,0],
            "shape":"circle"
        },
        {
            "pos":[200,200],
            "color":[255,255,0],
            "shape":"rect"
        }
    ]
}*/
}

/*function onPress(){
    const rb = random(255);
    background(rb);
}*/


function draw(){
    background(220)
    if(!data) return;

   /* for(let i=0;i< data.shapes.length;i++){
        const shapeObj= data.shapes[i];
        fill(shapeObj.color);
        if(shapeObj.shape==='circle'){
            circle(shapeObj.pos[0],shapeObj.pos[1],100)
        }else{
            rect(shapeObj.pos[0],shapeObj.pos[1],100,100)
        }
    }*/
    data.shapes.sort((a,b) => {
        a.pos[0] - b.pos [0];
    })

    const filtered = data. shapes.filter (item => item.pos[0] >10);


    filtered.forEach((shapeObj) => {fill(shapeObj.color);
        if(shapeObj.shape==='circle'){
            circle(shapeObj.pos[0],shapeObj.pos[1],100)
        }else{
            rect(shapeObj.pos[0],shapeObj.pos[1],100,100)
        }

    })

}

