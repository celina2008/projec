const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png" ;
var hour

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg)
    }

    Engine.update(engine);

    // write code to display time in correct format here

if(hour>12){
    text("time"+hour%12+"pm",50,100)
}
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsejson=await response.json()
var dt=responsejson.datetime
hour=dt.slice(11,13)
if(hour>04 && hour<06){
    bg="sunrise1.png"
}else if(hour>06 && hour<08){
    bg="sunrise2.png"
}
backgroundImg=loadImage(bg)
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
