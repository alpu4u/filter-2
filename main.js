noseX = 0
noseY = 0

function preload() {
clownsarefunny = loadImage('mustache.jpg')
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()

    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()

    poseNet =ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("Model is Initialized");
}

function draw() {
image(video, 0, 0, 300, 300)
/*fill('green')
stroke('red')
circle(noseX, noseY, 20)*/
image(clownsarefunny, noseX - 10, noseY - 10, 30, 30)
}

function take_snapshot() {
    save("Abbythedog.png")
}

function gotPoses(Abby) {
    if (Abby.length > 0 )
    {
        console.log(Abby);
        noseX = Abby[0].pose.nose.x
        noseY = Abby[0].pose.nose.y
        console.log("Nose X is =" + noseX);
        console.log("Nose Y is =" + noseY);
    }
}