function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  function returnsANamedFunction() {
    // Define and return a named function
    return function namedFunction() {
      // Function logic here
    };
  }
  
  function returnsAnAnonymousFunction() {
    // Define and return an anonymous function
    return function() {
      // Function logic here
    };
  }
  