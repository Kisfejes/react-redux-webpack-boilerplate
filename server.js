const path = require('path');
const express = require('express');
const app = express();

const mode = process.env.NODE_ENV;
const port = 7000;

if (mode === 'development') {
  const morgan = require('morgan');
  const webpack = require('webpack');
  const config = require('./webpack/webpack.dev.conf.js');
  const compiler = webpack(config);
  // compiler.run((err, stats) => {
  //   console.log(stats.toString('minimal'));
  // });
  //

  app.use(morgan('dev'));

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}
if (mode === 'production') {
  app.use(express.static('dist'));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(path.join(__dirname, '/src/index.html')));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server started at: http://localhost:${port}`);
});
