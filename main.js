lips=""
function preload(){
lips = loadImage("https://i.postimg.cc/4x362Bn3/lipstick-removebg-preview.png")
}


lipsX=0
lipsY=0

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
        
        lipsX=results[0].pose.lips.x-35;
        lipsY=results[0].pose.lips.y-35;
        console.log(lipsX , lipsY)
    
    }
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function draw(){
   image(video , 0 , 0 , 300 , 300)
  
    image(lips , lipsX , lipsY , 70 , 70)
}
function take_snapshot(){
    save("MyFilterImage.png")
}