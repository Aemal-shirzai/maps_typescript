import { User } from "./User";
import { Company } from "./Company";


var aemal = new User();
console.log(">>>>>User: ", aemal);

var netlinks = new Company();
console.log(">>>>>>> Company: ", netlinks)

new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});