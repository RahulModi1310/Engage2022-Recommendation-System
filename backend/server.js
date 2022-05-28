const dotenv = require('dotenv')
const app = require('./app');
const DB = require('./database');

dotenv.config();


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Server Started on Port', PORT);
})