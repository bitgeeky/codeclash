/*****************************
** GAME BOARD
*****************************/
var Board = function(rows, columns){
    
    var cols = columns;
    var rows = rows;
    var tiles = Create2DArray(rows, cols);

    function Create2DArray(r,c) {
        var arr = Array(r);
        for (var i=0;i<r;i++) {
            arr[i] = Array(c);
        }
        return arr;
    }

//    var initialize = function(){
         
//    };

    var update = function(arr){
        for(var i=0;i<rows;i++){
            for(var j=0;j<cols;j++){
               tiles[i][j] = arr[i][j]; 
            }
        }
    };

    return{
        update: update
        //initialize: initialize
    }
};
exports.Board = Board;
