/*****************************
** GAME BOARD
*****************************/
var Board = function(rows, columns){
    
    function Create2DArray(r,c) {
        var arr = Array(r);
        for (var i=0;i<r;i++) {
            arr[i] = Array(c);
        }
        return arr;
    }
    
    var cols = columns;
    var rows = rows;
    var tiles;


    var initialSetup = function(config){
        tiles = Create2DArray(rows, cols);
        for(var i=0;i<rows;i++){
            for(var j=0;j<cols;j++){
               tiles[i][j] = "GR"; 
            }
        }
        var tmp = config.redTanks;
        for(var i=0;i<tmp.length;i++){
            tiles[tmp[i][0]][tmp[i][1]]="RT";
        }
        tmp = config.redAssets;
        for(var i=0;i<tmp.length;i++){
            tiles[tmp[i][0]][tmp[i][1]]="RA";
        }
        tmp = config.blueTanks;
        for(var i=0;i<tmp.length;i++){
            tiles[tmp[i][0]][tmp[i][1]]="BT";
        }
        tmp = config.blueAssets;
        for(var i=0;i<tmp.length;i++){
            tiles[tmp[i][0]][tmp[i][1]]="BA";
        }
    };

    var update = function(arr){
        for(var i=0;i<rows;i++){
            for(var j=0;j<cols;j++){
               tiles[i][j] = arr[i][j]; 
            }
        }
    };
    
    var getTiles = function(){
        return tiles;
    }
    
    return{
        update: update,
        initialSetup: initialSetup,
        getTiles: getTiles
    }
};
exports.Board = Board;
