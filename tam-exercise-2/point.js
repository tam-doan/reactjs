class Point {

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    plus (p) {
        return new Point(p.x + this.x, p.y + this.y);
    }
}

console.log(new Point(1, 2).plus(new Point(2, 1)));