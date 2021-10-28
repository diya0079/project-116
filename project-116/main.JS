nosex=0;
nosey=0;

function preload() {
noseimage=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup() {
    canvas =createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    PoseNet =ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotposes);
}

function modelLoaded() {
    comsole.log('poseNet is initialized');
}

function draw() {
image(video, 0, 0, 300, 300);
/*fill(255,0,0);
stroke(255,0,0);
circle(nosex,nosey,30)*/
image(noseimage,nosex-10,nosey-10,30,30);
}


function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
    }
}

function take_snapshot(){
    save('myFilterImage.png');
}