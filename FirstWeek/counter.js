function createCounter() {
    let count = 0; // Variable count is captured by the closure
  
    function increment() {
      count++;
      console.log("Counter incremented to:", count);
    }
  
    function decrement() {
      count--;
      console.log("Counter decremented to:", count);
    }
  
    function getCount() {
      return count;
    }
  
    return {
      increment,
      decrement,
      getCount
    };
  }
  
  // Create a counter instance
  const counter = createCounter();
  
  // Test the counter
  counter.increment(); // Counter incremented to: 1
  counter.increment(); // Counter incremented to: 2
  counter.increment(); // Counter incremented to: 3
  counter.decrement(); // Counter decremented to: 2
  
  console.log("Current count:", counter.getCount()); // Current count: 2
  