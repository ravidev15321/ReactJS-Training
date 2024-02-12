function updateTime() {
    const now = new Date();
  
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12; // Convert 0 to 12
  
    const timeString = `${hour12}:${addZero(minutes)}:${addZero(seconds)} ${meridiem}`;
    const dateString = now.toDateString();
  
    document.getElementById('time').innerText = timeString;
    document.getElementById('date').innerText = dateString;
  
    const greeting = getGreeting(hours);
    document.getElementById('greeting').innerText = greeting;
  }
  
  function addZero(number) {
    return number < 10 ? '0' + number : number;
  }
  
  function getGreeting(hours) {
    let greeting = '';
  
    if (hours >= 5 && hours < 12) {
      greeting = 'Good Morning!';
    } else if (hours >= 12 && hours < 17) {
      greeting = 'Good Afternoon!';
    } else {
      greeting = 'Good Evening!';
    }
  
    return greeting;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initial call to display
  