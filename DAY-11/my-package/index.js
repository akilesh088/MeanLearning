// // Postman Connection
// const htp=require('http');
// const server= htp.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-type','text/plain');
//     res.end('Hello,World!\n');
// });

// server.listen(3000,()=>{
//     console.log('Server runs at https://localhost:3000/');
// });
// // Finding path and extension of a file.
// const path=require('path');

// const filePath=path.join(__dirname,'files','example.txt');
// console.log('file Path:',filePath);

// const fileName=path.basename(filePath);
// console.log('FileName:',fileName);

// const ext=path.extname(fileName);
// console.log('Extension:',ext);

// // Exploring OS 

// const os=require('os');
// console.log('Operating system',os.type());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.platform());

// // CPU informations

// const Event=require('events');
// const { buffer } = require('stream/consumers');

// // create an event emitter instance

// const emitter=new Event();

// emitter.on('greet',(name)=>{
//     console.log(`hello,${name}`);
// });
// emitter.emit('greet','john');


// Buffer Module
// four types
// 1.readable
// 2.writeable

// const buffer=require('buffer');
// console.log(buffer.toString())

// const emptybuffer=Buffer.alloc(5);
// console.log(emptybuffer);

// Crypto module

// const crypto=require('crypto');

// const hash=crypto.createHash('sha256').update('Helloworld').digest('hex');
// console.log(hash);

// // Random token Generation
// crypto.randomBytes(16,(err,buffer)=>{
//     if(err)throw err;
//     console.log("Random token",buffer.toString('hex'));
// });

// // Public and Private Key generation
// const {publicKey,privateKey}=crypto.generateKeyPairSync('rsa',{ modulusLength:2048});
// console.log('Public Key:',publicKey.export({type:'pkcs1',format:'pem'}));
// console.log('Private Key:',privateKey.export({type:'pkcs1',format:'pem'}));

// //  For Encryption and Decryption

// function encryptData(data){
//     return crypto.publicEncrypt(publicKey,Buffer.from(data).toString('base64'));
// };

// function decryptData(encryptData){
//     return crypto.privateDecrypt(privateKey, Buffer.from(encryptData, 'base64')).toString()
// }

// const message= "Confidential data";
// const encryptMessage=encryptData(message);
// console.log('Encrypted:',encryptMessage);
// const decryptMessage=decryptData(encryptMessage);
// console.log('Decrypted:',decryptMessage);

// // Password Hashing

// const password='secure';
// const salt=crypto.randomBytes(16).toString('hex');
// crypto.pbkdf2(password,salt,100000,64,'sha512',(err,derivedKey)=>{
//     if(err)throw err;
//     console.log('Derived Key:',derivedKey.toString('hex'))
// })


// URL module

// const {URL}=require('url');

// const myUrl=new URL('https://example.com:8080/path?name=nodejs#hash');

// console.log(myUrl.href+'\n')
// console.log(myUrl.protocol+'\n')
// console.log(myUrl.host+'\n')
// console.log(myUrl.hostname+'\n')
// console.log(myUrl.port+'\n')
// console.log(myUrl.pathname+'\n')
// console.log(myUrl.search+'\n')
// console.log(myUrl.hash+'\n')
// console.log(myUrl.origin)

// // Formatting the URL

// myUrl.pathname='/api/user'
// myUrl.searchParams.append('id','123')
// myUrl.searchParams.append('status','active')
// console.log(myUrl.toString());
// myUrl.searchParams.delete('id');
// console.log(myUrl.toString());

// Resolving Url

// const url=require('url')
// const baseUrl='https://example.com/home/';

// const relativePath='../about';
// const resolvedUrl=url.resolve(baseUrl,relativePath)
// console.log(resolvedUrl);
// const resolvedurl1=new URL('../about','https://example.com/home/')
// console.log(resolvedurl1);

// Zlib module Comprressing and Decompressing 

// const zlib=require('zlib')

// const input='Hello this is a string';

// zlib.gzip(input, (err,compressed)=>{
//     if(err) throw err
//     console.log('Compressed:',compressed.toString('base64'))

//     zlib.gunzip(compressed,(err,decompressed)=>{
//         if(err) throw err
//         console.log('Decompressed:',decompressed.toString())
//     });
// });

// // File compression

// const fs=require('fs')
// const inputFile='example.txt';

// const compressedFile='example.txt.gz';
// const decompressedFile='output.txt'

// fs.createReadStream(inputFile)
// .pipe(zlib.createDeflate())
// .pipe(fs.createWriteStream(compressedFile))
// .on('finish',()=>{
//     console.log('File compressed successfully')

//     // Decompress file

//     fs.createReadStream(compressedFile)
//     .pipe(zlib.createInflate())
//     .pipe(fs.createWriteStream(decompressedFile))
//     .on('finish',()=> console.log('File decompressed sucessfully'))
// });

// // Define a function
// function sayHi() {
//     return 'Hi!';
// }
//  // https://dontpad.com/nodejs-2-day


// // Add to exports

// exports.sayHi = sayHi;

// // Overwrite module.exports with an object
// module.exports = {
//     message: 'Welcome!',
//     status: 'Active'
// };
// // Using the Module

// Import the module

// const combined = require('./combined');

// // Access properties
// console.log(combined.message); // Output: Welcome!
// console.log(combined.status);  // Output: Active
// console.log(combined.sayHi); // This will be undefined


// Modules are singleto
// const db1 = require('./combined');
// console.log(db1.connection); // Output: {} (simulated connection)

// // app2.js

// const db2 = require('./combined');
// console.log(db2.connection); // Output: {} (same instance as db1)



// const config = require('./combined');
// console.log(config.apiEndpoint); // Output: 'https://api.example.com'

// // app2.js


// config.apiEndpoint = 'https://api.newurl.com'; // Modifying the config

// console.log(config.apiEndpoint); // Output: 'https://api.newurl.com'


const myModule = require('./lib/myModules.js');

module.exports = {
    myFunction: myModule.myFunction,
    myAsyncFunction:myModule.myAsyncFunction
};