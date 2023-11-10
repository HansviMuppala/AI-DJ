song_one = "";
song_two = "";

function preload(){
    song_one = loadSound("music.mp3");
    song_two = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}