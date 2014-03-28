var helperFunctions = function(){
    
    var stepRange = 1;
    var fireRange = 3;

    var validateMove = function(tiles, move, playerTank){
        var initX = move[0],
            initY = move[1];
        
        if(tiles[initX][initY] != playerTank){
            return 0;
        }
        if(move[3] == 1){
            return 1;
        }
        else if(move[3] == 0){
            if(move[2] == 1){
                if((initX - stepRange) >= 0){
                    var tileCode = tiles[initX-stepRange][initY];
                    if(tileCode == "GR" || tileCode == "FR"){
                        return 1;
                    }
                }
            }
            else if(move[2] == -1){
                if((initX + stepRange) <= tiles.length){
                    var tileCode = tiles[initX+stepRange][initY];
                    if(tileCode == "GR" || tileCode == "FR"){
                        return 1;
                    }
                }
            }
            else if(move[2] == 2){
                if((initY + stepRange) <= tiles[0].length){
                    var tileCode = tiles[initX][initY+stepRange];
                    if(tileCode == "GR" || tileCode == "FR"){
                        return 1;
                    }
                }
            }
            else if(move[2] == -2){
                if((initY - stepRange) >= 0){
                    var tileCode = tiles[initX][initY-stepRange];
                    if(tileCode == "GR" || tileCode == "FR"){
                        return 1;
                    }
                }
            }
        }
        return 0;
    };

    var makeMove = function(tiles, move){
        
        // Return a 2d array updating the board state
        
        var initX = move[0],
            initY = move[1];

            // Make a Valid Move
            if(move[2] == 1)
            {
                if(move[3] == 0){
                    // Move towards North
                    tiles[initX][initY+stepRange] = tiles[initX][initY];
                    tiles[initX][initY] = "GR";
                }
                else{
                    // Fire towards North
                    for(var i=0;i<fireRange;i++){
                        if((initX - i) >= 0){
                            tiles[initX-i][initY] = "FR";
                        }
                    }
                }
            }
            else if(move[2] == -1)
            {
                if(move[3] == 0){
                    // Move towards South
                    tiles[initX][initY-stepRange] = tiles[initX][initY];
                    tiles[initX][initY] = "GR";
                }
                else{
                    // Fire towards South
                    for(var i=0;i<fireRange;i++){
                        if((initX + i) <= tiles.length){
                            tiles[initX+i][initY] = "FR";
                        }
                    }
                }
            }
            else if(move[2] == 2)
            {
                if(move[3] == 0){
                    // Move towards East
                    tiles[initX+stepRange][initY] = tiles[initX][initY];
                    tiles[initX][initY] = "GR";
                }
                else{
                    // Fire towards East
                    for(var i=0;i<fireRange;i++){
                        if((initY + i) <= tiles[0].length){
                            tiles[initX][initY+i] = "FR";
                        }
                    }
                }
            }
            else if(move[2] == -2)
            {
                if(move[3] == 0){
                    // Move towards West
                    tiles[initX-stepRange][initY] = tiles[initX][initY];
                    tiles[initX][initY] = "GR";
                }
                else{
                    // Fire towards West
                    for(var i=0;i<fireRange;i++){
                        if((initY - i) >= 0){
                            tiles[initX][initY-i] = "FR";
                        }
                    }
                }
            }

        return tiles;
    };

    return{
        validateMove: validateMove,
        makeMove: makeMove
    }
};
exports.helperFunctions = helperFunctions;
