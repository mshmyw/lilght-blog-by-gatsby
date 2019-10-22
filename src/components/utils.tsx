export function css(css){
  if(typeof document !== 'undefined') {
    var style = document.createElement("style");
    style.type="text/css";
    try{
        style.appendChild(document.createTextNode(css));
    }catch(ex){
        style.styleSheet.cssText = css;
    }
    document.getElementsByTagName('head')[0].appendChild(style);
  }
}

export function randomColor(){
  return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")";
}
