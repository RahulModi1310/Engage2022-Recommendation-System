const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const AppError = require("./utils/appError");
const globalErrorHandler = require('./Controller/errorController');
const movieRouter = require("./Routes/moviesRoute");
const recommendedMovieRouter = require("./Routes/recommendedMovieRoute");

dotenv.config()

const app = express();

const allowList = [process.env.ALLOWED_URL_1, process.env.ALLOWED_URL_2]

var corsOptionsDelegate = function (req, callback) {
  var corsOptions = {
    credentials: true,
  };

  if (allowList.indexOf(req.header('Origin')) !== -1) {
    corsOptions.origin = true  // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions.origin = false // disable CORS for this request
  }

  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(express.json());
app.use(cors(corsOptionsDelegate));

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

app.use('/test', (req, res) => {
  res.send('Working')
});

app.use(express.json({ limit: "8mb" }));

//Routes
app.use('/api/v1/movie', movieRouter);
app.use('/api/v1/recommendmovies', recommendedMovieRouter);

app.use('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
});


//Global error handler
app.use(globalErrorHandler);

module.exports = app;
