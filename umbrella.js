class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 70, options);
        World.add(world, this.body);
        this.body.position.y = 400;
        this.image = loadImage('images/Walking Frame/walking_1.png');
    }
    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 300, 300);
    }
}