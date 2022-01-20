const http=require('http');
const fs=require('fs');

http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/html'});

    if(req.url ==='/home' || req.url ==='/' ){
        let data =fs.readFileSync('Static/index.html');
        res.write(data);
    }else if(req.url ==='/about' ){
        let data =fs.readFileSync('Static/about.html');
        res.write(data);
    }else if(req.url ==='/login' ){
        let data =fs.readFileSync('Static/login.html');
        res.write(data);
    }else if(req.url ==='/list' ){
        let data =fs.readFileSync('Static/list.html');
        res.write(data);  
    }else if(req.url ==='/register' ){
        let data =fs.readFileSync('Static/register.html');
        res.write(data); 
            
        
    }else{
        let data =fs.readFileSync('Static/error.html');
        res.write(data);
    }
    
    res.end();


}).listen(process.env.PORT,()=>{console.log('server started at port 8080')});

