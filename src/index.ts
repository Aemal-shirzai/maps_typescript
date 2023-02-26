import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";


var aemal = new User();
console.log(">>>>>User: ", aemal);

var netlinks = new Company();
console.log(">>>>>>> Company: ", netlinks)

new CustomMap('map-canvas')