class Form {
    constructor () {}

    display(){
        var title = createElement('h2');
        title.html('Race-of cars')
        title.position(130,20);
        var input = createInput ('name');
        input.position(130,100);
        var button = createButton ('play');
        button.position (130,180);
    }

}