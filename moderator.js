/*************************************
** NODE.JS REQUIREMENTS
*************************************/
var util = require("util"),
    io = require("socket.io");

var socket;


/************************************
** GAME VARIABLES
************************************/
var Board = require("./Board").Board;
var board = new Board(20, 40);
var ConfOne = require("./ConfOne").ConfOne;
var config = new ConfOne(20, 40);
var bluePlayer = require("./bluePlayer").bluePlayer;
var blueBot = new bluePlayer();
var redPlayer = require("./redPlayer").redPlayer;
var redBot = new redPlayer();
var helperFunctions = require("./helperFunctions").helperFunctions;
var help = new helperFunctions();


/************************************
** MAKE SOCKET CONNECTION
************************************/
function init(){
    
    socket = io.listen(8000);
    socket.configure(function() {
        socket.set("transports", ["websocket"]);
        socket.set("log level", 2);
    });
    board.initialSetup(config);
    setEventHandlers();
    //setTimeout(function(){playGame();},5000);
};


/************************************
** BIND EVENT HANDLERS
************************************/
var setEventHandlers = function() {
    socket.sockets.on("connection", onSocketConnection);
};
function onSocketConnection(client) {
   util.log("New Connection Established: "+client.id);
   client.on("disconnect", onClientDisconnect);
   sendData(client);
};
function onClientDisconnect() {
    util.log("Player has disconnected: "+this.id);
};


/*********************************
** SEND DATA TO CLIENT
*********************************/
function sendData(client){
    setInterval(function(){
        var boardData = JSON.stringify(board.getTiles());
        client.emit("makeMove", boardData);
    },1000);
};


/**********************************
** MODERATOR - MAKE MOVES
**********************************/
/****
function playGame(){
    var turn = 1;
    setInterval(function(){
        var move;
        if(turn){
            move = blueBot.makeMove(board.getTiles(),"B");
        }
        else{
            move = redBot.makeMove(board.getTiles(),"R");
        }
        if(help.validateMove(move)){
            board.update(help.makeMove());
        }
    },1000);
};
****/

init();
