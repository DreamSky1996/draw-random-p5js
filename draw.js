function genStaticTokenData() {
  return {
    hash: "0xe8f2cd0f000cd2881f7091e8f14badf6388ea570fb1b00f553329505d647dda7",
    tokenId: "123000041",
  };
}

function genTokenData(projectNum) {
  let data = {};
  let hash = "0x";
  for (var i = 0; i < 64; i++) {
    hash += Math.floor(Math.random() * 16).toString(16);
  }
  data.hash = hash;
  data.tokenId = (
    projectNum * 1000000 +
    Math.floor(Math.random() * 1000)
  ).toString();
  return data;
}

let randomHelper;

let shapes = [];

let tokenData = genStaticTokenData();

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function hashGenerate() {
  tokenData = genTokenData(123);
  document.getElementById("hash").value = tokenData.hash;
}

function setShapes() {
  let bgColor = "#FFFFFF";
  let hash = document.getElementById("hash").value;
  randomHelper = new Random({'hash': hash});
  let totalImages = randomHelper.random_int(25, 30);

  const hasBackground = randomHelper.random_int(1, 5) === 1;
  if (hasBackground) {
    let bgColorIndex = randomHelper.random_int(0, bgColors.length - 1);
    bgColor = bgColors[bgColorIndex];
    totalImages -= 2;
  }
  background(bgColor);
  let iterations = 0;
  while (iterations < totalImages) {
    let outlineColorIndex = randomHelper.random_int(
      0,
      outlineColors.length - 1
    );
    let fillColorIndex = randomHelper.random_int(0, fillColors.length - 1);
    let hasfill = randomHelper.random_int(1, 5) > 1;
    let qty = randomHelper.random_int(1, 3);
    for (let i = 0; i < qty; i++) {
      const shape = new Shape(
        fillColors[fillColorIndex],
        outlineColors[outlineColorIndex],
        hasfill
      );
      shapes.push(shape);
    }
    iterations++;
  }
}

function draw() {
  hashGenerate();
  setShapes();
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].draw();
  }
  shapes = [];
}

function drawImage() {
  setShapes();
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].draw();
  }
  shapes = [];
}
