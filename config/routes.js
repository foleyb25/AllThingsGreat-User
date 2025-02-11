/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  
  //CUSTOM
  'GET /':                   { action: 'view-homepage'},
  'PUT /paginate':           { action: 'view-homepage-paginate', csrf: false},
  'PUT /entertainment/search': {action: 'entertainment/search', csrf: false},
  'GET /blog/view/:blogId':  { action: 'blog/view'},
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },

  // 'GET /faq':                { action:   'view-faq' },
  // 'GET /legal/terms':        { action:   'legal/view-terms' },
  // 'GET /legal/privacy':      { action:   'legal/view-privacy' },
  'GET /contact':            { action:   'view-contact' },
  'GET /about':              { action:   'view-about-us' },
  'GET /bloggers':           { action:   'view-bloggers' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview'},
  'GET /account/password':   { action: 'account/view-edit-password'},
  'GET /account/profile':    { action: 'account/view-edit-profile' },


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  // '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password', csrf: false },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile', csrf: false },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card', csrf: false },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login', csrf: false },
  // 'POST   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup', csrf: false },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email', csrf: false },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login', csrf: false },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message', csrf: false },

  // CUSTOM ROUTING
  'PUT /blog/submitrating': {action: 'blog/submitrating', csrf: false},
  'PUT /comment/upvote': {action: 'comment/upvote', csrf: false},
  'PUT /comment/downvote': {action: 'comment/downvote', csrf: false},

  'GET /allthingsgreat': 'allthingsgreat/home',
  'GET /entertainment': 'entertainment/entertainment',
  'GET /gaming': 'gaming/home',
  'GET /investments': 'investments/home',
  'GET /outdoors': 'outdoors/home',
  'GET /sports': 'sports/home',
  'GET /history': 'history/home',

  'GET /review/screenplays': 'reviews/screenplay-review-list',
  'PUT /review/screenplays/paginate': {action: 'reviews/screenplay-review-list-paginate', csrf: false},
  'GET /review/screenplay/details/:id': 'reviews/screenplay-review-details',

  'POST /comment/blog/:id': {action: 'comment/create', csrf: false},

  'DELETE /feeditem/:id': 'feeditem/delete',

  'POST /like/:id': 'feeditem/like',
  'POST /dislike/:id': 'feeditem/dislike',

  'GET /likes/:id': 'blog/likes',

  'GET /search': 'user/search',
  'POST /follow/:id': 'user/follow',
  'POST /unfollow/:id': 'user/unfollow',

  'GET /user/:id': 'user/publicprofile',

  'POST /profile': {action: 'user/update'},

};
