import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";


var user = new User();
var company = new Company();
var map = new CustomMap('map-canvas')

map.addMarker(user)
map.addMarker(company)
