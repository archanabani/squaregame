noseX=0;
noseY=0;
difference = 0; 
rightWristX = 0;
leftWristX = 0;

  function setup() {
  cam = createCapture(VIDEO);
  cam.hide();

  c = createCanvas(550, 550);
  c.position(560,150);

  posenet = ml5.poseNet(cam, modelLoaded);
  posenet.on('pose', gotPoses);
}

function draw() {
  background('#969A97');
   image(cam,0,0,550,550);
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
  }
function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}


