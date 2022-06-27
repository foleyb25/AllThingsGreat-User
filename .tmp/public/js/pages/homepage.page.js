'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

parasails.registerPage('homepage', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    blogs: window.SAILS_LOCALS.blogs,
    pageNum: window.SAILS_LOCALS.pageNum,
    moreBlogs: window.SAILS_LOCALS.moreBlogs,
    isMore: window.SAILS_LOCALS.isMore
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function beforeMount() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    paginate: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var nextPage, formData, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log("Paginate");
                nextPage = this.pageNum + 1;
                formData = new FormData();

                formData.append('pageNum', nextPage);
                _context2.prev = 4;
                _context2.next = 7;
                return axios.put('/paginate', formData);

              case 7:
                res = _context2.sent;

                this.isMore = res.data.isMore;
                this.blogs.push.apply(this.blogs, res.data.moreBlogs);
                this.pageNum = nextPage;
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2['catch'](4);

                console.error(_context2.t0.toString());

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 13]]);
      }));

      function paginate() {
        return _ref2.apply(this, arguments);
      }

      return paginate;
    }()

  }
});
