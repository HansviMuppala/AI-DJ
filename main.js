song_one = "";
song_two = "";
song_status = "";

leftwristX = 0;
leftwristY = 0;

rightwristX = 0;
rightwristY = 0;

scoreLeftWrist = 0;

function preload(){
    song_one = loadSound("music.mp3");
    song_two = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
    
    fill("FF0000");
    stroke("FF0000");
    
    song_status = song_one.isPlaying();

    if(scoreLeftWrist > 0.2){
        circle(leftwristX, leftwristY, 30);
        song_two.stop()
    }

    if(song_status = false){
        song_one.play();
        document.getElementById("song").innerHTML = "Song Title = " + song_one;
    }
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);

        scoreLeftWrist = results[0].pose.keypoints[9].score;

        leftwristX = results[0].pose.leftwrist.x;
        leftwristY = results[0].pose.leftwrist.y;
        
        rightwristX = results[0].pose.rightwrist.x;
        rightwristY = results[0].pose.rightwrist.y;
    }
}