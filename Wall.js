class Wall {

    constructor(x1, y1, x2, y2) {
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
    }

    show() {
        stroke(255);
        line(this.a.x, this.a.y, this.b.x, this.b.y)
    }

    getSlope() {
        return (this.b.y - this.a.y) / (this.b.x - this.a.x)  
    }

    getNormSlope() {
        return -((this.b.x - this.a.x)/(this.b.y - this.a.y))
    }

    NormEquasion(x, intpoint) {

        return this.getNormSlope() * (x - intpoint.x) + intpoint.y;

    }

    NormDeriveEq(y, intpoint) {
        return ((this.getNormSlope() * intpoint.x) - intpoint.y - y) / this.getNormSlope;
    }

}