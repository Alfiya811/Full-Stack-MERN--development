/*Q2. Write a program that grades students based on their marks^
8 If greater than 90 then A GradE
8 If between 70 and 90 then a B gradE
8 If between 50 and 70 then a C gradE
8 Below 50 then an F grade*/
var marks = 57;

if (marks > 90) {
    console.log("A Grade");
} else if (marks >= 70) {
    console.log("B Grade");
} else if (marks >= 50) {
    console.log("C Grade");
} else {
    console.log("F Grade");
}