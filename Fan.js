Status = "";
Fan_image = "";
object = [];

function preload() {
    Fan_image = loadImage("Fan.jpg")
}

function setup() {
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    object_Detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(Fan_image, gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(Fan_image, 0, 0, 640, 350);
    
    if(Status != "")
    {
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("fc0303");
            percent = floor(Objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x - 800, objects[i].y - 175);
            noFill();
            stroke("fc0303");
            rect(objects[i].x - 800, objects[i].y - 520, object[i].width - 910, objects[i].height - 2640);
        }
    }
}