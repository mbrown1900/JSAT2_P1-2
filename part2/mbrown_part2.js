//JSAT2 Part 2
//Author: Mathew Brown

//B2.2: Object Building 

// myMovie - stores the details of one movie
let myMovie = {
  title: "The longest day",
  year: 1964
};
console.log("B2.2 Object:", myMovie);

//B2.3: Add new properties
myMovie.rating = 5;
myMovie.summary = "World War II movie about the Normandy landings";
console.log("B2.3 After adding:", myMovie);

//B2.4: Change Properties

myMovie.rating = 4;
myMovie.year = 1962;
console.log("B2.4 After changing:", myMovie);

//B2.5: Delete Property

delete myMovie.summary;
console.log("B2.5 After removing:", myMovie);