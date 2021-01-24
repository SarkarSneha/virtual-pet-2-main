class Player{
    constructor(){
        
    }
   
    update(name){
    var playerIndex="player"
    database.ref(playerIndex).set({
        name:name
    })    
    }
}