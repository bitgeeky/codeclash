var redPlayer = function(){
    var makeMove = function(tiles, playerTank){

        // Write the bot AI here 
        // Return an array havin 4 values
        // 1 Initial co-ordinates of Tank
        // 2 Direction of firing/moving
        // 1:North -1:South
        // 2:East  -2:West
        // Range of firing is 5 units
        // 3 Bool 0-move and 1-fire

        for(var i=0;i<=tiles.length;i++){
            for(var j=0;j<=tiles[0].length;j++){
                if(tiles[i][j] == playerTank)
                    break;
            }
        }
        var dirs = [1,-1,2,-2];
        var dir = Math.floor((Math.random()*4)+1) -1;
        var fire = Math.floor((Math.random()*2)+1) -1;
        var move = [i, j, dirs[dir], fire];
        return move;
    };
    return{
        makeMove: makeMove
    }
};
exports.redPlayer = redPlayer;
