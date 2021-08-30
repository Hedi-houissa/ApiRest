//express require
const express = require("express");

//require router
const router = express.Router();

//require model
const User = require("../model/User");

//require controllers
const controllers = require("../controllers/userContole")

/**
 * @description : add user
 * @method : post
 * @path : http://localhost:7000/user/
 * @data : req.body
 */

router.post("/", controllers.addUser);

/**
 * @description : get users
 * @method : get
 * @path : http://localhost:7000/user/
 * @data : no
 */

router.get("/",controllers.getUsers)

/**
 * @description : update user
 * @method : updateone
 * @path : http://localhost:7000/user/
 * @data : req.body
 */

 router.put("/:_id",controllers.updateUser)


/**
 * @description : delete user
 * @method : deleteOne
 * @path : http://localhost:7000/user/
 * @data : req.params
 */

 router.delete("/:_id",controllers.deleteUser)


module.exports = router ;
