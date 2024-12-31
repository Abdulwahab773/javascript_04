// CHAPTER NO. 13 TO 15: "ARRAYS"

// Question No. 1:

// let arr = [];


// Question No. 3:

// let arr = ["Pakistan" , "India" , "Bangladesh" , "Nepal" , "Afghanistan" , "China"];


// Question No. 4:

// let arr = [1 , 2 , 3];


// Question No. 5:

// let arr = [true , false];


// Question No. 6:

// let arr = [karachi , 1 , null ];


// Question No. 7:

// let edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "MPHIL", "PhD"];


// document.write(`Qualifications:<br>`);
// document.write(`<ol>`);
// document.write(`<li>` + edu[0] + `</li>`);    
// document.write(`<li>` + edu[1] + `</li>`);
// document.write(`<li>` + edu[2] + `</li>`);
// document.write(`<li>` + edu[3] + `</li>`);
// document.write(`<li>` + edu[4] + `</li>`);
// document.write(`<li>` + edu[5] + `</li>`);
// document.write(`<li>` + edu[6] + `</li>`);
// document.write(`<li>` + edu[7] + `</li>`);
// document.write(`</ol>`);



// Question No. 8:

// let Name = ["Wahab", "Ahmed", "Kashif"];
// let marks = [480, 400, 374];

// let totalMarks = 500;

// let wahab = marks[0] / totalMarks * 100 + "%";
// let ahmed = marks[1] / totalMarks * 100 + "%";
// let kashif = marks[2] / totalMarks * 100 + "%";

// document.write(
//    `Score of  ${Name[0]} is ${marks[0]}. Percentage: ${wahab}<br>
//     Score of  ${Name[1]} is ${marks[1]}. Percentage: ${ahmed}<br> 
//     Score of  ${Name[2]} is ${marks[2]}. Percentage: ${kashif}`);







// Question No. 9:

// let colour = ["Blue", "Green", "Red"];


// document.write(`<h1>Colours:</h1>`);
// document.write(`<ol>`);
// document.write(`<li>` + colour[0] + `</li>`);
// document.write(`<li>` + colour[1] + `</li>`);
// document.write(`<li>` + colour[2] + `</li>`);
// document.write(`</ol>`);



// "a":

// let userInput = prompt("Enter The Colour You Want To Add At The Beginning:");

// colour.unshift(userInput)


// document.write(`<h1>Updated Colour List:</h1>`)
// document.write(`<ol>`);
// document.write(`<li>` + colour[0] + `</li>`);
// document.write(`<li>` + colour[1] + `</li>`);
// document.write(`<li>` + colour[2] + `</li>`);
// document.write(`<li>` + colour[3] + `</li>`);
// document.write(`</ol>`);



// "b":

// let userInput = prompt("Enter The Colour You Want To Add At The End");



// colour.push(userInput);

// document.write(`<h1>Updated Colour List:</h1>`)
// document.write(`<ol>`);
// document.write(`<li>` + colour[0] + `</li>`);
// document.write(`<li>` + colour[1] + `</li>`);
// document.write(`<li>` + colour[2] + `</li>`);
// document.write(`<li>` + colour[3] + `</li>`);
// document.write(`</ol>`);



// "c": 

// colour.unshift("orange" , "Purple");

// document.write(colour);


// "d":

// colour.shift();

// document.write(colour)


// "e":

// colour.pop();
// document.write(colour);


// "f":

// let colour = ["Blue", "Green", "Red"];


// let index = +prompt("Enter the index number where you want to add your colour:");
// let colourName = prompt("Enter the name of the that colour:");

// colour.splice(index ,0 ,colourName);

// document.write(colour);


// "g":

// let colours = ["red" , "green" , "blue" , "purple" , "orange"];

// let user = +prompt("Enter the index number of the colour you want to delete,");
// let userInput = prompt("How many colours you want to delete:");

// colours.splice(user, userInput);


// document.write(`<h1>Colours: </h1>`);
// document.write(colours.join(" - "));



// Question No. 10:

// let studentsScore = [374, 258, 453, 146, 321];

// studentsScore.sort();

// console.log(studentsScore);



// Question No. 11:

// let cities = ["karachi", "lahore", "islamabad", "Quetta", "peshawar"];

// let selectedCities = cities.slice(2, 4);

// document.write(selectedCities);


// Question No. 12:


// let arr = ["This" , "is", "my", "cat"];

// document.write(arr.join(" "))



// Question No. 13:

// let arr = [];

// arr.push(2);
// arr.push(8);
// arr.push(9);
// arr.push(15);

// console.log(arr);

// arr.shift();
// arr.shift();
// arr.shift();

// console.log(arr);



// Question No. 14:

// let arr = [];

// arr.push("2"); 
// arr.push("8");
// arr.push("7");
// arr.push("1");

// console.log(arr);

// arr.pop();
// arr.pop();
// arr.pop();

// console.log(arr);



// Question No. 15:

// let mobilePhones = ["Apple" ,"Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write(`<select>
//     <option>${mobilePhones[0]}</option>
//     <option>${mobilePhones[1]}</option>
//     <option>${mobilePhones[2]}</option>
//     <option>${mobilePhones[3]}</option>
//     <option>${mobilePhones[4]}</option>
//     <option>${mobilePhones[5]}</option>
//     </select>`);