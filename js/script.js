/**
 * Industry Based Functions Created by Phirom Yim on 5/31/14.
 */

//Create a function to store inform regarding Memory storage on a Hard Drive using validation, prompts, alerts

//user prompt for number input of files already used
var minimumFiles = prompt("Please enter how many gigs of files have you already used?");

//validate that the user typed a number and didn't leave it blank

//isNan() = true if it is a text string and false if it not a number

while(isNaN(minimumFiles|| minimumFiles === "")){//as long as this is not a number OR a text string

    //re-prompt the user for a number
    minimumFiles = prompt("Please type in a NUMBER.");
}

//prompt for a max value
var maximumFiles = prompt("Please how many gigs of storage does your hard drive have?");

while(isNaN(maximumFiles || maximumFiles === "")) {//as long as this is not a number OR a text string

    //re-prompt the user for a number
    maximumFiles = prompt("Please type in a NUMBER.");
}
//using anonymous function for code brevity
var storage = function (minimumFiles, maximumFiles){//parameters go here
    var fileStorage = maximumFiles - minimumFiles;//put Number in from will turn text string into number
    console.log(fileStorage);//print to console
    return fileStorage;//return file storage
}
//function call
//arguments go INSIDE of the () of a function call

//catch the returned value of our function
var results = storage (minimumFiles, maximumFiles);//get sent inside of function
console.log(results);//print to console
alert("You have " + results + " gig(s) of storage left");//alert results with concatenation
