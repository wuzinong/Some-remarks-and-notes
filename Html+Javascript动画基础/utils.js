 
if(!window.utils){window.utils = {}}
utils.colorToRGB = function(color,alpha){
    //if string format, convert to number
    if(typeof color === 'string' && color[0] === '#'){
        color = window.parseInt(color.slice(1),16);
    }
    alpha = (alpha === undefined) ? 1 : alpha;

    //extract component values
    var r = color >> 16 & 0xff,
        g = color >> 8 & 0xff,
        b = color & 0xff,
        a = (alpha < 0)?0:(alpha>1?1:alpha);

        if(a===1){
            return "rgb("+r+","+g+","+b+")";
        }else{
            return "rgba("+r+","+g+","+b+","+a+")";
        }
}

utils.parseColor = function(color,toNumber){
    if(toNumber === true){
        if(typeof color === 'number'){
            return (color | 0);// chop off decimal
        }
        if(typeof color === 'string' && color[0] === '#'){
            color = color.slice(1);
        }
        return window.parseInt(color,16);
    }else{
        if(typeof color === 'number'){
            //make sure our hexadecimal number is padded out
            color = '#' + ('0000' + (color | 0).toString(16)).substr(-6);
        }
        return color;
    }
}

utils.findPoint = function(){
    //(x0,y0) 为起点，(x2,y2)为终点，(x1,y1)为控制点 曲线穿过点(xt,yt)
    var x0,y0,x1,y1,x2,y2,xt,yt;
    x1 = xt * 2 - (x0 + x2) / 2;
    y1 = yt * 2 - (y0 + y2) / 2;
}