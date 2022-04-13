nose=""
function preload(){
nose = loadImage("https://i.postimg.cc/4x362Bn3/nosetick-removebg-preview.png")
}


noseX=0
noseY=0

function setup(){
    canvas=createCanvas(300 , 300)
    canvas.center()
    video = createCapture (VIDEO)
    video.size(300 , 300)
    video.hide()
    posenet=ml5.poseNet(video , modelLoaded)
    posenet.on("pose" , gotPoses)
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results)
        
        noseX=results[0].pose.nose.x-35;
        noseY=results[0].pose.nose.y-35;
        console.log(noseX , noseY)
    
    }
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function draw(){
   image(video , 0 , 0 , 300 , 300)
  
    image(nose , noseX , noseY , 70 , 70)
}
function take_snapshot(){
    save("MyFilterImage.png")
}