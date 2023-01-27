var express = require("express");
var router = express.Router();
let accountController = require("../controller").accountController;

router.post("/addaccount", (req, res,) => {
  accountController.addAccountdata(req, res);
});

router.delete("/delaccount", (req, res) =>{
  accountController.delaccountdata(req,res)
})

module.exports = router;

