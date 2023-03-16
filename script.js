// 1a. Create a LET variable named warmHugs and set this string as the value for the variable "Hi, I'm Olaf and I like warm hugs."
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
// 1b. Using a string method, display the string value of warmHugs in uppercase text in the console/terminal. (Need to use a console log on this one)
console.log(warmHugs.toUpperCase());
// 1c. Using a string method that takes an argument, change the word "like" to "love" in the warmHugs variable string. Also, use this new string that is returned/created from the string method to update the value for the warmHugs variable.
warmHugs = warmHugs.replace("like", "love");
// 2a. Create a variable named beenImpaled and set this string as the value for the variable "Oh, look at that. I've been impaled."
let beenImpaled = "Oh, look at that. I've been impaled.";
// 2b. Using a string method that takes an argument, only display the "I've been impaled." section of the beenImpaled string in the console/terminal. (Need to use a console log on this one as well).
console.log(beenImpaled.substring(18));
// 3a. Create a variable named dotDotDot and set this string as the value for the variable "..."
let dotDotDot = "...";
// 3b. Create another variable called skullBones. Using the dotDotDot variable and a template literal, set the value for the skullBones variable to "I don't have a skull...or bones."
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
// 4. Display the number for PI in the console/terminal (HINT: Need to use a Math Object Property. Also need to use a console log as well)
console.log(Math.PI);
// 5. Create a variable called randomNumber. Use Math.random() to set a value for the randomNumber variable so that it will be a random whole number value from 1 to 3.
let randomNumber = Math.ceil(Math.random()*3);
console.log(randomNumber);
// BONUS
// 6. Using only one line of code, create the following string " Let It Go!" and change it to "LET IT GO! LET IT GO!" (NOTE: Notice the space before " Let" as well as the space between "GO! LET". Also, NOT allowed to use the replace method to complete this. Finally, a variable is NOT required to complete this.)
console.log("abc".repeat(1));
console.log(" Let It Go!".repeat(3).toUpperCase().trim());
// 7a. Create a variable named reindeers and set this string for the value "Reindeers are better than people."
let reindeers = "Reindeers are better than people.";
// 7b. Using a string method on the reindeers variable, change the string value to the following "Reindeers_are_better_than_people." and have it display in the console/terminal (Need to use a console log).
reindeers = reindeers.replaceAll(" ", "_");
// 8. Display the decimal number for the square root of 2 in the console/terminal (HINT: There is more than one way to do this. Also need a console log on this one).
console.log(Math.sqrt(2));
console.log(Math.SQRT2);
// 9. Create a variable called newRandomNumber that will have some random whole number value from 7 to 23 (Extra Bonus: Do this on one line of code)
let newRandomNumber = Math.ceil(Math.random() * 17) + 6;
console.log(newRandomNumber);
// When finished, create a repository in the “LiteralMathMethodExercise” Folder as well as on GitHub. Add and commit everything in the LiteralMathMethodExercise folder and push it up to your GitHub repository. Then paste the link to your GitHub repository page in the form in google classroom.