let number = 13;
let count = 0;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    count++;
  }
}
if (count == 0) {
  console.log("This is a prime number");
} else {
  console.log("this is not a prime number");

