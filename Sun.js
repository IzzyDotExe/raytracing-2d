class Sun {

    constructor() {
        this.pos = createVector(width /2, height /2);
        this.rays = [];

        for (let a = 0; a < 360; a+=10) {
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

        //for (let ray of this.rays) {

            let ray = this.rays[25];
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
                
                let arrivingvector = createVector();
                arrivingvector.x = closest.x - this.pos.x;
                arrivingvector.y = closest.y - this.pos.y;

                let x = this.pos.x
                let y = closestwall.NormEquasion(x, closest);

                let normalvector = createVector();
                normalvector.x = x - closest.x;
                normalvector.y = y - closest.y;
                

                normalvector.normalize();
                arrivingvector.normalize();


                let theta = p5.Vector.dot(arrivingvector, normalvector) / arrivingvector.mag() * normalvector.mag()
                console.log("Angle between intersect and normal: " + degrees(Math.acos(theta)))
                theta = radians(90) + Math.acos(theta)

                console.log("Reflect Angle: " + degrees(theta))
    

                let nRay = new Ray(closest, theta);
                nRay.show()
                stroke(225, 100, 10, 100)
                line(closest.x, closest.y, x, y)
                

            }

        //}

    }

}