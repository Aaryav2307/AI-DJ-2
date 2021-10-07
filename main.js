song = "";
function preload(){
    song = loadSound("dream.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image = (video, 0, 0, 600, 500);    
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function surprise(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}