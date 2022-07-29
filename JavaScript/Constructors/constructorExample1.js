//FreeCodeCamp.com, using getters and setters to control access to an object.
/*
Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.
 */

/*Example
-----------------------------------------------------
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

*/
/*Hint remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32*/

class Thermostat { ///class is going to be of type Thermostat
    constructor(farenheit){  //constructor is going ot take in the initial farenheit value
        this.farenheit = farenheit; //this.farenheit is given the value of the faranheit value that is being passed in.
    }
    //Getter
    get temperature(){
        return (5/9 * (this.farenheit - 32)); //this will calculate the value of celsius according to the formula above and return it
    }

    //setter
    set temperature(celsius){
        this.farenheit = (celsius * 9.0 / 5 + 32);
    }
}

const thermos = new Thermostat(100); //creating a new object and setting it to variable thermos.
let temp = thermos.temperature; // should return us 100 degrees in celsius. (37.77)
console.log(temp); //prints out output conversion

