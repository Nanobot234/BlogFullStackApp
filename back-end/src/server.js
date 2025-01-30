import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import admin from 'firebase-admin';
import fs from 'fs';

const credentials = JSON.parse(fs.readFileSync('./credentials.json'));

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

/**
 * @fileoverview This file sets up an Express server and defines a route handler.
 */

/**
 * Create an Express app instance.
 * @const {Object} app - The Express app instance.
 */
const app = express();

/**
 * Middleware to parse JSON bodies.
 */
app.use(express.json());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, {  serverApi: ServerApiVersion.v1 });

// console.log('Connecting to MongoDB');
// client.connect(async err => {
//   if (err) {
//     console.error('Failed to connect to MongoDB', err
//     );
//     process.exit(1);
//   }

  //303_Start
  
  // console.log('Connected to MongoDB');
  // const db = client.db('myDatabase'); // Specify the database name here
  // const articlesCollection = db.collection('articles');


  const articleInfo = [
    { name: 'learn-node', upvotes: 0, comments: [] },
    { name: 'learn-react', upvotes: 0, comments: [] },
    { name: 'mongodb', upvotes: 0, comments: [] },
  ]
  

 // const articlesArray = Object.values(articleInfo);

  // Insert the documents into the collection
  // try {
  //   await articlesCollection.insertMany(articlesArray);
  //   console.log('Articles inserted into the database');
  // } catch (insertErr) {
  //   console.error('Failed to insert articles', insertErr);
  // }
  
  // Define your routes

  let db;

  async function connectToDB() {
    const uri = 'mongodb://127.0.0.1:27017';

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
  
    await client.connect();
  
     db = client.db('full-stack-react-db');
  
    
  }
  app.get('/hello', function(req, res) {
    res.send('Hello, World!');
  });

  app.get('/hello/:name', function(req, res) {
    res.send(`Hello, ${req.params.name}!`);
  });

  app.post('/hello', function(req, res) {
    res.send(`hello, ${req.body.name} from a POST endpoint`);
  });

  app.get('/api/articles/:name', async function(req, res) {
    const { name } = req.params;
  const article = await db.collection('articles').findOne({ name });
    res.json(article);
  });


  //called for each request that hasnt bendled yet
  app.use(async function(req, res, next) {
      const { authorization } = req.headers; // Get the authorization header from the request


  });

  app.post('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;
  
    const updatedArticle = await db.collection('articles').findOneAndUpdate({ name }, {
      $inc: { upvotes: 1 }
    }, {
      returnDocument: "after",
    });
  
    res.json(updatedArticle);
  });
  
  // app.post('/api/articles/:name/upvote', async function(req, res) {
  //   const articleName = req.params.name;
  //   const result = await articlesCollection.updateOne(
  //     { articleName },
  //     { $inc: { upvotes: 1 } },
  //     { upsert: true }
  //   );
  //   const updatedArticle = await articlesCollection.findOne({ articleName });
  //   res.json(updatedArticle);
  // });

  app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const newComment = { postedBy, text };

    const updatedArticle = await db.collection('articles').findOneAndUpdate({ name }, {
      $push: { comments: newComment }
      
    }, {
      returnDocument: "after",
    });

    res.json(updatedArticle); // Return the updated article with the new comment to the client
    
    

  //Followijng is previous code
    // const article = articleInfo.find(a => a.name === name);
  
    // article.comments.push({
    //   postedBy,
    //   text,
    // });
  
    // res.json(article);
  });

async function start(params) {
  await connectToDB(); //Remember neeed to specify defgault data directory using --dbpath!
  app.listen(8000, () => {
    console.log('Server is running on port 8000');
  });
}

start();
  


// });