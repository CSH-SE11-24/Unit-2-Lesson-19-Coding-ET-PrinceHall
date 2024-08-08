const prompt = require('prompt-sync')()
// REMINDER: Run your code to make sure there are no errors before submitting!
// Create an object that represents your favorite show with the following keys: name (string), genre (string), rating (number) (2 pts)

let myshow = {
  name:"Good Place",
  genre:"Comedy",
  rating:4.8
}

// Console log the show's name using the object (1 pt)

console.log(myshow.name)

// Add a new key called watched and put in a boolean with whether you have seen it (1 pt)

myshow.watched = true


// Change the rating of the show to increase it by one (2 pt)

myshow.rating = myshow.rating + 1


// Loop through the object and print every key and element. (2 pt)
// It should look like: 
// name is Ted Lasso
// genre is comedy
// rating is 4.5
// watched is true

for(const key in myshow){
  console.log(`${key} is ${myshow[key]}`)
}


// EXTRA CREDIT
// Make two more show objects and put them all in an array
// Loop through the array and print the names of the shows


let myshow2 = {
  name:"The Boys",
  genre:"action",
  rating: 4.7
}

let myshow3 = {
  name: "Arcane League of legends",
  genre:"Action drama",
  rating: 4.8
}

let shows = [myshow,myshow2,myshow3]

for(let index = 0; index<=2;index++){
  console.log(shows[index].name)
}
