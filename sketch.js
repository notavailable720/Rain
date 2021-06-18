const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var world, engine;

var rain = [];

var umbrella;

var lightning;

function preload(){
    
}

function setup(){
    createCanvas(700, 700);

    engine = Engine.create();
    world = engine.world;  

    umbrella = new Umbrella(350, 350);

    Engine.run(engine);
}

function draw(){
    background('black');

    if(frameCount%30===0) {
        for(var i = 0; i < 500; i++) {
        drop = new Rain(random(0, 700),random(-900, 0));
        rain.push(drop);
        }
    }

    for(var i=0; i < rain.length; i++) {
        rain[i].display();
    }

    //lightning.choose();

    umbrella.display();
}   

