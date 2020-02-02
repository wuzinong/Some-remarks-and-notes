var utils = {};

utils.captureMouse = function(element){
    var mouse = {x:0,y:0};
    element.addEventListener('mousemove',function(event){
        var x,y;
        if(event.pageX || event.pageY){
            x = event.pageX;
            y = event.pageY;
        }else{
            x = event.clientX + document.body.scrollLeft + 
                document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }

        x -= element.offsetLeft;
        y -= element.offsetTop;
        mouse.x = x;
        mouse.y = y;
    },false);
    return mouse;
}


utils.captureTouch = function(element){
    var touch = {x:null,y:null,isPress:false};
    element.addEventListener('touchstart',function(event){
        touch.isPress = true;
    },false);
    element.addEventListener('touchend',(event)=>{
        touch.isPress = false;
        touch.x = null;
        touch.y = null;
    },false);
    element.addEventListener('touchmove',(event)=>{
        var x,y,
        touch_event = event.touches[0];//first touch
        if(touch_event.pageX || touch_event.pageY){
            x = touch_event.pageX;
            y = touch_event.pageY;
        }else{
            x = touch_event.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            y = touch_event.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
            x -= element.offsetLeft;
            y -= element.offsetTop;

            touch.x = x;
            touch.y = y;
        }
    },false);
    return touch; 
}



// https://stackoverflow.com/questions/27199247/what-is-the-difference-between-offsetleft-and-clientleft-in-javascript

// offsetLeft = position left+margin from the first positioned parent left edge.
// clientLeft = left border + left scrollbar width (if present). (block level elements -only!)
// Let's say we have a <div> with 8px border and a scrollbar


// #test {
//     overflow: auto;
//     position: absolute;
    
//     left:         80px; /* + */
//     margin-left:  10px; /* = 90px offsetLeft */
    
//     height:  100px;
//     width:   100px;
    
//     border: 8px solid red;
//     background: #f8f8f8;
//   }

// <div id="test">
//   a<br>a<br>a<br>a<br>a<br>a<br>a<br>a
// </div>

// var el = document.getElementById("test");
// console.log( el.offsetLeft );  // (left + margin)           80 + 10 = 90
// console.log( el.clientLeft );  // (border + left scrollbar)  8 +  0 = 8
