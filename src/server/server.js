import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';

import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers';
import initialState from '../frontend/initialState';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));

}

const setResponse = (html, preloadedState) => {
  return (`
    <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="assets/app.css" type="text/css">
          <title>Platzi Video</title>
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="assets/app.js" type="text/javascript"></script>
        </body>
      </html>
    `
  )
}

// renderiza y todo lo convierte en string
const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloaderState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>
  )

  res.send(setResponse(html, preloaderState));
}

app.get('*', renderApp);

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${PORT} and enviroment ${ENV}`);
});
