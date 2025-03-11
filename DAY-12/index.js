const express=require('express');
const app=express();


// // Creating API

const port=3000;

// // get in express

// app.get('/about',(req,res)=>{
//     res.send('This is About page');
// });

// // post in express

// app.post('/submit',(req,res)=>{
//     res.send('data submitted sucessfully');
// })

// // put in express

// app.put('/update',(req,res)=>{
//     res.send('data updated sucessfully');
// });

// // delete in express

// app.delete('/delete',(req,res)=>{
//     res.send('Deleted sucessfully');
// });

// // listen in express

// app.listen(port,()=>{
//     console.log(`server running in port ${port} `)
// });


// Before Express.js 

// const http=require('http');
// const url=require('url')

// const server=http.createServer((req,res)=>{
//     const path=url.parse(req.url,true).pathname;

//     if(path === '/'){
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end('welcome to Home Page');
//     }else if(path === '/about'){
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end('welcome to About Page');
//     }else{
//         res.writeHead(404,{'Content-Type':'text/plain'});
//         res.end('Page Not Found');
//     }
// });

// server.listen(3000,()=>{
//     console.log('Server is running on port 3000');
// });

// Sending a JOSN data to server
// app.get('/',(req,res)=>{
//     res.json({'Name':'Akil','Address':'Pune','Email':'123nu@gmail.com'})
// });

// Route parameter

// fetching data from server using ID

// app.get('/user/:id',(req,res)=>{
//     const userId = req.params.id;
//     res.send(`User Id is: ${userId}`)
// });

// app.get('/user1/:email',(req,res)=>{
//     const userEmail = req.params.email;
//     res.send(`User Email is: ${userEmail}`)
// });


// Query Parameter

// app.get('/search',(req,res)=>{
//     const search=req.query.term;
//     const search1=req.query.term1;
//     res.send(`Search term is ${search,search1}`)
// });

// Route multiple Methods

// app.route('/product')
// .get((req,res)=>{
//     res.send('Get a product');
// })
// .put((req,res)=>{
//     res.send('Add a product');
// })
// .post((req,res)=>{
//     res.send('Update the product');
// });

// Middleware in Routing

// const loggerMiddleware =(req,res,next)=>{
//     console.log(`Request made to: ${req.url}`);
//     next();
// };

// app.use(loggerMiddleware);

// app.get('/about',(req,res)=>{
//     res.send('About page');
// })

// const router = express.Router();

// router.get('/login', (req, res) => {
//     res.send('Login page');
//   });
  
//   router.get('/signup', (req, res) => {
//     res.send('Signup page');
//   });
  
//   app.use('/auth', router);

// Serving  Static Files in express
// S-1 Require path
// S-2 Use express.static middleware
// S-3 In public html ,css,script files


// const path=require('path');
// // app.use(express.static('public'));
// app.use(express.static(path.join('assetes')));

// Middleware and Rendering
// Types

// 1.Application level.once defined thing which can be used entire application 

// app.use((req,res,next)=>{
//     console.log('Time:',Date.now())
//     next();
// })

// app.get('/',(req,res)=>{
//     res.send('Home page');
// });

// 2.Router level

// const router1 = express.Router();
// router.use((req,res,next)=>{
//     console.log('Time:',Date.now())
//     next();
// })

// router.get('/',(req,res)=>{
//     res.send('Home page');
// });
// app.use('/router',router);

// 3.Error handling middleware (4 arguments)

// router1.use((err,req,res,next)=>{
//     console.error(err.stack);
//     res.status(500).send('Something went Wrong');
// })
// app.use('/router1',router1);

// 4.Built-in Middleware
// 5.Third-party Middleware

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});