//
console.log("Closure practice");

var a = 10;
function outest() {
  var b = 20;
  function outer() {
    var c = 30;
    function inner() {
      // debugger;
      console.log(a);
      console.log(b);
      console.log(c);
    }
    inner();
  }
  outer();
}
outest();
