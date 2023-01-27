let accountModel = require("../models/account");



const addAccountdata = (req, res) => {
  const newAccountdata = req.body;

  accountModel.InsertAccountdata(newAccountdata, (err, result) => {
     (err) ? res.json({ statusCode: 400, message: err })
            :res.json({ statusCode: 200, data: result, message: "Success" });    
  
    (result) ?   console.log("A new account is added:", newAccountdata):console.log("Result Error") });
};




const delaccountdata = (req, res) => {
 const newAccountdata = req.body;

  accountModel.delAccount(newAccountdata, (err, result) => {
     (err) ? res.json({ statusCode: 400, message: err })
            :res.json({ statusCode: 200, data: result, message: "Success" });    
  
    });
};

module.exports = {addAccountdata, delaccountdata}