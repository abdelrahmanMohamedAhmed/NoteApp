const express=require("express");
const router =express.Router(); 
const notsCtrl=require("../controller/noteController");

router.get("/notes",notsCtrl.getAllNotes);
router.post("/notes/save",notsCtrl.saveNotes);
router.put("/notes/delet",notsCtrl.deletNotes);
router.delete("/notes/update/:id",notsCtrl.updateNotes);

module.exports=router;