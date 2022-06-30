//https://teachablemachine.withgoogle.com/models/PKq8lJJCv/model.json

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PKq8lJJCv/model.json', modelReady);
}

function modelReady(){  
    classifier.classify( gotResults);
}