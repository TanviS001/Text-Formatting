var name=prompt("Enter your name: ");
var lowerCaseName=name.toLowerCase();

var firstLetter=lowerCaseName.slice(0,1);
var firstLetterCapital=firstLetter.toUpperCase();

var length=lowerCaseName.length;
var remainingName=lowerCaseName.slice(1,length);

alert("Hello "+firstLetterCapital+remainingName);
