const generator=require("../Util/generator")
const model=require('./model/note.model');
const memStorage=require("../Util//memory.storage");
const { json } = require("body-parser");

exports.getAllNotes=(req,res)=>{
    var values=memStorage.getValues(memStorage.store)
    res.status(200).send("your not : "+JSON.stringify(values));

};
exports.saveNotes=(req,res)=>{
    var seqId   = generator.generate();
   
    var title ="req.body.title"
    var content ="req.body.content";
    //when we use post or put the we need req.body to access body data of incoming request 
    var createdBy ="admin";
    var createdOn =new Date();
    if(!title&&!content)
    {
       return res.status(500).send({error:"title and contnt is mandatory"});
       //the server encountered an unexpected condition that prevented it from processing the request successfully
    }
    
    var newNote=new model.Note(seqId,title,content,createdBy,createdOn); 
    memStorage.store.setItem(seqId,newNote);
    //memestorage usage to set item with key and value
   return res.status(201).send("suscces note saved");
   //resource created succesfully (201)
    
};

exports.updateNotes=(req,res)=>{
    var id= req.params.id;//req.body.id;
    // in update case we need id from client
    var title =req.body.title
    var content =req.body.content;
    //when we use post or put the we need req.body to access body data of incoming request 
    var createdBy ="admin";
    var createdOn =new Date();
    if(!id)
    {
        return res.status(500).send({error:"ID of note is mandatory"});
    }
    if(!title&&!content)
    {
       return res.status(500).send({error:"title and contnt is mandatory"});
       //the server encountered an unexpected condition that prevented it from processing the request successfully
    }
    var newNote=new model.Note(id,title,content,createdBy,createdOn); 
    memStorage.store.setItem(seqId,newNote);
    //memestorage usage to set item with key and value
    res.status(201).send("suscces note saved");
   //resource created succesfully (201)
    res.send("update notttes");
};

exports.deletNotes=(req,res)=>{
    var id= req.body.id;
    //validate id not equal null
    if(!id)
    {
        return res.status(500).send({error:"ID of note is mandatory"});
    }
    var item = memStorage.store.getItem(id);
    
    //validate if this item exist or not
    if(!item)
    {
        return res.status(500).send({error:"this item dos not exist"});  
    }
    memStorage.store.removeItem(id);
    
    res.status(200).send("success delet notttes")
};