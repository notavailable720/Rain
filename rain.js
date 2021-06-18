class Rain {
    constructor(x, y) {
        this.rain = Bodies.circle(x, y, 5);
        World.add(world, this.rain);
        this.radius = 5;
    }

    display() {
        ellipseMode(CENTER);
        fill('white');
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
    }
}