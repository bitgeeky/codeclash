/***********************************
** GAME VARIABLES
***********************************/
var canvas,
    ctx,
    fieldWidth,
    fieldHeight;

// Field Division
var rows = 20,
    columns = 40,
    tileWidth,
    tileHeight;


/*************************
**  Game Initialization
**************************/
function init(){
    // Declare canvas and rendering context
    canvas = document.getElementById("battleField");
    ctx = canvas.getContext("2d");

    // Set canvas width and height
    canvas.width = fieldWidth = window.innerWidth;
    canvas.height = fieldHeight = window.innerHeight;

    //Set tile width and height
    tileWidth = fieldWidth / columns;
    tileHeight = fieldHeight / rows;
    
    // Start listening for events
    setEventHandlers();
};


/*******************************
** Game Event Handlers
********************************/
var setEventHandlers = function(){
    // Window resize
    window.addEventListener("resize", onResize, false);    
};

// Browser window resize
function onResize(e){
    // Set canvas width and height on window resize
    canvas.width = fieldWidth = window.innerWidth;
    canvas.height = fieldHeight = window.innerHeight;
    
    //Set tile width and height on window resize
    tileWidth = fieldWidth / columns;
    tileHeight = fieldHeight / rows;
};


/******************************
** Game Animation Loop
******************************/
function animate(){
    //update(); Yet to write this function
    draw();
    
    // Request a new animation frame using Paul Irish's shim
    window.requestAnimFrame(animate);
};


/******************************
** Game Draw
******************************/
function draw(){
   
   ctx.strokeStyle = '#000';
   ctx.clearRect(0, 0, fieldWidth, fieldHeight);
   ctx.beginPath();
   
   // Draw Grid

   // Horizontal Lines
   for(var x = 0; x < columns; x++) {
       ctx.moveTo(x * tileWidth, 0);
       ctx.lineTo(x * tileWidth, fieldHeight);
   }
   // Vertical Lines
   for(var y = 0; y < rows; y++) {
       ctx.moveTo(0, y * tileHeight);
       ctx.lineTo(fieldWidth, y * tileHeight);
   }
   
   ctx.stroke();

};
