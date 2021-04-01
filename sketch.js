
var database,position;
var form;
var playerCount=0
function setup(){
    database=firebase.database();
    createCanvas(500,500);
   form=new Form();
   form.display();
}

function draw(){
    background("yellow");

    drawSprites();
}

