const express=require('express');
const router=express.Router();
const multer=require('multer');



const storage=multer.diskStorage({

    destination:function(req,file,cb){
        cb(null,'./uploads/');

    },

    filename:function(req,file,cb)
    {
        cb(null,file.originalname);
    }
   



});

const filefilter=(req,file,cb)=>{

    //reject the file
        
    if(file.mimetype==="image/jpeg"||file.mimetype==="image/png")
    {

    }
    cb(null,false);
    cb(null,true);

}


const upload=multer({storage:storage,limits:{
    fileSize:1024*1024*5
},
filefilter
});


router.post('/',upload.single('productImage'),(req,res,next)=>{
    console.log("kk");

    console.log(req.file);
});




module.exports=router;


