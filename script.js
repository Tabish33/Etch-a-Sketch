let box_len;

createFlexBox();
redBox();

function createFlexBox(){

  let flex_container = document.querySelector('.flex-container')

  let squares_on_side = 0;
  while ((squares_on_side<1) || (squares_on_side >128)){
     squares_on_side = prompt('Enter a number between 1 and 128 (pixels per side)');
  }
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

function changeResolution(){

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
