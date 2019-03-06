let s = function( p ) {

  p.setup = function() {
    p.createCanvas(200, 200)
  }

  p.draw = function() {
    p.background(0)

  }
}

let myp5 = new p5(s, document.getElementById('p5sketch'))