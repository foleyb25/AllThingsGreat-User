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
     'forceSSL',
     'cookieParser',
     'session',
     'bodyParser',
     'compress',
     'poweredBy',
     'router',
     'www',
     'favicon',
   ],

  forceSSL: (function (){
    console.log("Inside of force SSL")
    return function (req,res,next) {
      if(req.headers["x-forwarded-proto"] != "https") {
        console.log("Connection Is http, apend https://")
        return res.redirect('https://' + req.headers.host + req.url);
      } else if(req.headers["X-Forwarded-Proto"] != "https"){ 
        console.log("Connection Is http, apend https://")
        return res.redirect('https://' + req.headers.host + req.url);
      } else {
        console.log("Connection Is Secure, moving along...")
        next();
    };
      
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