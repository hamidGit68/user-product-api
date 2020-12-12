const express = require('express');
/* define router */
const router = express.Router();
const bodyParser = require('body-parser');
const memberList = require("./Members.json");
const uuid = require('uuid');
const fs = require('fs');

/* bodyParser is used for recognizing data type. */
router.use(bodyParser.json());

router.use(
    bodyParser.urlencoded({
        extended: false,
    })
);


//--------------------
/* adding users to list of users */
//--------------------
router.post('/postmember', function(req, resp) {
    let firstName = req.body.fName; // fName is the "name" attribute for the input field in "home.html"
    
    let lastName = req.body.lName;
    let idnew = uuid.v4();
    
    const newMember = {
        id: idnew,
        name: firstName,
        family: lastName
    }
    
    memberList.push(newMember);
    /* using node "fs" module to write to original file.  */
    fs.writeFileSync( './routs/api/Members.json', JSON.stringify(memberList, 2, 2) );

    resp.json(memberList);
    resp.end();
    console.log("adding member with id: " + idnew);
});

//--------------------
/* update a user that is exist in the list */
//--------------------
//router.put('/postmember/:id', function(req,resp) {
//    
//});

/* exports is needed to define rout in the "index.js" */
module.exports = router;