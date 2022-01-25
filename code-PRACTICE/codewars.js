// CODEWAR : 8KYU

//Multiply
function multiply () {
    return (a * b)
}

// Coefficient Fo Quadrant
function quadratic(x1, x2){
    return [1, -(x2 + x1), (x1 * x2)]
  }

// Get Character From ASCI (c)
function getChar(c){
    return String.fromCharCode(c)
  }

// A Worlf In Sheeps Clothing

  function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : 
    `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }

  // Closest Elevator

  function elevator(left, right, call) {
    return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
  }


