var person = require("../public/person");
let cuntdb2 = require("../db2Connect")
let accountDataCollection;

setTimeout(()=>{
  accountDataCollection= cuntdb2.db().collection("cusaccount")
})

const InsertAccountdata = (accnumberdata, callback) => {
  var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  accnumberdata.usrname=person.usrname
  accnumberdata.date= utc
  
  if (person.logisStatus) accountDataCollection.insertOne(accnumberdata, callback)
      else console.log("Please login first", accnumberdata)
};

const getCheckAccount = (searchdata, callback) => {
  person.logisStatus ? accountDataCollection.find({"accnumber": searchdata.accnumber, "accounttype":searchdata.accounttype})
  .toArray(callback): console.log("Please login first")
};


const delAccount = (searchdata, callback) => {
  person.logisStatus ? accountDataCollection.deleteOne({"accnumber": searchdata.accnumber, "accounttype":searchdata.accounttype})
  .then(callback): console.log("Please login first")
};

const getCheckaccBeforeAcctransfer = ( callback) => {
  const per = person.logisStatus

  console.log(per)
  if ( per ) {accountDataCollection.find({"usrname": person.usrname})
  .toArray(callback)} else {console.log("Please login first")}
};

module.exports = { InsertAccountdata, getCheckAccount, delAccount, getCheckaccBeforeAcctransfer}


