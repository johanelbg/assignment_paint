//----create a canvas-like div----\\
var myCanvas = document.createElement('div');
myCanvas.classList.add("myCanvas");
document.body.appendChild(myCanvas);

//----create my tool-box div---\\
var colors = document.createElement('div');
colors.classList.add("colors");
document.body.appendChild(colors);

//----create buttons to choose the size----\\
var size5 = document.createElement('input');
size5.classList.add('size');
size5.type = 'button'
size5.value = 'Size 5px'
colors.appendChild(size5);

size5.addEventListener('click', function(){
  size = 5;
});

var size10 = document.createElement('input');
size10.classList.add('size');
size10.type = 'button'
size10.value = 'Size 10px'
colors.appendChild(size10);

size10.addEventListener('click', function(){
  size = 10;
});

//----create div of colors---\\
var myColors = ["lightblue", "palegreen", "moccasin", "darkcyan", "pink"];

function generateMyColors() {
  for (var i=0; i < myColors.length ; i++){
    var divColors = document.createElement('div');
    divColors.id = myColors[i];
    divColors.style.backgroundColor = myColors[i];
    divColors.className = "my-colors";
    colors.appendChild(divColors);
  };
};

generateMyColors();

//----make the div clickable--\\
for (var i = 0; i < myColors.length; i++){
  document.getElementById(myColors[i]).addEventListener('click', (event) => {
    var theSelectedColor = event.target;
    theSelectedColor = theSelectedColor.style.backgroundColor;
    drawIt(theSelectedColor);
  });
};

//----detect position of the mouse---\\
function drawIt(theSelectedColor){
  myCanvas.addEventListener(('mousemove'), (event) => {
    if (event.buttons === 1){
      var x = event.clientX;
      var y = event.clientY;
      createNewDiv(x, y, theSelectedColor);
    };
  });
};

//----create new divs when mouse is pressed---\\
function createNewDiv(x, y, theSelectedColor){
  var newDiv = document.createElement('div');
  newDiv.id = ('newDiv')
  newDiv.style.position = 'absolute';
  newDiv.style.left = x +'px';
  newDiv.style.top = y + 'px';
  newDiv.style.backgroundColor = theSelectedColor;
  newDiv.style.height = size + 'px';
  newDiv.style.width = size + 'px';
  newDiv.style.borderRadius = "10px";
  myCanvas.appendChild(newDiv);
};

//----create a reset button----\\
var myButton = document.createElement('input');
myButton.classList.add('resetButton');
myButton.type = 'button'
myButton.value = 'Reset'
colors.appendChild(myButton);

myButton.addEventListener(('click'), function(){
  while (myCanvas.firstChild){
    myCanvas.removeChild(myCanvas.firstChild);
  };
});
