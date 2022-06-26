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
    // 'forceSSL',
  ],

  // forceSSL: function (req, res, next) {

  //   if (req.isSocket) {
  //     return res.redirect('wss://' + req.headers.host + req.url);
  // } else if (req.headers["x-forwarded-proto"] == "http") {
  //     console.log("Forcing SSL")
  //     return res.redirect('https://' + req.headers.host + req.url);
  // } else {
  //     next(); //it's already secure
  // }
  },



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
