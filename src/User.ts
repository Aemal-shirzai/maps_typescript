import { faker } from "@faker-js/faker";

export class User {
    name: string;
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

