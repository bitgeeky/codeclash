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


var ConfTwo = function(r, c){

    var numPlayers = 5;
    var numAssets = 10;
    
    
    var redTanks = [[1,c/2],[2,c/2-1],[2,c/2],[2,c/2+1],[3,c/2]];
    var redAssets = [[1,2],[1,3],[2,2],[2,3],[3,2],[3,3],[2,1],[2,5],
        [1,4],[2,4],[3,4],
        [1,c-3],[2,c-4],[1,c-4],[3,c-4],[2,c-3],[3,c-3],[2,c-2],[2,c-6],
        [1,c-5],[2,c-5],[3,c-5]];
    
    
    var blueTanks = [[r-4,c/2],[r-3,c/2-1],[r-3,c/2],[r-3,c/2+1],[r-2,c/2]];
    var blueAssets = [[r-4,2],[r-3,2],[r-3,1],[r-3,3],[r-2,2],[r-2,3],
        [r-4,3],[r-2,4],[r-3,4],[r-4,4],[r-3,5],
        [r-4,c-3],[r-3,c-3],[r-3,c-4],[r-3,c-2],[r-2,c-3],
        [r-4,c-4],[r-2,c-4],[r-2,c-5],[r-3,c-5],[r-4,c-5],[r-3,c-6]];
    
    
    var walls = [];
    createWalls();
    function createWalls(){
        for(var i=5;i<r-5;i++){
            walls.push([i,c/4]);
            walls.push([i,c/4+1]);
            walls.push([i,3*c/4]);
            walls.push([i,3*c/4-1]);
        }
        for(var i=(c/4+4);i<(3*c/4-4);i++){
            walls.push([r/2-1,i]);
            walls.push([r/2,i]);
        }
    }
    
    return{
        numPlayers: numPlayers,
        numAssets: numAssets,
        redTanks: redTanks,
        redAssets: redAssets,
        blueTanks: blueTanks,
        blueAssets: blueAssets,
        walls: walls
    }
};

exports.ConfTwo = ConfTwo;
