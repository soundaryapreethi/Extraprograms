const express=require("express");
const app = express();

const port=process.env.PORT ||8080

app.use(express.json());

app.get("/",(req,res) =>{
    res.send("hello");

});
app.get("/:a/:b",(req,res) =>{
    res.send(`sum=${parseInt(req.params.a)+parseInt(req.params.b)}`);
});

app.post('/hii',(req,res) =>{
    let body=req=req.body;
    res.send(body.msg);
});

app.listen(port,()=>{
    console.log(`app is running ${port}`);
});