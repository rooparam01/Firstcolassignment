let str = "madam";
let str1 = "";
for (let i = str.length - 1; i >= 0; i--) {
  str1 += str[i];
}
if (str1 == str) {
  console.log("is a palindrome");
} else {
  console.log("not palindrome");

