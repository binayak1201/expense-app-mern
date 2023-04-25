const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add-transection", addTransection);
//edit tansaction post method

router.post("/edit-transection", editTransection);
//delete transaction
router.post("/delete-transection", deleteTransection);


//get transections
router.post("/get-transection", getAllTransection);

module.exports = router;