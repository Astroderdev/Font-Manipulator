noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
diffrence = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(450, 400);
    video.position(190, 175)
    canvas = createCanvas(400, 400);
    canvas.position(650, 175);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    background("white");
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }
  
  function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        diffrence = floor(rightWristX - leftWristX);
        
    } 
}
function draw(){
    document.getElementById("font_sizer").innerHTML = "The size of the text = " + diffrence + "px";
    background("white");
    fill("lightblue");
    text("Amresh", noseX, noseY);
    textSize(diffrence);
}