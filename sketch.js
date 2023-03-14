let circles = [];
let colors;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB, 255);

    colors = [
        "#390099", "#9e0059", "#ff0054", "#ff5400", "#ffbd00"
    ]

    noStroke();
}

function spawnCircle() {
    let x = random(width);
    let y = random(height);
    let r = maxSize(x, y) * random(0.25, 0.95);
    if (r > 5) {
        circles.push(new Shape({
            x: x,
            y: y,
            r: r,
            c: [random(colors)].concat(colors.filter((_) => random([true, false])))

        }));
    }
}

function maxSize(x, y) {
    let m = width / 5;
    for (let i = 0; i < circles.length; i++) {
        let c = circles[i];
        let distance = dist(x, y, c.x, c.y);
        m = min([distance - c.r / 2, m]);
    }
    return m * 2;
}

function draw() {
    background(240);

    for (let i = 0; i < circles.length; i++) {
        let c = circles[i];
        c.draw();
    }

    spawnCircle();
}