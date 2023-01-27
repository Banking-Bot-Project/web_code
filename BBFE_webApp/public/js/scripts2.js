import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var person = require ('../person');
 

person.logisStatus ? getBal(person?.acnumber) : alert("Please login first")
