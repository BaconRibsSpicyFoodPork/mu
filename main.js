//Create a reference for canvas 

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;
greencar_x=5;
greencar_y=25;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    greencar_imgTag=new Image();
    greencar_imgTag.onload=uploadgreencar;
    greencar_imgTag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;

    if (keypressed=='37') {
        left();
    }

    if (keypressed=='38') {
        up();
    }

    if (keypressed=='39') {
        right();
    }

    if (keypressed=='40') {
        down();
    }
}

function up(){
    if (greencar_y>0) {
        greencar_y=greencar_y-10;
        uploadBackground();
        uploadgreencar();
    }
}

function down(){
    if (greencar_y<500) {
		greencar_y=greencar_y+10;
        uploadBackground();
        uploadgreencar();
    }
}

function left(){
    if (greencar_x>0) {
        greencar_x=greencar_x-10;
        uploadBackground();
        uploadgreencar();
    }
}

function right(){
    if (greencar_x<700) {
        greencar_x=greencar_x+10;
        uploadBackground();
        uploadgreencar();
    }
}