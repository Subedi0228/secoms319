/*
    Author: Chiran Subedi
    ISU Netid : csubedi1@iastate.edu
    Date : September 28th, 2023
*/

// Exersice 1
let n1 = 11;
let n2 = 10;
console.log(`The max between ${n1} and ${n2} is :`, maxOfTwo(n1,n2));
function maxOfTwo(a, b){
    return a > b ? a : b;
}

// Exersice 2
let array = [10,11,1024,125,9,201];
console.log(maxOfArray(array));
function maxOfArray(arr){
    let runningMax = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > runningMax) runningMax = arr[i];
    }
    return runningMax;
}

// Exersice 3
const movie = {
    title : 'Some movie',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Steven Spielberg'
    };
showProperties(movie);

function showProperties(movie){
    console.log("List of Keys: \ntitle\nreleaseYear\nrating\ndirector");
    console.log("List of Values: " + "\n" + movie.title + "\n" + movie.releaseYear + "\n" + movie.rating + "\n" + movie.director);
}

// Exersice 4
const circle = {
    radius : 2,
    area: function computeArea(radius) {
        return Math.PI * this.radius * this.radius;
    },
    getRadiusValue() {
        return this.radius;
      },
      setRadiusValue(x) {
        this.radius = x;
      },
};
console.log(circle.area());

// Exersice 5
console.log(`Area with ${circle.radius} :`,circle.area());
circle.radius = 3;
console.log(`Area with ${circle.radius} :`,circle.area());

// Exersice 6 (The methods are added into the circle object)
console.log(`Area with ${circle.getRadiusValue()} :`,circle.area());
circle.setRadiusValue(4);
console.log(`Area with ${circle.getRadiusValue()} :`,circle.area());

