  /**
 * is-logged-in
 *
 * A simple policy that allows any request from an authenticated user.
 *
 * For more about how to use policies, see:
 *   https://sailsjs.com/config/policies
 *   https://sailsjs.com/docs/concepts/policies
 *   https://sailsjs.com/docs/concepts/policies/access-control-and-permissions
 */
module.exports = async function (req, res, proceed) {

    console.log(req.url)
    if(req.headers["x-forwarded-proto"] != "https" && req.headers.host != "localhost:1337"){ 
      console.log("Connection Is http, apend https://")
      console.log('https://'+req.headers.host + req.url)
      return res.redirect('https://' + req.headers.host + req.url);
    } else {
      console.log("Connection Is Secure, moving along...")
      proceed();
    }

};