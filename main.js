Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function captureImage()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BhcW1ZYR5/model.json',modelLoaded);
function modelLoaded()
{
    console.log('model is loaded');
}
function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img, identifyImage);
}

function identifyImage(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
      console.log(results);
      document.getElementById("result_object").innerHTML= results[0].label;
      document.getElementById("result_accuracy").innerHTML= results[0].confidence.toFixed(3);
    }
}

