import { Mappable } from "./interfaces";

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
        const iconBase = "http://maps.google.com/mapfiles/kml/paddle/";
        
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: mappable.location,
            title: mappable.name,
            icon: iconBase + mappable.icon
        });

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.contentInfo()
            });

            infoWindow.open({
                map: this.googleMap,
                anchor: marker
            });
        });

    }

}