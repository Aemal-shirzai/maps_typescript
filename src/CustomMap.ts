interface Mappable {
    location: {
        lat: number,
        lng: number
    }
}

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(elementId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(elementId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: mappable.location
        });

    }

}