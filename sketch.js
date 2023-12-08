var drawContainer = document.querySelector('.draw-container');
draw(drawContainer,32,32);
var click = false;
var page = document.querySelector('html');
page.addEventListener('mousedown', function(){ click=true;});
page.addEventListener('mouseup', function(){ click=false;});


function draw(drawContainer,row,col){
    var lineContainer = [];
    var drawCube = [];
    for(var i = 0; i < row; i++ ){
        lineContainer[i] = document.createElement('div');
        lineContainer[i].classList.add('draw-line-container');
        drawContainer.appendChild(lineContainer[i]);
        for (var j = 0; j < col; j++) {
            drawCube[j] = document.createElement('div');
            drawCube[j].classList.add('draw-cube');
            drawCube[j].classList.add('I' + i + 'J' + j);

            drawCube[j].addEventListener('mouseover', addColor(i,j));
            drawCube[j].addEventListener('click', addColor(i,j));
           

            lineContainer[i].appendChild(drawCube[j]);
        }
    };
    
};
function addColor(i,j){
    return function(e){
        if(e.type === 'mouseover' && click== true || e.type === 'click'){
            var tempCube = document.querySelector('.I' + i + 'J' + j); 
            tempCube.classList.toggle('pressed');
           
        }
        //if(e.type === 'click' ){
            //alert(i + " " + j);           
        //}
       

    }
};
