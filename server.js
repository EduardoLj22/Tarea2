const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog.js');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

// Import custom middleware, "clog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

// Create a GET method for /api/reviews that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  console.log('GET request to /api/reviews received');
  res.json({ message: 'GET request to /api/reviews' });
});

// Create a POST request for /api/reviews that logs when a user's request has been received
app.post('/api/reviews', (req, res) => {
  console.log('POST request to /api/reviews received');
  res.json({ message: 'POST request to /api/reviews' });
});

// Create a GET request for /api/upvotes that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  console.log('GET request to /api/upvotes received');
  res.json({ message: 'GET request to /api/upvotes' });
});

// Create a POST request for /api/upvotes that logs when a user's request has been received
app.post('/api/upvotes', (req, res) => {
  console.log('POST request to /api/upvotes received');
  res.json({ message: 'POST request to /api/upvotes' });
});

// Wildcard route to handle 404 errors
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);