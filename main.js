prediction_1 = "";
prediction_2 = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpeg",
    jpeg_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='capture_image'src='" + data_uri + "' >";
    });

}
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json", modelLoaded);

function modelLoaded() {
    console.log("modelLoaded");

}

function speak() {

    synth = window.SpeechSynthesis;
    speak_data1 = "the first prediction is" + prediction_1;
    speak_data2 = "the second prediction is" + prediction_2;
    utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}