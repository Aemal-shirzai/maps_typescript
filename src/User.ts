import { faker } from "@faker-js/faker";
import { Mappable } from "./interfaces";

export class User implements Mappable {
    name: string;
    icon: string = 'S.png';
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    contentInfo(): string {
        return `
            <h5 style="display: inline-block">User</h5>: ${this.name} <br/>
            <strong>Lat: </strong> ${this.location.lat} <br/>
            <strong>Lng: </strong> ${this.location.lng}
        `
    }

}

