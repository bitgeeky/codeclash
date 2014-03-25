/*************************************
** NODE.JS REQUIREMENTS
*************************************/
var util = require("util"),
    io = require("socket.io");

var socket;


/************************************
** MAKE SOCKET CONNECTION
************************************/
function init(){
    
    socket = io.listen(8000);
    socket.configure(function() {
        socket.set("transports", ["websocket"]);
        socket.set("log level", 2);
    });
    makeMove();
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
};
function onClientDisconnect() {
    util.log("Player has disconnected: "+this.id);
};


/**********************************
** MODERATOR - MAKE MOVES
**********************************/
function makeMove(){

};

init();
