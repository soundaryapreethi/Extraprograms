const fs=require('fs');

/*fs.readFile('file1.txt',(err,data)=>{
    if(err === null){
        console.log(data.toString());

    }else{
        console.log(err.message);

    }
}
);*/

let d=fs.readFileSync('file1.txt');

fs.writeFile('file1.txt',d.toString() +'heloo',(err)=>{
    if(err === null){ 
        console.log('successfull');
    }else{
        console.log(err.message);

    }
 
});