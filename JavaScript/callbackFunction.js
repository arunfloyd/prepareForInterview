function doSomethingAsync(vishnu) {
  var data = 949889458;
  vishnu(data);
}

// Callback function
function callbackFunction(value) {
  console.log("Callback !" + value);
}

// Call the function with the callback
doSomethingAsync(callbackFunction);
