var stepTime = 100; //ms
var checkRadius = 1;
var neighborsToLive = [2,3];
var neighborsToDie = [0,1,4,5,6,7,8];
var neighborsToComeAlive = [3];

//Config Settings.
var gliderGunCode = '{"2.24":{"x":2,"y":24,"state":1,"nextState":1,"wasChecked":false},"1.23":{"x":1,"y":23,"state":0,"nextState":0,"wasChecked":false},"1.24":{"x":1,"y":24,"state":0,"nextState":0,"wasChecked":false},"1.25":{"x":1,"y":25,"state":0,"nextState":0,"wasChecked":false},"2.23":{"x":2,"y":23,"state":0,"nextState":0,"wasChecked":false},"2.25":{"x":2,"y":25,"state":1,"nextState":1,"wasChecked":false},"3.23":{"x":3,"y":23,"state":0,"nextState":0,"wasChecked":false},"3.24":{"x":3,"y":24,"state":1,"nextState":1,"wasChecked":false},"3.25":{"x":3,"y":25,"state":1,"nextState":1,"wasChecked":false},"0.22":{"x":0,"y":22,"state":0,"nextState":0,"wasChecked":false},"0.23":{"x":0,"y":23,"state":0,"nextState":0,"wasChecked":false},"0.24":{"x":0,"y":24,"state":0,"nextState":0,"wasChecked":false},"1.22":{"x":1,"y":22,"state":0,"nextState":0,"wasChecked":false},"2.22":{"x":2,"y":22,"state":0,"nextState":0,"wasChecked":false},"0.25":{"x":0,"y":25,"state":0,"nextState":0,"wasChecked":false},"0.26":{"x":0,"y":26,"state":0,"nextState":0,"wasChecked":false},"1.26":{"x":1,"y":26,"state":0,"nextState":0,"wasChecked":false},"2.26":{"x":2,"y":26,"state":0,"nextState":0,"wasChecked":false},"3.22":{"x":3,"y":22,"state":0,"nextState":0,"wasChecked":false},"3.26":{"x":3,"y":26,"state":0,"nextState":0,"wasChecked":false},"4.22":{"x":4,"y":22,"state":0,"nextState":0,"wasChecked":false},"4.23":{"x":4,"y":23,"state":0,"nextState":0,"wasChecked":false},"4.24":{"x":4,"y":24,"state":0,"nextState":0,"wasChecked":false},"4.25":{"x":4,"y":25,"state":2,"nextState":2,"wasChecked":false},"4.26":{"x":4,"y":26,"state":0,"nextState":0,"wasChecked":false},"0.27":{"x":0,"y":27,"state":0,"nextState":0,"wasChecked":false},"1.27":{"x":1,"y":27,"state":0,"nextState":0,"wasChecked":false},"2.27":{"x":2,"y":27,"state":0,"nextState":0,"wasChecked":false},"3.27":{"x":3,"y":27,"state":0,"nextState":0,"wasChecked":false},"4.27":{"x":4,"y":27,"state":0,"nextState":0,"wasChecked":false},"5.23":{"x":5,"y":23,"state":0,"nextState":0,"wasChecked":false},"5.24":{"x":5,"y":24,"state":0,"nextState":0,"wasChecked":false},"5.25":{"x":5,"y":25,"state":2,"nextState":2,"wasChecked":false},"5.26":{"x":5,"y":26,"state":2,"nextState":2,"wasChecked":false},"5.27":{"x":5,"y":27,"state":0,"nextState":0,"wasChecked":false},"5.22":{"x":5,"y":22,"state":0,"nextState":0,"wasChecked":false},"6.25":{"x":6,"y":25,"state":2,"nextState":2,"wasChecked":false},"7.25":{"x":7,"y":25,"state":2,"nextState":2,"wasChecked":false},"8.25":{"x":8,"y":25,"state":2,"nextState":2,"wasChecked":false},"9.25":{"x":9,"y":25,"state":2,"nextState":2,"wasChecked":false},"10.25":{"x":10,"y":25,"state":2,"nextState":2,"wasChecked":false},"11.25":{"x":11,"y":25,"state":2,"nextState":2,"wasChecked":false},"12.25":{"x":12,"y":25,"state":1,"nextState":1,"wasChecked":false},"12.24":{"x":12,"y":24,"state":1,"nextState":1,"wasChecked":false},"12.26":{"x":12,"y":26,"state":1,"nextState":1,"wasChecked":false},"13.27":{"x":13,"y":27,"state":1,"nextState":1,"wasChecked":false},"13.23":{"x":13,"y":23,"state":1,"nextState":1,"wasChecked":false},"14.22":{"x":14,"y":22,"state":1,"nextState":1,"wasChecked":false},"15.22":{"x":15,"y":22,"state":1,"nextState":1,"wasChecked":false},"14.28":{"x":14,"y":28,"state":1,"nextState":1,"wasChecked":false},"15.28":{"x":15,"y":28,"state":1,"nextState":1,"wasChecked":false},"17.25":{"x":17,"y":25,"state":2,"nextState":2,"wasChecked":false},"18.24":{"x":18,"y":24,"state":1,"nextState":1,"wasChecked":false},"18.23":{"x":18,"y":23,"state":2,"nextState":2,"wasChecked":false},"18.26":{"x":18,"y":26,"state":1,"nextState":1,"wasChecked":false},"19.25":{"x":19,"y":25,"state":1,"nextState":1,"wasChecked":false},"19.24":{"x":19,"y":24,"state":2,"nextState":2,"wasChecked":false},"19.26":{"x":19,"y":26,"state":2,"nextState":2,"wasChecked":false},"18.27":{"x":18,"y":27,"state":2,"nextState":2,"wasChecked":false},"20.25":{"x":20,"y":25,"state":2,"nextState":2,"wasChecked":false},"22.24":{"x":22,"y":24,"state":1,"nextState":1,"wasChecked":false},"23.24":{"x":23,"y":24,"state":1,"nextState":1,"wasChecked":false},"23.23":{"x":23,"y":23,"state":1,"nextState":1,"wasChecked":false},"23.22":{"x":23,"y":22,"state":1,"nextState":1,"wasChecked":false},"24.22":{"x":24,"y":22,"state":2,"nextState":2,"wasChecked":false},"24.23":{"x":24,"y":23,"state":2,"nextState":2,"wasChecked":false},"24.24":{"x":24,"y":24,"state":2,"nextState":2,"wasChecked":false},"25.25":{"x":25,"y":25,"state":2,"nextState":2,"wasChecked":false},"25.21":{"x":25,"y":21,"state":2,"nextState":2,"wasChecked":false},"27.25":{"x":27,"y":25,"state":2,"nextState":2,"wasChecked":false},"27.26":{"x":27,"y":26,"state":2,"nextState":2,"wasChecked":false},"27.21":{"x":27,"y":21,"state":2,"nextState":2,"wasChecked":false},"27.20":{"x":27,"y":20,"state":2,"nextState":2,"wasChecked":false},"28.21":{"x":28,"y":21,"state":2,"nextState":2,"wasChecked":false},"29.21":{"x":29,"y":21,"state":2,"nextState":2,"wasChecked":false},"30.21":{"x":30,"y":21,"state":2,"nextState":2,"wasChecked":false},"31.21":{"x":31,"y":21,"state":2,"nextState":2,"wasChecked":false},"32.21":{"x":32,"y":21,"state":2,"nextState":2,"wasChecked":false},"33.21":{"x":33,"y":21,"state":2,"nextState":2,"wasChecked":false},"34.21":{"x":34,"y":21,"state":2,"nextState":2,"wasChecked":false},"35.21":{"x":35,"y":21,"state":2,"nextState":2,"wasChecked":false},"36.21":{"x":36,"y":21,"state":2,"nextState":2,"wasChecked":false},"37.22":{"x":37,"y":22,"state":1,"nextState":1,"wasChecked":false},"38.22":{"x":38,"y":22,"state":2,"nextState":2,"wasChecked":false},"37.23":{"x":37,"y":23,"state":1,"nextState":1,"wasChecked":false},"38.23":{"x":38,"y":23,"state":2,"nextState":2,"wasChecked":false},"19.27":{"x":19,"y":27,"state":2,"nextState":2,"wasChecked":false},"16.25":{"x":16,"y":25,"state":1,"nextState":1,"wasChecked":false},"17.27":{"x":17,"y":27,"state":1,"nextState":1,"wasChecked":false},"17.26":{"x":17,"y":26,"state":2,"nextState":2,"wasChecked":false},"18.25":{"x":18,"y":25,"state":1,"nextState":1,"wasChecked":false},"17.23":{"x":17,"y":23,"state":1,"nextState":1,"wasChecked":false},"22.22":{"x":22,"y":22,"state":1,"nextState":1,"wasChecked":false},"22.23":{"x":22,"y":23,"state":1,"nextState":1,"wasChecked":false},"24.21":{"x":24,"y":21,"state":1,"nextState":1,"wasChecked":false},"24.25":{"x":24,"y":25,"state":1,"nextState":1,"wasChecked":false},"26.25":{"x":26,"y":25,"state":1,"nextState":1,"wasChecked":false},"26.26":{"x":26,"y":26,"state":1,"nextState":1,"wasChecked":false},"26.21":{"x":26,"y":21,"state":1,"nextState":1,"wasChecked":false},"26.20":{"x":26,"y":20,"state":1,"nextState":1,"wasChecked":false},"36.22":{"x":36,"y":22,"state":1,"nextState":1,"wasChecked":false},"36.23":{"x":36,"y":23,"state":1,"nextState":1,"wasChecked":false}}';
var infiniteSeed = '{"32.38":{"x":32,"y":38,"state":1,"nextState":1,"wasChecked":false},"31.37":{"x":31,"y":37,"state":0,"nextState":0,"wasChecked":false},"31.38":{"x":31,"y":38,"state":0,"nextState":0,"wasChecked":false},"31.39":{"x":31,"y":39,"state":0,"nextState":0,"wasChecked":false},"32.37":{"x":32,"y":37,"state":0,"nextState":0,"wasChecked":false},"32.39":{"x":32,"y":39,"state":0,"nextState":0,"wasChecked":false},"33.37":{"x":33,"y":37,"state":1,"nextState":1,"wasChecked":false},"33.38":{"x":33,"y":38,"state":0,"nextState":0,"wasChecked":false},"33.39":{"x":33,"y":39,"state":0,"nextState":0,"wasChecked":false},"30.36":{"x":30,"y":36,"state":0,"nextState":0,"wasChecked":false},"30.37":{"x":30,"y":37,"state":0,"nextState":0,"wasChecked":false},"30.38":{"x":30,"y":38,"state":0,"nextState":0,"wasChecked":false},"31.36":{"x":31,"y":36,"state":0,"nextState":0,"wasChecked":false},"32.36":{"x":32,"y":36,"state":0,"nextState":0,"wasChecked":false},"30.39":{"x":30,"y":39,"state":0,"nextState":0,"wasChecked":false},"30.40":{"x":30,"y":40,"state":0,"nextState":0,"wasChecked":false},"31.40":{"x":31,"y":40,"state":0,"nextState":0,"wasChecked":false},"32.40":{"x":32,"y":40,"state":0,"nextState":0,"wasChecked":false},"33.36":{"x":33,"y":36,"state":0,"nextState":0,"wasChecked":false},"33.40":{"x":33,"y":40,"state":0,"nextState":0,"wasChecked":false},"34.36":{"x":34,"y":36,"state":0,"nextState":0,"wasChecked":false},"34.37":{"x":34,"y":37,"state":1,"nextState":1,"wasChecked":false},"34.38":{"x":34,"y":38,"state":1,"nextState":1,"wasChecked":false},"34.39":{"x":34,"y":39,"state":0,"nextState":0,"wasChecked":false},"34.40":{"x":34,"y":40,"state":0,"nextState":0,"wasChecked":false},"35.36":{"x":35,"y":36,"state":1,"nextState":1,"wasChecked":false},"36.36":{"x":36,"y":36,"state":1,"nextState":1,"wasChecked":false},"36.37":{"x":36,"y":37,"state":1,"nextState":1,"wasChecked":false},"36.38":{"x":36,"y":38,"state":1,"nextState":1,"wasChecked":false},"36.34":{"x":36,"y":34,"state":1,"nextState":1,"wasChecked":false},"34.34":{"x":34,"y":34,"state":1,"nextState":1,"wasChecked":false},"33.34":{"x":33,"y":34,"state":1,"nextState":1,"wasChecked":false},"32.34":{"x":32,"y":34,"state":1,"nextState":1,"wasChecked":false},"32.35":{"x":32,"y":35,"state":1,"nextState":1,"wasChecked":false}}';


view = new View(15);
var block = 0;
var isPaused = false;

view.drawView();
setTimeout(stepModel, stepTime);

function testFn(){
    var row = block % view.h;
    var col = Math.floor(block / view.h);
    view.resetCells();
    view.addCell(row, col);
    view.drawView();
    if(block < view.h*view.w){
        block++;
        setTimeout(testFn, 10);
    }
}
function pause(){
    isPaused = !isPaused;
    if(!isPaused){
        stepModel();
    }
}
function randomize(){
    view.resetCells();
    view.randomFill();
    view.drawView();
}
function loadGlider(){
    view.resetCells();
    view.activeCells = JSON.parse(gliderGunCode);
    view.drawView();
}
function loadSeed(){
    view.resetCells();
    view.activeCells = JSON.parse(infiniteSeed);
    view.drawView();
}

function stepModel(){
    if(!isPaused){
        view.stepRoom();
        setTimeout(stepModel, stepTime);
    }
}
function setZoom(){
    var zoom = $("#zoom").val();
    var activeCellCopy = view.activeCells;
    view = {};
    view = new View(zoom);
    view.activeCells = activeCellCopy;
    view.drawView();
}
function scroll(topleft, bottomright){
    view.renderAgent.setWindow(topleft, bottomright);
    view.drawView();
}
function bumpLeft(){
    isPaused = true;
    var topleft = view.renderAgent.topleft;
    var bottomright = view.renderAgent.bottomright;
    var newTL = [topleft[0] - 5, topleft[1]];
    var newBR = [bottomright[0] -5, bottomright[1]];
    scroll(newTL, newBR);
    isPaused = false;
    view.drawView();
}
function bumpRight(){
    isPaused = true;
    var topleft = view.renderAgent.topleft;
    var bottomright = view.renderAgent.bottomright;
    var newTL = [topleft[0] + 5, topleft[1]];
    var newBR = [bottomright[0] +5, bottomright[1]];
    scroll(newTL, newBR);
    isPaused = false;
    view.drawView();
}
function bumpDown(){
    isPaused = true;
    var topleft = view.renderAgent.topleft;
    var bottomright = view.renderAgent.bottomright;
    var newTL = [topleft[0] , topleft[1]-5];
    var newBR = [bottomright[0] , bottomright[1]-5];
    scroll(newTL, newBR);
    isPaused = false;
    view.drawView();
}
function bumpUp(){
    isPaused = true;
    var topleft = view.renderAgent.topleft;
    var bottomright = view.renderAgent.bottomright;
    var newTL = [topleft[0] , topleft[1]+5];
    var newBR = [bottomright[0] , bottomright[1] +5];
    scroll(newTL, newBR);
    isPaused = false;
    view.drawView();
}

function ActiveCell(x, y, state){
    this.x = x;
    this.y = y;
    this.state = state;
    this.nextState = state;
    //see if the cell has been checked for life/death yet.
    this.wasChecked = false;
}

function View(cellSize){
    this.cellSize = cellSize; //width in pixels
    var bottomMargin = 100; //leave 100 pizxels on the ground
    //Get the page settings
    var pageWidth = $(window).width();
    var pageHeight = $(window).height();
    //Figure out how many cells to show on the page
    this.w = Math.floor((pageWidth - 20) / this.cellSize); //
    this.h = Math.floor((pageHeight - bottomMargin) / this.cellSize);
    this.activeCells = {};
    this.updatedCells = {};

    this.renderAgent = new RenderAgent(this.h, this.w, cellSize);
    
    this.getCells = function(){
        return this.activeCells;
    }
    this.drawView = function(){
        this.renderAgent.renderCells(this.activeCells);
    }
    this.updateView = function(){

        //tick the generation
        this.flushStates();
        //console.log(this.updatedCells);
        this.renderAgent.renderCells(this.updatedCells);
        //reset the updated list;
        this.updatedCells = {};
    }
    this.flushStates = function(){
        var keys = Object.keys(this.activeCells);
        for(var i=0;i<keys.length;i++){
            this.activeCells[keys[i]].state = this.activeCells[keys[i]].nextState;
            this.activeCells[keys[i]].wasChecked = false;
        }
    }
    this.tap = function(x, y, canvas){
        var row = Math.floor(x/ this.cellSize);
        var col = Math.floor(y/ this.cellSize);
        var key = row + "." + col
        if (this.activeCells[key]){
            if (this.activeCells[key].state == 1){
                this.activeCells[key].nextState = 2;
            } else {
                this.activeCells[key].nextState = 1;
            }
            this.updatedCells[key] = this.activeCells[key];
        } else {
            this.updatedCells[key] = this.addCell(row, col, 1);
        }
        this.updateView();
    }
    this.addCell = function(x, y, state){
        var newCell = new ActiveCell(x, y, state);
        key = x.toString() + "." + y.toString();
        this.activeCells[key] = newCell;
        return newCell;
        //set updatedCell too?
    }
    this.resetCells = function(){
        this.activeCells = {};
        this.renderAgent.clearAll();
    }
    this.randomFill = function(){
        for(var row=0;row<this.w;row++){
            for( var col=0;col<this.h;col++){
                if(Math.random() > .8){
                    this.addCell(row, col, 1);
                }
                //if(col==4 && row == 4) console.log(this.getNeighbors(this.activeCells[row +"." + col]));
            }
        }
    }
    this.stepRoom = function(){
        var keys = Object.keys(this.activeCells);
        for(var i=0;i<keys.length;i++){
            var cell = this.activeCells[keys[i]];
            
            if(cell.state == 1){ //if the cell is alive, check it for changes
                var n = this.getNeighbors(cell);
                var narr = n.neighbors;
                var count = n.count;
                //console.log(n);
                //Decide if the current cell lives or dies.
                if(neighborsToDie.indexOf(count) > -1){
                    //I die.  Change state, add to changed array.
                    cell.nextState = 2;
                    this.updatedCells[keys[i]] = cell;
                }

                for(var j=0;j<narr.length;j++){

                    if(!narr[j].wasChecked){
                        //now run logic for every neighbor
                        var n2 = this.getNeighbors(narr[j]);
                        //var narr2 = n2.neighbors;
                        var count2 = n2.count;

                        if(neighborsToComeAlive.indexOf(count2) > -1){
                            
                            var cellRef = this.activeCells[narr[j].x + "." + narr[j].y]
                            cellRef.nextState = 1;
                            this.updatedCells[narr[j].x + "." + narr[j].y] = cellRef;
                        }
                    }
                }
            }
        }
        this.updateView();
    }
    this.getNeighbors = function(cell){
        //Returns array of neighbor cells
        var xi = cell.x;
        var yi = cell.y;

        //Create a square window in which to check INCLUSIVELY

        var resp = {}
        resp.neighbors = []
        resp.count = 0;

        for(var i= xi-checkRadius; i<= xi+checkRadius; i++){
             for(var j= yi-checkRadius; j<= yi+checkRadius; j++){
                if(!(i==xi && j==yi)){
                    var neighbor = (this.activeCells[i + "." + j] ? this.activeCells[i + "." + j] : this.addCell(i, j, 0));
                    if(neighbor.state == 1){
                        resp.count++;
                    }
                    resp.neighbors.push(neighbor);
                    //console.log(neighbor);
                }
            }
        }
        return resp;
    }
    this.countNeighbors = function(cell){
        //Returns number of living neighbors
        return [];
    }
}

function RenderAgent(cellsHigh, cellsWide, cellSize){
    //get the canvas
    this.canvas = document.getElementById("main");
    this.canvas.addEventListener("click", getPosition, false);
    //resize the canvas for our new thingy
    this.canvas.width = cellsWide * cellSize; //in pixels
    this.canvas.height = cellsHigh * cellSize; //in pixels
    this.width = this.canvas.width; //in pixels
    this.height = this.canvas.height; //in pixels
    this.cellw = cellSize;
    this.cellh = cellSize;
    this.context = this.canvas.getContext("2d");

    this.topleft = [0,0];
    this.bottomright = [cellsWide, cellsHigh];


    this.renderCells = function(activeCells){
        //load the context onto the board
        this.context.restore();
        var keys = Object.keys(activeCells);
        //iterate over ALL activeCells
        for(i = 0; i< keys.length; i++){
            var key = keys[i];
            var cell = activeCells[key]; 
            //check the cell is in the view
            if(cell.x >= this.topleft[0] && cell.y >= this.topleft[1] && cell.x <= this.bottomright[0] && cell.y <= this.bottomright[1]){
                if(activeCells[key].state == 1){
                    this.context.fillStyle = "#000000";
                    var px = this.cellw * (cell.x - this.topleft[0]);
                    var py = this.cellh * (cell.y - this.topleft[1]);
                    this.context.fillRect(px, py, this.cellw, this.cellh);
                } else if (activeCells[key].state == 2){
                    this.context.fillStyle = "#B8B8B8";
                    var px = this.cellw * (cell.x - this.topleft[0]);
                    var py = this.cellh * (cell.y - this.topleft[1]);
                    this.context.fillRect(px, py, this.cellw, this.cellh);
                }
            } else {
                //what should I do if it isnt?
            }
        }
        //save the context for next time
        this.context.save();
    }
    this.clearAll = function(){
        this.context.fillStyle = 'rgba(255,255,255,1)';
        this.context.fillRect(0,0,this.width, this.height);
    }
    this.setWindow = function(topleft, bottomright){
        this.topleft = topleft;
        this.bottomright = bottomright;
        this.clearAll();
    }
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function getPosition(event)
{
  var x = event.clientX;
  var y = event.clientY;

  var canvas = document.getElementById("main");

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  view.tap(x, y, canvas);
}

function addFromIn(){
	var lin = $('#in').val();
	console.log(lin);
	var lines = lin.split(/\r\n|\r|\n/g);
	//console.log(lines);
	for(i = 0; i < lines.length; i++){
		var coords = lines[i].split(" ");
		console.log(coords);
		view.addCell(parseInt(coords[0]) + 100, parseInt(coords[1])+ 100, 1);
	}
	view.drawView();
}