//this application serves as an example to show how getters and setters work and how we can manipulate existing objects

class Person{ //class of tuype person
    constructor (name){ // constructor which will take a name
        this._name = name; // name is assigned to the this._name property
    }
    ///getter
    get name(){ 
        return this._name; //returns the name that was passed
    }
    //setter
    set name(newName){
        this._name = newName; //sets a persons newName to this._name and updates it
    }
}
//getter
const person1 = new Person('Brian');
console.log(person1.name);

//setter
person1.name = 'Brian Sucks';
console.log(person1.name);




