
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 

 ```js

 function result(score){
     if(score>=90 && score<=100){return "A"}
     if(score>=80 && score<=89){return "B"}
     if(score>=70 && score<=79){return "C"}
     if(score>=60 && score<=69){return "D"}
     if(score>=0 && score<=59){return "F"}
     else return "invalid input"
 }

 ```


 🎖Write a function named calculateDogAge that:

- [ ] Takes 1 argument: your puppy's age.
- [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
- [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!".
- [ ] Add an additional argument to the function that takes the conversion rate of human to dog years

```js

function dogAge(age){
    n=age*7;
 console.log("Your doggie is " + n +" years old in dog years!")
}

function dogAge1(age, rate){
    n=age*rate;
 console.log("Your doggie is " + n +" years old in dog years!")
}

```

let user = {
  name: "Aman",
  sayHi() {
    let arrow = () => alert(this.name);
    arrow();
  }
};

user.sayHi();



/////
var personObj1 = {
  name: "Alex",
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1);
console.log(personObj2)
Sudarshan Patil11:39 PM
function personDetails(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); 
console.log(personObj2);