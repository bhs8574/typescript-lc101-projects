import { Payload } from './Payload';

//Making Cargo was basically just like making Astronauts, but just
//just changing some names.
export class Cargo implements Payload {
    massKg: number;
    material; string;
    constructor(massKg: number, material: string) {
        this.massKg=massKg;
        this.material=material;
    }
}