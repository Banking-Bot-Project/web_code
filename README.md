This web service handles CRUD  by directly connecting to the FEdb.  
FEdb contains users login informations. 
Signup process create a entry/create a document in cusdate collection and also in cuslogindata in the FEdb. 


*****Envirenment*****

    1. Nodejs v18.0.0 and Node Package Manager

    2. MongoDB account

    3. VSCode IDE 

    4. Chrome Version 109.0.. or Other up to date Brower 


*****Installation and Set up*****


    You need to Clone or Fork the repository from GitHub. The link is https://github.com/Banking-Bot-Project/Code.git

    Once you have the Repo in your local repository then you can install NPM packages.To do that just run following command inside the BBFE_WEBAPP 

            npm install 

    then you are ready to run. 


*****Start Web Server and Application*****

    Run following command inside the BBFE_WEBAPP
            npm run start 

    Then service will start runing at http://localhost:3000/ 

    You can now use your browser to render it by just typeing http://localhost:3000/ in your browser

    now you will see Banking Bot is loading in to your browser. 


*******API End point parameater payload stucture with CRUD functions*******

//Read
Get ( "/api/checkaccount") with  {"accnumber": "", "accounttype": ""}

//Create
Post ("api /gettransaction")  with {"usrname":""}
Post ("api /addaccount) with  {"accnumber": "", "accounttype": "", "usrname": "","date":"" } 
Post ("api /getbalance) with  {"usrname":""}
Post ("api /login) with {"usrname":"", "password":""}
Post ("api /cusdata) with {"usrname": "", "fname":"",  "lname":"", "phoneno":"",  "address" : "", "state":"",  "postcode": "", "email": ""}
Post ("api /cuslogindata") with {"usrname":"", "accessno":"", "securityno":"", "password":""}
Post ("api /addbalance) with {"usrname":""}
//Update
Put ("api /updatebalance") with {"acnumber":"", "acbalance":""}
//Delete
Delete ("api /delaccount") :{"accnumber": "", "accounttype":""} 


*****How to Run Unit Tests*****
    command to run the Unit test
     npm test 
