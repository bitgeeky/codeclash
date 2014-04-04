/*
 * @overview AI Moderating Bot built using HTML5 Canvas, Node.js and Socket.IO
 * @version 0.0.1
 * @source https://github.com/bitgeeky/moderator
 *
 * @author Pankaj Malhotra(:bitgeeky)
 * @email mozpankaj1994@gmail.com
 */

/*
 * Copyright (c) 2014 Pankaj Malhotra
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */

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
        tmp = config.walls;
        for(var i=0;i<tmp.length;i++){
            tiles[tmp[i][0]][tmp[i][1]]="WA";
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
    };
    
    return{
        update: update,
        initialSetup: initialSetup,
        getTiles: getTiles
    }
};
exports.Board = Board;
