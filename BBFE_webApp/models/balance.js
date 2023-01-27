
let cuntdb1 = require("../db1Connect")
let cuntdb2 = require("../db2Connect")
let balancedataCollection;
var person = require("../public/person");

setTimeout(()=>{
  cusdataCollection = cuntdb1.db().collection("cusdata")
})
setTimeout(()=>{
  logindataCollection= cuntdb1.db().collection("cuslogindata")
})
setTimeout(()=>{
  balancedataCollection= cuntdb2.db().collection("collec2")
})

const insertProjects = (project, callback) => {
  projectCollection.insertOne(project, callback);
};

const getBalance = (acnumberdata, callback) => {
  person.logisStatus ? balancedataCollection.find({"usrname":person.usrname})
  .toArray(callback): console.log("Please login first")

};

const insertCusdata = (project, callback) => {
  cusdataCollection.insertOne(project, callback);
//({ acnumber,fname,lname,phoneno,address,state,postcode,email, ...project } = project);
console.log(project);


// let myObject = {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"};

}
const insertLogindata = (project, callback) => {

    bcrypt.hash(project.password, saltRounds, function(err, hash) { 
    project.password =hash
  });

  logindataCollection.insertOne(project, callback);
  console.log(project);
}

// Delete, Search and Update to be done
module.exports = { insertProjects, getBalance, insertCusdata, insertLogindata };
