let btn;
let numOfCircle=0;

function setup(){
const canvas=createCanvas(windowWidth,windowHeight)
canvas.addClass("background")
/*btn= createButton("click me")
btn.addClass('my-botton')
btn.mousePressed(btnPressed)*/
}

function btnPressed(){
    numOfCircle++;
}

function draw(){
  //  background(200);
    fill ('red')
    noStroke();
    for(let i=0;i<100;i++){
        circle(random(width),random(height),random(5,15));
    }


}

function windowResized(){

    resizeCanvas(windowWidth,windowHeight)
}