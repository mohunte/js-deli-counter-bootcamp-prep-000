var katzDeli = [];
 function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}
 function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    var nowServing = katzDeli[0];
    katzDeli.shift();
    return `Currently serving ${nowServing}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}
 function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {
     var array = [];
    for (var i = 0; i < line.length; i++) {
      array.push(` ${i+1}. ${line[i]}`);
    }
    return `The line is currently:` + array;
  }
}



var ticketNumber =[]
function takeANumber(ticketNumber,line){
  
  return "Welcome! You're ticket number #1"
}

takeANumber(line) // "Welcome! You're ticket number #1" [1]
takeANumber(line) // "WElcome! You're ticket number #2" [1,2]

nowServing(line) // "Currently serving 1" [2]
nowServing(line) // "Currently serving 2" []

takeANumber(line) // "Welcome! You're ticket number #3" [3]

