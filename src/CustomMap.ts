export class CustomMap {
    googleMap: google.maps.Map

    constructor(elementId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(elementId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
}