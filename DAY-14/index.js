

// // Connecting to Atlas server

// const { MongoClient } = require('mongodb');
 
// // Connection URI (replace <password> with your password)
 
// const uri = "mongodb+srv://akilakilesh880:akilesh2003@cluster0.aeg20.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();
// // Select a database
//     const database = client.db("sampleDB");
//     // Select a collection
//     const collection = database.collection("collection");
//     // await insertDocument(collection);
//     // await searchDocument(collection);
//     // await updateDocument(collection);
//     // await deleteDocument(collection);
 
//     // Perform operations (e.g., insert)
//   } finally {
//     // Close the connection
//     await client.close();
//   }
// }
   
//   run().catch(console.error);
 
 
//  //insert Document function
// async function insertDocument(collection) {
//   const doc = {
//     name: "John Doe",
//     age: 29,
//     address: "123 Main St"
//   };
 
//   const result = await collection.insertOne(doc);
//   console.log(`Document inserted with _id: ${result.insertedId}`);
// }

// // Search for a document

// async function searchDocument(collection){
//     const cursor =collection.find({name:'John Doe'});
//     const results=await cursor.toArray();
 
//     if(results>0){
//         console.log("found documents");
//         results.forEach((doc,idx)=>console.log(`${idx+1}.${doc.name},Ahe:${doc.age}`));
//     }
//     else{
//         console.log("doc not found")
//     }
//   }
 
// // Updating the Age

// async function updateDocument(collection) {
//     const filter={name:'John Doe'};
//     const updateDoc={
//         $set:{
//             age:30
//         }
//     };

//     const result=await collection.updateOne(filter,updateDoc);
//     console.log(`Matched${result.matchedCount} documents(s),Updated${result.modifiedCount}document(s)`);
// }

// // Deleting document

// async function deleteDocument(collection) {
//     const filter={name:'John Doe'};
//     const deleteDoc={
//         $set:{
//             age:30
//         }
//     };

//     const result=await collection.deleteOne(filter,deleteDoc);
//     console.log(`Deleted${result.deletedCount} documents(s)`);
// }

 
// Connecting to MongoDB Compass

// const mongoose= require('mongoose');

// mongoose.connect('mongodb://localhost:27017/myDatabase',{

// })
// .then(()=> console.log('MongoDB connected...'))
// .catch(err =>console.log('Failed to connect',err));


// // Defining a schema

// const userSchema= new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number,
//     create_at:{type:Date,default:Date.now}
// })

// // Creating a model 
// const User=mongoose.model('User',userSchema);

// Store data 

// const newUser= new User({
//     name:'sohn',
//     email:'sadh@gmail.com',
//     age: 34
// });


// // Save a new user
// newUser.save()
// .then(()=> console.log('Saved new user...'))
// .catch(err =>console.log('Failed to save',err));

// // Fetch a user
// User.find()
// .then(user => console.log(user))
// .catch(err =>console.log('Failed to Fetch',err));

// Update a user

// User.findOneAndUpdate({email:'gggg@gmail.com'},{age:26},{new:true})
// .then(user =>console.log('Updated user:',user))
// .catch(err =>console.log('Failed to Update',err));

// Delete a User

// User.findOneAndDelete({email:'sadh@gmail.com'})
// .then(user =>console.log('Updated user:',user))
// .catch(err =>console.log('Failed to Update',err));



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/task', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());



// Routes
app.use('/api', require('./routes/task'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});