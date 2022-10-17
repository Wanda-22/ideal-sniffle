var canvas=document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
greencarw= 75;
greencarh= 100;

x=5;
y=255;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	v=new Image();
    v.onload=ubg;
    v.src=background_image;

    r=new Image();
    r.onload=rbg;
    r.src=greencar_image;
}

function ubg() {
	//Define function ‘uploadBackground’
	ctx.drawImage(v,0,0,canvas.width,canvas.height);
}

function rbg() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(r,x,y,greencarw,greencarh);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (y>=0) {
        y=y-10;
        ubg();
        rbg();
    }
	//Define function to move the car upward
}

function down()
{
	if (y<=500) {
        y=y+10;
        ubg();
        rbg();
    }
	//Define function to move the car downward
}

function left()
{
	if (x>=0) {
	x=x-10;
	ubg();
	rbg();
}
	//Define function to move the car left side
}

function right()
{
	if (x<=700) {
        x=x+10;
        ubg();
        rbg();
    }
	//Define function to move the car right side
}
