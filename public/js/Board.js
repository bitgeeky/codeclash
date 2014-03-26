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


    var initialSetup = function(){
        tiles = Create2DArray(rows, cols);
        for(var i=0;i<rows;i++){
            for(var j=0;j<cols;j++){
               tiles[i][j] = "GR"; 
            }
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
