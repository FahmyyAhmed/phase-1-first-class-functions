
function receivesAFunction(callback) {
    return callback();
  }
  // receivesAFunction(monday)
  
  function add(a, b) {
    return a + b;
  }
  
  function returnsANamedFunction() {
    return add;
  }
  // console.log(returnsANamedFunction());
  
  function returnsAnAnonymousFunction() {
      return function () {
          console.log("Anonymous!")
      }
  }