noseX=0;
noseY=0;
diffrence = 0;
rightWristX = 0;
LeftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Model Is Loaded')
}
function draw(){
    background('#D3D3D3')
    fill('#ff0000');
    stroke('#000000');
    square(noseX, noseY, difference);
    document.getElementById('square_side').innerHTML = "Width and Height of the Square will be =" + difference+"px";
}
function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    difference =  floor(leftWristX - rightWristX);
    }

}