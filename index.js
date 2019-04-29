function takeANumber(currentLineOfPeople, newPerson) {
  var placeInLine = currentLineOfPeople.length + 1;
  currentLineOfPeople.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${placeInLine} in line.`;
}

function nowServing(katzDeliLine) {
  var currentCustomer = "";
  if(katzDeliLine.length === 0) {
<<<<<<< HEAD
    return "There is nobody waiting to be served!";
=======
    return "The line is currently empty";
>>>>>>> 372ac971c0db272c66e114acdc9ff442218b8bc0
  } else {
      currentCustomer = `Currently serving ${katzDeliLine[0]}.`;
      katzDeliLine.shift();
  }
  return currentCustomer;
<<<<<<< HEAD
}

function currentLine(line) {
  
  var string = "";
  
  if(line.length === 0) {
    string = "The line is currently empty.";
  return string;
  } else {
      string = "The line is currently: ";
    
      for(var i = 0; i < line.length; i++) {
        if (i === 0) {
            string = string + (i+1) + ". " + line[i];
        } else {
            string = string + ", " + (i+1) + ". " + line[i];
            } 
        }
      return string;
  }
  
=======
>>>>>>> 372ac971c0db272c66e114acdc9ff442218b8bc0
}