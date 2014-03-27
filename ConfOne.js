var ConfOne = function(r, c){

    var numPlayers = 5;
    var numAssets = 10;
    
    
    var redTanks = [[1,c/2],[2,c/2-1],[2,c/2],[2,c/2+1],[3,c/2]];
    var redAssets = [[1,2],[2,2],[2,3],[2,1],[3,2],
        [1,c-3],[2,c-4],[2,c-3],[2,c-2],[3,c-3]];
    
    
    var blueTanks = [[r-4,c/2],[r-3,c/2-1],[r-3,c/2],[r-3,c/2+1],[r-2,c/2]];
    var blueAssets = [[r-4,2],[r-3,2],[r-3,1],[r-3,3],[r-2,2],
        [r-4,c-3],[r-3,c-3],[r-3,c-4],[r-3,c-2],[r-2,c-3]];
    
    
    var walls = [];
    
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

exports.ConfOne = ConfOne;
