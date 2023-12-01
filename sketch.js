var drawContainer = document.querySelector('.draw-container');
draw(drawContainer,16,16);




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
            drawCube[j].classList.add('hovered');

        lineContainer[i].appendChild(drawCube[j]);
        }
    };


};