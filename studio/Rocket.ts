import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

//by this point I was ready to just put some properties and
//constructor parameters in and call it a day, but the book deicded it 
//was time to work.
export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    /*For sumMass I was going to do a traditional for loop but while
    I was writing it, VS decided to suggest the foreach method with
    the arrow syntax, so I said just okay, and it worked once I realized
    I was supposed to use element.massKg.
    */
    sumMass( items: Payload[] ): number {
        let itemSum: number = 0;
        items.forEach(element => {
            itemSum += element.massKg;
        });
        return itemSum;
    }

    /*For currentMass() I just call sumMass on astronauts and the 
    cargoItems, add them together, and return them.
    */
    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    /*For canAdd, to check if we have the room to add the items, instead of
    making an if statement, I just return the result of the expression they give
    us, since it will either be true or false. 
    */
    canAdd(item: Payload): boolean {
        return(this.currentMassKg() + item.massKg <= this.totalCapacityKg)
    }

    /*
    For addCargo, I just call canAdd() 
    */
    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}