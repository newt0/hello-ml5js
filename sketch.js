// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

// Use p5's preload() function to load our imageClassifier model and our bird image before running the rest of our code
function preload() {
  classifier = ml5.imageClassifier("MobileNet");
  img = loadImage("images/bird.png");
}

// Setup, classify, and display
function setup() {
  // create a canvas to render our image
  createCanvas(400, 400);
  // .classify() function takes two parameters: 1.the image you want to classify 2.a callback function called gotResult
  classifier.classfy(img, gotResult);
  // render the image to the canvas
  image(img, 0, 0);
}

// Define the gotResult() callback function
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.log(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    // create a div that displays the label and the confidence of the content of the image that has been classified
    createDiv(`Label: ${results[0].label}`);
    createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`); // The nf() function is a p5 function that formats our number to a nicer string.
  }
}
