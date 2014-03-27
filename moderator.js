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
var config = new ConfOne(20, 40)


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


/**********************************
** MODERATOR - MAKE MOVES
**********************************/
function sendData(client){
    setInterval(function(){
        var boardData = JSON.stringify(board.getTiles());
        client.emit("makeMove", boardData);
    },1000);
};

init();
