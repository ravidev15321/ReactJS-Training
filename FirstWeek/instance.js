function trackFunction(originalFunction) {
    let invocations = 0;
    let instances = 0;
  
    function wrappedFunction(...args) {
      invocations++;
      instances++;
      return originalFunction(...args);
    }
  
    wrappedFunction.getInvocations = function() {
      return invocations;
    };
  
    wrappedFunction.getInstances = function() {
      return instances;
    };
  
    return wrappedFunction;
  }
  
  // Example function to track
  function exampleFunction() {
    console.log("Example function executed");
  }
  
  // Wrap the function to track invocations and instances
  const trackedFunction = trackFunction(exampleFunction);
  
  // Execute the tracked function
  trackedFunction();
  trackedFunction();
  trackedFunction();
  
  console.log("Number of invocations:", trackedFunction.getInvocations());
  console.log("Number of instances:", trackedFunction.getInstances());
  