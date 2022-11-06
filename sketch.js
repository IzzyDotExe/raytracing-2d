/**
 * @author Izzydotexe
 * Main file for 2d ray tracking.
 */

let wall;
let sun;

function setup() {
    
    createCanvas(400, 400);
    walls = [];

    for (let i =0; i < 5; i++) {
        let w = random(width);
        let x = random(width);
        let y = random(height);
        let z = random(height);
        walls[i] = new Wall(w, x, y, z);
    }

    walls.push(new Wall(0, 0, width, 0));
    walls.push(new Wall(width, 0, width, height));
    walls.push(new Wall(width, height, 0, height));
    walls.push(new Wall(0, height, 0, 0));
    
    sun = new Sun();

}

function draw() {

    background(0);

    for (let wall of walls) {
        wall.show();
    }

    sun.show();
    sun.look(walls);

    sun.update(mouseX, mouseY);

}

