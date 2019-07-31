const express=require('express');
const app=express();
const multer=require('multer');
const bodyParser=require('body-parser');
const morgan=require('morgan');


const fileRoutes=require('./routes/file');



app.use((req,res,next)=>{

    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');

    if(req.method==='OPTIONS'){

        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});

    }
    next();

});


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/file',fileRoutes);

module.exports=app;




