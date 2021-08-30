const { model } = require("mongoose");
const User = require("../model/User");

//add user
const addUser = async(req,res)=>{
    try {
        //  recuperier details
        const newUser = req.body;
        // validate schema
        const userToAdd = new User(newUser);
        // save user
        await userToAdd.save();
        //get responce
        res.status(200).send({ msg: " add succes", userToAdd });
      } catch (error) {
          res.status(400).send({msg:"can note add"})
      }
}

//get all

const getUsers=async(req,res)=>{
    try {
        const allUsers = await User.find();
        res.status(200).send({ msg: "all persons ..." ,allUsers});
      } catch (error) {
        res.status(400).send({ msg: "can not find All person ", error });
      }
     
}

const deleteUser = async (req, res) => {
    console.log(req.params.id);
    try {
      const  {_id} = req.params;
      const userToFind = await User.findOne({ _id });
      console.log(userToFind);
      if (!userToFind) {
        return res.status(400).send({ msg: "user not exist !!!" });
      }
  
      await User.deleteOne({ _id });
      res.status(200).send({ msg: "user deleted succ .." });
    } catch (error) {
      res.status(400).send({ msg: "can not delete user with this id ", error });
    }
  }

// update
const updateUser = async (req, res) => {
    try {
      const { _id } = req.params;
      const newUser = req.body;
      const result = await User.updateOne({ _id }, {...newUser });
      if (result.modifiedCount === 0) {
        return res.status(400).send({ msg: "alredy updated" });
      }
      if(!result.acknowledged){
        return res.status(400).send({ msg: "can not update with this information" });
      }
      res.status(200).send({ msg: "contact updated succ ..." });
    } catch (error) {
      res
        .status(400)
        .send({ msg: "can not update contact with this id !!!", error });
    }
  };

  module.exports = Controllers ={
      addUser,
      getUsers,
      deleteUser,
      updateUser
  } 