class Player{

    constructor(){

    }

    getCount(){
     var playercountref= database.ref('playerCount')   
    playercountref.on("value",function(data){
    game_playerCount=data.val();
    })

    }

    updateCount(count){
        database.ref('/').update({
          playerCount :count
        })
    
    }

    update(names){
        var playerindex="player" + playerCount;
        database.ref(playerindex).set({
            name:names
        })
    }
}

