//

prediction_1="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
    
}


classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5VybgMCE7/model.json',modelloaded);
function modelloaded(){
    console.log('model have loaded')
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The First Prediction Is "+prediction_1;
        var utterthis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterthis);
}
function check(){
    img= document.getElementById("capture_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if (error){
     console.error(error)
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML=results[0].label;
        
        prediction_1=results[0].label;
                speak();

        if (results[0].label=="look"){
             document.getElementById("update_emoji1").innerHTML= "&#128071;";
        }
        if (results[0].label=="nice"){
            document.getElementById("update_emoji1").innerHTML= "&#128076;";
             }
        if (results[0].label=="approval"){
             document.getElementById("update_emoji1").innerHTML= "&#128077;";
             } 
        if (results[0].label=="disapproval"){
            document.getElementById("update_emoji1").innerHTML= "&#128078;";
             }
        if (results[0].label=="rock"){
             document.getElementById("update_emoji1").innerHTML= "&#129304;";
             }
        if (results[0].label=="victory"){
             document.getElementById("update_emoji1").innerHTML= "&#9996;";
             } 
            }}