// Create a class for vehicle. Each vehicle instance should have the following properties:
// make, model, year

class Whips {
    constructor(make, model, year) {

        this.make = make;
        this.model = model; 
        this.year = year;

    }

    // Each vehicle instance should have access to a method called honk, which returns the string “Beep.”
    honk() {
        return "Beep"; 
    }

    // Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.
    toString() {
        return `${this.make} ${this.model} ${this.year}`;
    }
}

// extends creates a class that is a child of a class that is declared 
class TheWhip extends Whips {

    //Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.
    constructor ( make, model, year) {
        // access properties obj literall/class or calls a superclass's constructor 
        super(make, model, year);
        this.numWheels = 4; 
    }

}

// Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. 
class LeBike extends Whips {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2; 
        // It should also have a revEngine method which returns “VROOM!!!”
        this.revEngine = "VROOM!!"; 
    }
}
// Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles, 
// and a property called capacity which is a number indicating how many vehicles will fit in the garage. 
class Garage {
    // When you create a garage, vehicles will always be empty; you only need to provide the capacity.
    constructor (capacity) {
        this.whipCollection = [];
        this.capacity = capacity;
    }

    //  garage should also have an add method, which attempts to add a vehicle to the array of vehicles. 
    add(whip){

        if(!(whip instanceof Whips)) {
            return "Only my whips are allowed in here!"; 
        }

        if(this.whipCollection.length >= this.capacity) {
            return "Sorry, we are full.";
        }

        this.whipCollection.push(whip);
        return "My whip was successfully added to the garage.";

    }

}