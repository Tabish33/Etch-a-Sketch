function createBoard(){   // Setting up a 15x15 board

    let flex_container = document.querySelector('.flex-container')

    for(let i =0 ; i< squares; i++){
      let box = document.createElement('div');
      box.classList.add('box');
      flex_container.appendChild(box);
    }

    let flex_box = document.querySelectorAll('.box');
    box_len = 33.33;

    flex_box.forEach(function(b){
      b.setAttribute('style',`height:${box_len}px; width:${box_len}px;`);
    })

}

function changeResolution(){

    let flex_container = document.querySelector('.flex-container')

    while(flex_container.hasChildNodes()){
      flex_container.removeChild(flex_container.lastChild);
    }

    let squares_on_side = 0;
    while ((squares_on_side<1) || (squares_on_side >128)){
      squares_on_side = prompt('Enter a number between 1 and 128 (pixels per side)');
    }

    pixel_per_side = squares_on_side ;   // for reset function

    let squares = (squares_on_side* squares_on_side);

    for(let i =0 ; i< squares; i++){
      let box = document.createElement('div');
      box.classList.add('box');
      flex_container.appendChild(box);
    }

    let flex_box = document.querySelectorAll('.box');
    box_len = 500/squares_on_side;

    flex_box.forEach(function(b){
      b.setAttribute('style',`height:${box_len}px; width:${box_len}px;`);
    })
}

function resolution(){

    let res = document.querySelector('.resolution');

    res.onclick = function(){
      console.log('click');
      changeResolution();
      redBox();
    };
}

function eraser(){

    let eraser_button = document.querySelector('.eraser')
    eraser_button.onclick = function(){whiteBox();};
}

function redBox(){

    let box = document.querySelectorAll('.box');

    box.forEach(function(b){
      b.onmouseover = function(){
        b.setAttribute('style',`background-color:red;
                height:${box_len}px; width:${box_len}px;`);
        }
      })
}

function whiteBox(){

  let box = document.querySelectorAll('.box');

  box.forEach(function(b){
    b.onmouseover = function(){
      b.setAttribute('style',`background-color:white;
              height:${box_len}px; width:${box_len}px;`);
      }
    })

    console.log('running');
}

function blueBox(){

    let box = document.querySelectorAll('.box');

    box.forEach(function(b){
      b.onmouseover = function(){
        b.setAttribute('style',`background-color:blue;
                height:${box_len}px; width:${box_len}px;`);
        }
      })
}

function greenBox(){

    let box = document.querySelectorAll('.box');

    box.forEach(function(b){
      b.onmouseover = function(){
        b.setAttribute('style',`background-color:green;
              height:${box_len}px; width:${box_len}px;`);
        }
      })
}

function blackBox(){

  let box = document.querySelectorAll('.box');

  box.forEach(function(b){
    b.onmouseover = function(){
      b.setAttribute('style',`background-color:black;
            height:${box_len}px; width:${box_len}px;`);
      }
    })
}

function rainbowBox(){


  let box = document.querySelectorAll('.box');

  box.forEach(function(B){
    B.onmouseover = function(){

      let r = getRandomInt(255);
      let g = getRandomInt(255);
      let b = getRandomInt(255);

      B.setAttribute('style',`background-color:rgb(${r},${g},${b});
            height:${box_len}px; width:${box_len}px;`);
      }
    })
}

function redButton(){

  let red_btn = document.querySelector('.red');

  red_btn.onclick = function(){redBox();}
}

function blueButton(){

  let blue_btn = document.querySelector('.blue');

  blue_btn.onclick = function(){blueBox();}
}

function greenButton(){

  let green_btn = document.querySelector('.green');

  green_btn.onclick = function(){greenBox();}
}

function rainbowButton(){

  let rainbow_btn = document.querySelector('.rainbow');

  rainbow_btn.onclick = function(){rainbowBox();}
}

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

function reset(){

  let flex_container = document.querySelector('.flex-container')

  while(flex_container.hasChildNodes()){
    flex_container.removeChild(flex_container.lastChild);
  }

  let squares = (pixel_per_side* pixel_per_side);
  console.log(pixel_per_side);

  for(let i =0 ; i< squares; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    flex_container.appendChild(box);
  }

  let flex_box = document.querySelectorAll('.box');
  box_len = 500/pixel_per_side;

  flex_box.forEach(function(b){
    b.setAttribute('style',`height:${box_len}px; width:${box_len}px;`);
  })
  blackBox();
}

function resetButton(){

  let reset_btn = document.querySelector('.reset');
  reset_btn.onclick = function(){ reset();};
}

let pixel_per_side = 15;
let box_len;
let squares = 225;

createBoard();
resolution();
blackBox();
eraser();
redButton();
blueButton();
greenButton();
rainbowButton();
resetButton();
