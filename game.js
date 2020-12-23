class Game {
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            game_gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if(game_gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }

}