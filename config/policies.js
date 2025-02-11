/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  '*': ['is-ssl'],

  // Bypass the `is-logged-in` policy for:
  // '*': true,
  // 'entrance/*': true,
  // 'account/logout': true,
  // 'view-homepage': true,
  // 'view-faq': true,
  // 'view-contact': true,
  // 'legal/view-terms': true,
  // 'legal/view-privacy': true,
  // 'deliver-contact-form-message': true,

  AccountController: {
    '*': 'is-logged-in'
  }

};
