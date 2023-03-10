import { faker } from "@faker-js/faker";
import { Mappable } from "./interfaces";

export class Company implements Mappable {
    name: string;
    icon: string = 'D.png';
    catchPrase: string;
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.name = faker.company.name();
        this.catchPrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    contentInfo(): string {
        return `
            <h5 style="display: inline-block">Company</h5>: ${this.name} <br/>
            <strong>Lat: </strong> ${this.location.lat} <br/>
            <strong>Lng: </strong> ${this.location.lng}
        `
    }

}
