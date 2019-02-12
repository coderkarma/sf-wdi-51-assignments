const express = require('express');
const app = express();

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// MIDDLEWARE
app.use(express.static(__dirname + '/public'));
console.log('Sanity Check: JS is working!');

// Making the get resquest at homepage and getting response hello world
app.get('/', (req, res) =>
  res.sendFile('views/index.html', {
    root: __dirname
  })
);

const albums = [
  {
    title: 'Cupid Deluxe',
    artist: 'Blood Orange'
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'Fake History',
    artist: 'letlive.'
  }
];

app.get('/api/albums', (req, res) => {
  res.json(albums);
});

//  Taquerias data
const taquerias = [
  {
    name: 'La Taqueria'
  },
  {
    name: 'El Farolito'
  },
  {
    name: 'Taqueria Cancun'
  }
];
app.get('/api/taquerias', (req, res) => {
  res.json(taquerias);
});

// Server listening at localHost: 3000
app.listen(3000, () => {
  console.log('Server is listening at localhost:3000');
});
