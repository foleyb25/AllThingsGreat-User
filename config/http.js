/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */
 const fs = require('fs-extra')
 const express = require('express');
 module.exports.http = {
 
   /****************************************************************************
   *                                                                           *
   * Sails/Express middleware to run for every HTTP request.                   *
   * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
   *                                                                           *
   * https://sailsjs.com/documentation/concepts/middleware                     *
   *                                                                           *
   ****************************************************************************/
   middleware: {
 
     /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP requests.           *
     * (This Sails app's routes are handled by the "router" middleware below.)  *
     *                                                                          *
     ***************************************************************************/
 
    order: [
     'cookieParser',
     'session',
     'bodyParser',
     'compress',
     'poweredBy',
     'router',
     'www',
     'favicon',
     'forceSSL',
     'forceSSLOnExpress'
   ],

  forceSSL: (function (){
    console.log("Inside of force SSL")
    return function (req,res,next) {
      if(req.isSocket) {
        console.log("Connection Is Websocket, apend wss://")
        return res.redirect('wss://' + req.headers.host + req.url);
      } else if (req.headers["x-forwarded-proto"] != "https") {
        console.log("Connection Is http, apend https://")
        return res.redirect('https://' + req.headers.host + req.url);
      } else {
        console.log("Connection Is Secure, moving along...")
        next();
    };
      
    } 
  })(),

  forceSSLOnExpress: (function (){
    console.log("force SSL on Express app")
    return function(req,res,next) {
      const app = express()
      app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https')
          res.redirect(`https://${req.header('host')}${req.url}`)
        else
          next()
      })
  }
  })(),


 
 
 
     /***************************************************************************
     *                                                                          *
     * The body parser that will handle incoming multipart HTTP requests.       *
     *                                                                          *
     * https://sailsjs.com/config/http#?customizing-the-body-parser             *
     *                                                                          *
     ***************************************************************************/
 
     // bodyParser: (function _configureBodyParser(){
     //   var skipper = require('skipper');
     //   var middlewareFn = skipper({ strict: true });
     //   return middlewareFn;
     // })(),
 
   },
 
 };