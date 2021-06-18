class Thunder {
    constructor(x, y) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, options);
        World.add(world, this.body);
        this.image1 = loadImage('images/thunderbolt/1.png');
        this.image2 = loadImage('images/thunderbolt/2.png');
        this.image3 = loadImage('images/thunderbolt/3.png');
        this.image4 = loadImage('images/thunderbolt/4.png');

        
    }

    choose() {
        if(frameCount % 60 === 0) {
            var number = random(1, 1);

            if(number === 1) {
                image(this.image1, this.body.position.x, this.body.position.y);
            }
        }
    }

    display() {
        imageMode(CENTER);
        image(this.image1, this.body.position.x, this.body.position.y);
        //image(this.image2, this.body.position.x, this.body.position.y);
        //image(this.image3, this.body.position.x, this.body.position.y);
        //image(this.image4, this.body.position.x, this.body.position.y);
    }
}