const array = [1, 2, 3, 4, 5];

function printWithDelay() {
  array.forEach((element, index) => {
    setTimeout(() => {
      console.log(element);
    }, (index + 1) * 3000); // Print each element after 3 seconds
  });
}
