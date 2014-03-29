var bluePlayer = function(){
    
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
        //var startJ = Math.floor((Math.random()*(tiles[0].length-1)));
        var fireRange = 3;
        
        // Select Player Tank
        for(var i=startI;i<tiles.length;i++){
            for(var j=0;j<tiles[0].length;j++){
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
        if(found == 0){
            for(var i=startI;i>=0;i--){
                for(var j=tiles[0].length-1;j>=0;j--){
                if(tiles[i][j] == playerTank){
                    found = 1;
                    break;
                }
                }
                if(found == 1){
                    break;
            }
            }
        }
        
        // Check to Fire
        var fire = 0;
        var dir = 0;
        if(fire == 0){
            // Check North
            for(var x=1;x<=fireRange;x++){
                if(i-x >= 0){
                    if(tiles[i-x][j] == "RT" || tiles[i-x][j] == "RA" ){
                        fire = 1;
                        dir = 1;
                    }
                }
            }
        }
        if(fire == 0){
            // Check South
            for(var x=1;x<=fireRange;x++){
                if(i+x < tiles.length){
                    if(tiles[i+x][j] == "RT" || tiles[i+x][j] == "RA" ){
                        fire = 1;
                        dir = -1;
                    }
                }
            }
        }
        if(fire == 0){
            // Check East
            for(var y=1;y<=fireRange;y++){
                if(j+y < tiles[0].length){
                    if(tiles[i][j+y] == "RT" || tiles[i][j+y] == "RA" ){
                        fire = 1;
                        dir = 2;
                    }
                }
            }
        }
        if(fire == 0){
            // Check West
            for(var y=1;y<=fireRange;y++){
                if(j-y >= 0){
                    if(tiles[i][j-y] == "RT" || tiles[i][j-y] == "RA" ){
                        fire = 1;
                        dir = -2;
                    }
                }
            }
        }

        // Do not Fire take a Move Randomly
        // Don not destroy walls
        var dirs;
        if(fire == 0){
          dirs = [1,-1,2,-2];
          var turn = Math.floor((Math.random()*4)+1) -1;
          dir = dirs[turn];
        }
        var move = [i, j, dir, fire];
        return move;
    }

    return{
        makeMove: makeMove
    }
};
exports.bluePlayer = bluePlayer;
