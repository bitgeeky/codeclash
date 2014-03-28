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

        var tiles = tiles;
        var playerTank = playerTank;
        var found = 0;
        var startI = Math.floor((Math.random()*(tiles.length-1)));
        var startJ = Math.floor((Math.random()*(tiles[0].length-1)));
        for(var i=startI;i<tiles.length;i++){
            for(var j=startJ;j<tiles[0].length;j++){
                if(j>=40)
                    console.log("bug found");
                if(tiles[i][j] == playerTank){
                    found = 1;
                    break;
                }
            }
            if(found == 1){
                break;
            }
        }
        var dirs = [1,-1,2,-2];
        var dir = Math.floor((Math.random()*4)+1) -1;
        var fire = 0;
        var count = Math.floor((Math.random()*20)+1);
        if(count%5 == 0)
            fire = 1;
        var move = [i, j, dirs[dir], fire];
        return move;
    };
    return{
        makeMove: makeMove
    }
};
exports.redPlayer = redPlayer;
