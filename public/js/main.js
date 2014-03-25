var canvas,
    ctx,
    fieldwidth,
    fieldheight;

/*************************
**  Game Initialization
**************************/
function init(){
    // Declare canvas and rendering context
    canvas = document.getElementById("battleField");
    ctx = canvas.getContext("2d");

    // Set canvas width and height
    canvas.width = fieldwidth = window.innerWidth;
    canvas.height = fieldheight = window.innerHeight;

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
    canvas.width = fieldwidth = window.innerWidth;
    canvas.height = fieldheight = window.innerHeight;
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
    
}
