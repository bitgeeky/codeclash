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
        var stepRange = 1;
        
        var fire = 0;
        var dir = 0;
        for(var i=0;i<tiles.length;i++){
            for(var j=0;j<tiles[0].length;j++){
                if(tiles[i][j] == "BT"){
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
        if(fire == 1)
            break;
                }
        }
            if(fire == 1)
                break;
        }
        if(fire == 1){
            var move = [i,j,dir,1];
            return move;
        }
        found = 0;
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
        var tankI,
            tankJ;
        tankI = i;
        tankJ = j;
        var firstAssetI,
            firstAssetJ;
        var secondAssetI,
            secondAssetJ;
        var assetFound = false;
        // Select Assets to be Fired
        for(var i=0;i<tiles.length;i++){
            for(var j=0;j<tiles[0].length;j++){
                if(tiles[i][j] == "RA"){
                    firstAssetI = i;
                    firstAssetJ = j;
                    assetFound = true;
                    break;
                }
            }
            if(assetFound)
                break;
        }
        assetFound = false;
        for(var i=tiles.length-1;i>=0;i--){
            for(var j=tiles[0].length-1;j>=0;j--){
                if(tiles[i][j] == "RA"){
                    secondAssetI = i;
                    secondAssetJ = j;
                    assetFound = true;
                    break;
                }

            }
            if(assetFound)
                break;
        }
        var firstDistance,
            secondDistance;
        firstDistance = Math.pow(Math.abs(tankI-firstAssetI),2),
                      Math.pow(Math.abs(tankJ-firstAssetJ),2);
        secondDistance = Math.pow(Math.abs(tankI-secondAssetI),2),
                      Math.pow(Math.abs(tankJ-secondAssetJ),2);
        var targetX,
            targetY;
        if(firstDistance <= secondDistance){
            targetX = firstAssetI;
            targetY = firstAssetJ;
        }
        else{
            targetX = secondAssetI;
            targetY = secondAssetJ;
        }
        function issafe(checkX, checkY, dir){
            if(dir == 1){
                for(var i=1;i<=fireRange+1;i++){
                    if(checkX - i >= 0){
                        if(tiles[checkX - i][checkY] == "RT")
                            return false;
                    }
                }
            }
            else if(dir == -1){
                for(var i=1;i<=fireRange+1;i++){
                    if(checkX + i < tiles.length){
                        if(tiles[checkX + i][checkY] == "RT")
                            return false;
                    }
                }
            }
            else if(dir == 2){
                for(var j=1;j<=fireRange+1;j++){
                    if(checkY + j < tiles[0].length){
                        if(tiles[checkX][checkY + j] == "RT")
                            return false;
                    }
                }
            }
            else if(dir == -2){
                for(var j=1;j<=fireRange+1;j++){
                    if(checkY - j >= 0){
                        if(tiles[checkX][checkY - j] == "RT")
                            return false;
                    }
                }
            }
            return true;
        }
        var isRandom = true;
        /*
        if(tankI < targetX){
            if(issafe(tankI,tankJ,-1))
                dir = -1;
            else{
                if(tankJ < targetY){
                    if(issafe(tankI,tankJ,2)){
                        dir = 2;
                    }
                    else 
                        dir = -2;
                }
            }
        }
        else if(tankI > targetX){
            if(issafe(tankI,tankJ,1))
                dir = 1;
            else{
                if(tankJ < targetY){
                    if(issafe(tankI,tankJ,2)){
                        dir = 2;
                    }
                    else 
                        dir = -2;
                }

            }
        }
        */
        var assetI,
            assetJ;
        var aFound = false;
        for(var i=0;i<tiles.length;i++){
            for(var j=0;j<tiles[0].length;j++){
                if(tiles[i][j] == "RA"){
                   assetI = i;
                   assetJ = j;
                   aFound = true;
                   break;
                }
                if(aFound)
                    break;
            }
        }
        if((tankJ < assetJ) && isRandom){
            if(tankJ + stepRange < tiles[0].length){
                if(issafe(tankI,tankJ,2) && (tiles[tankI][tankJ+stepRange] == "GR")){
                    isRandom = false;
                    dir = 2;
                }
            }
        }
        if((tankJ > assetJ) && isRandom){
            if(tankJ - stepRange >= 0){
                if(issafe(tankI,tankJ,-2) && (tiles[tankI][tankJ-stepRange] == "GR")){
                    isRandom = false;
                    dir = -2;
                }
            }
        }
        if((tankI < assetI) && isRandom){
            if(tankI + stepRange < tiles.length){
                if(issafe(tankI,tankJ,-1) && (tiles[tankI + stepRange][tankJ] == "GR")){
                    isRandom = false;
                    dir = -1;
                }
            }
        }
        if((tankI > assetI) && isRandom){
            if(tankI - stepRange >= 0){
                if(issafe(tankI,tankJ,1) && (tiles[tankI - stepRange][tankJ] == "GR")){
                    isRandom = false;
                    dir = 1;
                }
            }
        }
        if(isRandom){
            dirs = [1,-1,2,-2];
            var turn = Math.floor((Math.random()*4)+1) - 1;
            dir = dirs[turn];
            while(!issafe(tankI,tankJ,dir)){
                turn = Math.floor((Math.random()*4)+1) - 1;
                dir = dirs[turn];
            }
        }
        // Fire Wall if blocks Path
        if(dir == 1){
            if(tankI - stepRange >= 0){
                if(tiles[tankI-stepRange][tankJ] == "WA")
                    fire = 1;
                if(tiles[tankI-stepRange][tankJ] == playerTank){
                    tankI-=stepRange;
                }
            }
        }
        else if(dir == -1){
            if(tankI + stepRange < tiles.length){
                if(tiles[tankI + stepRange][tankJ] == "WA")
                    fire = 1;
                if(tiles[tankI + stepRange][tankJ] == playerTank){
                    tankI+=stepRange;
                }
            }
        }
        else if(dir == 2){
            if(tankJ + stepRange < tiles[0].length){
                if(tiles[tankI][tankJ + stepRange] == "WA")
                    fire = 1;
                if(tiles[tankI][tankJ + stepRange] == playerTank){
                    tankJ+=stepRange;
                }
            }
        }
        else if(dir == -2){
            if(tankJ - stepRange >= 0){
                if(tiles[tankI][tankJ - stepRange] == "WA")
                    fire = 1;
                if(tiles[tankI][tankJ - stepRange] == playerTank){
                    tankJ-=stepRange;
                }
            }
        }
        // Check to Fire
        var move = [tankI, tankJ, dir, fire];
        return move;
    }

    return{
        makeMove: makeMove
    }
};
exports.bluePlayer = bluePlayer;
