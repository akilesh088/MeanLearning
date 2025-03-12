

const express=require('express');
const app=express();
const port=3000;

// // Creating API



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






// DAY-13 from here
// View Engine

// 1.pug

// app.set('view engine','pug');
// app.set('views','./views');

// app.get('/',(req,res)=>{
//     res.render('index',{title:'Home',name:'Express user'})
// });

// 2.usng Ejs

// app.set('view engine','ejs');
// app.set('views','./views');

// app.get('/',(req,res)=>{
//     res.render('index',{title:'Welcome',name:'Welcome to Ejs Engine'})
// });

// 3.HandleBar engine

// app.set('view engine','hbs');
// app.set('views','./views');

// app.get('/',(req,res)=>{
//     res.render('index',{title:'Welcome',name:'Welcome to Hbs view Engine'})
// });

// Helmet
// helmet is a third party middle ware.we need to install
// used for protection purposes
// used to protect the express applicaton from external attacks

// Using helmet middleware to secure http headers

// const helmet=require('helmet');

// app.use(helmet(
//     {
//         contentSecurityPolicy:false,
//         strictTransportSecurity:true
//     }
// ));

// app.get('/',(req,res)=>{
//     res.json({'name':'akil','age':21})
// });

// Application lvl middleware that logs request details

// app.use((req,res,next)=>{
//     console.log(`${req.method} request to ${req.url}`);
//     next();
// });
// app.get('/',(req,res)=>{
//     res.send('Home page');
// });
// app.get('/About',(req,res)=>{
//     res.send('About page');
// });

// Router level middleware

// const router = express.Router();
// router.use((req,res,next)=>{
//     console.log('Time:',Date.now())
//     next();
// })

// router.get('/',(req,res)=>{
//     res.send('Home page');
// });
// app.use('/router',router);

// Error  handling
// app.use((err,req,res,next)=>{
//     console.error(err.stack);
//     res.status(500).send('Something Went Wrong!');
// });
// // route to trigger error

// app.get('/',(req,res)=>{
//     throw new Error('Test Error');
// });

// Built in middleWare to parse JSON body

// app.use(express.json());

// app.post('/submit',(req,res)=>{
//     console.log(req.body);
//     res.send('data received');
// });


// morgon is used for login purposes
// it is a built in middle ware need to be installed

// const morgan=require('morgan');

// app.use(morgan('tiny'));

// app.get('/',(req,res)=>{
//     res.send('Morgan is logging our request!')
// });

// cors origin

// const cors= require('cors');

// app.use(cors());

// app.get('/data',(req,res)=>{
//     res.json({message:'CORS-enabled route'})
// });

// Custom middleWare

// creating custom middle ware
// const addTimeStamp=(req,res,next)=>{
//     req.reuestTime=new Date();
//     next();
// }

// // using custom middleware
// app.use(addTimeStamp);
// app.get('/',(req,res)=>{
//     res.send(`Request received at ${req.resuestTime}`)
// });

// Chaining multiple MiddleWares

// First middleware
// const firstMiddleware = (req, res, next) => {
//   console.log('First middleware');
//   next(); // Pass to the next middleware
// };

// // Second middleware
// const secondMiddleware = (req, res, next) => {
//   console.log('Second middleware');
//   next(); // Pass to the route handler
// };

// // Use multiple middleware functions in the same route
// app.get('/', secondMiddleware, firstMiddleware, (req, res) => {
//   res.send('Chaining middleware is fun!');
// });
  

// Sending JSON data  

// app.get('/basic-json',(req,res)=>{
//     const data={message:"hello, this is a json resopnse"}
//     res.json(data);
// });

// // Redirecting the pages

// app.get('/about',(req,res)=>{
//     res.redirect('/basic-json');
// });

// Json with status

// app.get('/json-with-status',(req,res)=>{
//     const data={message:'Everything is ok'};
//     res.status(200).json(data); 
// });

// app.get('/json-with-error', (req, res) => {
//     const errorData = { error: "Resource not found" };
//     res.status(404).json(errorData);  // 404 Not Found status
//   });

// Nested JSON Objects and Array

// const data={
//     user:{
//         id:1,
//         name:'Akil',
//         email:'akil@gmail.com'
//     },
//     role:['admin','editor']
// };
// app.get('/nested-json',(req,res)=>{
    
//     res.json(data);
// })

// json using Query 

// app.get('/user',(req,res)=>{
//     const userId=req.query.id;
//     const data={
//         user:{
//             id:userId,
//             name:`User ${userId}`
//         }
//     };
//     res.json(data);
// });

// Responding with Json data

// app.get('/check-status',(req,res)=>{
//     const status =req.query.status;
//     if(status ==='success'){
//         res.status(200).json({message:'Operation sucessful'});
//     }else{
//         res.status(404).json({error:'Bad request'});
//     }
// })

// Responding to larger json data

// app.get('/large-json',(req,res)=>{
//     req.rawListeners('{"data":[');
//     for(let i=1;i<=1000;i++){
//         res.write(JSON.stringify({id:i,name:`Item ${i}`}));
//         if(i<1000)res.write(',');
//     }
//     res.write(']}');
//     res.end();
// });


// Responding using middeleware

// rendering texts in hbs


// app.set('view engine','hbs');
// app.set('views','./views');

// hbs.registerPartials(__dirname +'/views/partials');

// app.get('/',(req,res)=>{
//     res.render('index', { title: 'Home Page', message: 'Welcome to Express with Handlebars and Partials!', title1: 'Header Title', message1: 'This is the Header Bar Message' });
// })

// rendering texts in ejs

app.set('view engine','ejs');
app.set('views','./views');

ejs.registerPartials( __dirname +'/views/partials');

app.get('/',(req,res)=>{
    res.render('header', { title: 'Home Page', message: 'Welcome to Express with Handlebars and Partials!', title1: 'Header Title', message1: 'This is the Header Bar Message' });
})




app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});