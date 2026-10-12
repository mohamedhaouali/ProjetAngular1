//import express module
const express = require('express');

//import cors module

const cors = require('cors');

//Create an Express Application

const app = express();

//App Configuration
//Security config

app.use(cors());

//Send Json response

app.use(express.json());

//Get JSON object from Request

app.use(express.urlencoded({ extended: true } )) ;


let platsTab = [
    {id: 1,image:"img/food_menu/single_food_1.png", name: "Pork Sandwich" , price: 10.00 , description : "They're wherein heaven seed hath nothing" },
    {id: 2,image:"img/food_menu/single_food_2.png" ,name: "Caesar Salad" , price: 15.00 , description : "They're wherein heaven seed hath nothing" },
    {id: 3,image:"img/food_menu/single_food_3.png", name: "Easter Delight" , price: 20.00 , description : "They're wherein heaven seed hath nothing" },


]

let chefsTab = [
    {id: 1,name: "Ali" , specialite:"Chef Master",exprience :5},
    {id: 2,name: "Fred" , specialite:"Chef Master",exprience :10},
    {id: 3,name: "Justin" , specialite:"Chef Master",exprience :3},
]


let usersTab = [
    {id: 1, firstName: "Med" , lastName:"ALI",email :"med@gmail.com",pwd:123456},
    {id: 2, firstName: "Ahmed" , lastName:"Imed",email :"ahmed@gmail.com",pwd:123456},
    {id: 3, firstName: "kais" , lastName:"gmail",email :"kais@gmail.com",pwd:123456},
    
]

//app.Http_METH("/PATH",(req, res) => {});

//Business Logic :Get all  Plats

app.get("/plats",(req, res) => {
    console.log("Business Logic : Get ALL Plats");
    // response
    res.json({tab :platsTab});
});

//Business Logic : Add Plat
app.post("/plats",(req, res) => {
   console.log("Business Logic : Add Plats",req.body);
   let plat = req.body;
   platsTab.push(plat);
   res.json({ msg : "Added with success"});
});

//Business Logic : Edit Plat

app.put("/plats/:id",(req, res) => {
    console.log("Business Logic : Edit Plats");
});

//Business Logic : Get Plat By id
// :id :m'id est une parametre (variable)

app.get("/plats/:id",(req, res) => {
    console.log("Business Logic : Get Plat By ID",req.params.id);
    let platId = req.params.id; //platId la valeur de l'id de l'objet a chercher
    let foundPlat = {};
    for (let i = 0; i < platsTab.length;i++) {
        if(platsTab[i].id == platId) {
            foundPlat = platsTab[i];
            break;
        }
    }
    res.json({ plat: foundPlat});
});

//Business Logic : DELETE Plat By id
app.delete("/plats/:id",(req, res) => {
    console.log("Business Logic : Delete Plat By ID ");
    let platId= req.params.id;
    let isFound = false;

    for (let i = 0 ;i < platsTab.length; i++ ) {
        if(platsTab[i].id == platId) {
            platsTab.splice(i, 1);
            isFound = true;
            break;
        }
    }
     if (isFound) {
    res.json ({msg: "Deleted with sucess" }); 
    } else {
        res.json ({ msg:"Plat Not Found"});
    }
});

//Business Logic : Search plats By price

app.post("/plats/search", (req,res) => {

console.log("Business Logic : Search plats By price");

let plats = [];

for (let i = 0; i < platsTab.length; i++) {

   if (platsTab[i].price >= req.body.price ) {
    
    plats.push(platsTab[i]);
   }

}
    if (plats.length > 0) {

        res.json({ plats: plats });
        
    } else {
         res.json({msg:"No plats found"});
    }


})

//Business Logic : Search Plats by price

app.get("/plats/search/:price", (req, res) => {

    console.log("Search plats by price",req.params.price);
    //get price from param
    let price = req.params.price;
    let foundPlats = [];
    for (let i = 0; i < platsTab.length; i++) {
        if (platsTab[i].price == price ) {
            foundPlats.push(platsTab[i]);
        }
    }

    if (foundPlats.length == 0) {
        res.json({ msg: "No plats found" });
    } else {
        res.json({ plats: foundPlats })
    }
});


//app.Http_METH("/PATH",(req, res) => {});

//Business Logic :Get all Chefs

app.get("/chefs",(req, res) => {
    console.log("Business Logic : Get ALL Chefs");
    // response
    res.json({tab :chefsTab});
});

//Business Logic : Add Chef

app.post("/chefs",(req, res) => {
   console.log("Business Logic : Add Chefs",req.body);
   let chef = req.body;
   chefsTab.push(chef);
   res.json({ msg : "Added with success"});
});

//Business Logic : Edit Chef

app.put("/chefs/:id",(req, res) => {
    console.log("Business Logic : Edit Chefs");
});

//Business Logic : Get Chef By id
// :id :m'id est une parametre (variable)

app.get("/chefs/:id",(req, res) => {
    console.log("Business Logic : Get Chef By ID",req.params.id);
    let chefId = req.params.id; //chefId la valeur de l'id de l'objet a chercher
    let foundChef = {};
    for (let i = 0; i < chefsTab.length;i++) {
        if(chefsTab[i].id == chefId) {
            foundChef = chefsTab[i];
            break;
        }
    }
    res.json({ chef: foundChef});
});

//Business Logic : DELETE Chef By id
app.delete("/chefs/:id",(req, res) => {
    console.log("Business Logic : Delete Chef By ID ");
    let chefId= req.params.id;
    let isFound = false;

    for (let i = 0 ;i < chefsTab.length; i++ ) {
        if(chefsTab[i].id == chefId) {
            chefsTab.splice(i, 1);
            isFound = true;
            break;
        }
    }
     if (isFound) {
    res.json ({msg: "Deleted with sucess" }); 
    } else {
        res.json ({ msg:"Chef Not Found"});
    }
});

//Business Logic : Search Chefs by exprience

app.get("/chefs/search/:exprience", (req, res) => {

    console.log("Search chefs by expriences");
    //get exprience from param
    let exprience = req.params.exprience;
    let foundChefs = [];
    for (let i = 0 ; i < chefsTab.length; i++) {
        if (chefsTab[i].exprience >= exprience){
            foundChefs.push(chefsTab[i]);
    }
}

if (foundChefs.length == 0) {

    res.json({msg:"No chefs found"});
 } else {
        res.json({ chefs: foundChefs })
    }
});


//app.Http_METH("/PATH",(req, res) => {});

//Business Logic :Get all Users

app.get("/users",(req, res) => {
    console.log("Business Logic : Get ALL Users"); 
    // response
    res.json({users :usersTab});
});

//Business Logic : Add User
app.post("/users",(req, res) => {
   console.log("Business Logic : Add Users",req.body);
   let user = req.body;
   usersTab.push(user);
   res.json({ msg : "Added with success"});
});

//Business Logic : Edit User

app.put("/users/:id",(req, res) => {
    console.log("Business Logic : Edit Users");
});

//Business Logic : Get User  By id
// :id :m'id est une parametre (variable)

app.get("/users/:id",(req, res) => {
    console.log("Business Logic : Get User By ID",req.params.id);
    let userId = req.params.id; //userId la valeur de l'id de l'objet a chercher
    let foundUser = {};
    for (let i = 0; i < usersTab.length;i++) {
        if(usersTab[i].id == userId) {
            foundUser = usersTab[i];
            break;
        }
    }
    res.json({ user: foundUser});
});

//Business Logic : DELETE User By id
app.delete("/users/:id",(req, res) => {
    console.log("Business Logic : Delete User By ID ");
    let userId= req.params.id;
    let isFound = false;

    for (let i = 0 ;i < usersTab.length; i++ ) {
        if(usersTab[i].id == userId) {
            usersTab.splice(i, 1);
            isFound = true;
            break;
        }
    }
     if (isFound) {
    res.json ({msg: "Deleted with sucess" }); 
    } else {
        res.json ({ msg:"User Not Found"});
    }
});

// make app importable
module.exports = app;



