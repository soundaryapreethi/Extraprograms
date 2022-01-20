const os=require('os');


console.log('total free memory inside your system is:',os.freemem()/100000000);
console.log('Home Directory :', os.homedir());
console.log('Platform:', os.platform());
console.log('Network interface :',os.networkInterfaces());