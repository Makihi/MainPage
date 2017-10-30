
var fps = 50;
var timer = setInterval(function() {
  var timePassed = Date.now() - start;

  if(timePassed >= 2000) {
    clearInterval(timer);
    return;
  }

  draw(timePassed);
}, 20);

function draw(timePassed) {
  top_label.style.bottom / 5 + "px";
}
