class Sun {

    constructor() {
        this.pos = createVector(width /2, height /2);
        this.rays = [];

        for (let a = 0; a < 360; a+=.5) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    update(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    }

    show() {

        fill(225);
        ellipse(this.pos.x, this.pos.y, 5);

        for (let ray of this.rays) {
            //ray.show();
        }

    }

    look(walls) {

        for (let ray of this.rays) {

            //let ray = this.rays[25];
            let record = Infinity;
            let closest = null;
            let closestwall = null;

            for (let wall of walls) {

                const pt = ray.cast(wall);

                if (pt) {
                    const d = p5.Vector.dist(this.pos, pt);
                    if (d < record) {
                        record = d;
                        closest = pt;
                        closestwall = wall;
                    }
                }
            }

            if (closest) {
                
                stroke(225, 100)
                line(this.pos.x, this.pos.y, closest.x, closest.y)

            }

        }

    }

}