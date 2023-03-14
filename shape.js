function Shape({
    r,
    x,
    y,
    c
}) {
    this.r = r;
    this.x = x;
    this.y = y;
    this.colors = c;
    this.thetas = c.map((x) => random(0, 2 * PI)).sort();

    this.draw = function() {
        for (let i = 0; i < this.colors.length; i++) {
            fill(this.colors[i]);

            arc(this.x, this.y, this.r, this.r, this.thetas[i], this.thetas[(i + 1) % this.thetas.length], PIE);

        }
    }
}