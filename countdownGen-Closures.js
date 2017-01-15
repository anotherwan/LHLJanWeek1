var countdownGenerator = function(x) {
     console.log(`T-minus ${x}...`)
  return function() {
      x -= 1;
    if (x === 0) {
      return console.log(`Blast Off!`)
    } else if (x < 0) {
      return console.log(`Rockets already gone, bub!`)
    } else {
      return console.log(`T-minus ${x}...`)
    }
  }
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

//if we were to immediately invoke countdownGenerator:
//a) the first function would not take in x as an arg and we'd have to declare x within the first function.
//b) countdown would be wtv is returned in the 2nd function and that is not a function, therefore, you'd get undefined or countdown() is not a function
