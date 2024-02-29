let btn;
let numOfCircle=0;
let ws;

function setup(){
const canvas=createCanvas(windowWidth,windowHeight)
canvas.addClass("background")
background(200);

ws=new WebSocket("ws://localhost:3000")
ws.onmessage= onMessage;
/*btn= createButton("click me")
btn.addClass('my-botton')
btn.mousePressed(btnPressed)*/
}

function onMessage(event){
    console.log('message');
    const json = JSON.parse(event.data);
    line(json.px,json.py,json.x,json.y);
}

function btnPressed(){
    numOfCircle++;
}

/*function draw(){
  //  background(200);
    fill ('red')
    noStroke();
    for(let i=0;i<100;i++){
        circle(random(width),random(height),random(5,15));
    }


}*/

function mouseDragged(){
    //line(pmouseX,pmouseY,mouseX,mouseY)
    const data= {
        "px":pmouseX,
        "py":pmouseY,
        "x":mouseX,
        "y":mouseY,
    };

    ws.send(JSON.stringify(data))
}

function windowResized(){

    resizeCanvas(windowWidth,windowHeight)
}