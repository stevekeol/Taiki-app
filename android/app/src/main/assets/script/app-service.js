define("config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

var host = '14592619.qcloud.la';

var config = {
  // 下面的地址配合云端 Server 工作
  host: host,

  // 登录地址，用于建立会话
  loginUrl: 'https://' + host + '/login',

  // 测试的请求地址，用于测试会话
  requestUrl: 'https://' + host + '/testRequest',

  // 用code换取openId
  openIdUrl: 'https://' + host + '/openid',

  // 测试的信道服务接口
  tunnelUrl: 'https://' + host + '/tunnel',

  // 生成支付订单的接口
  paymentUrl: 'https://' + host + '/payment',

  // 发送模板消息接口
  templateMessageUrl: 'https://' + host + '/templateMessage',

  // 上传文件接口
  uploadFileUrl: 'https://' + host + '/upload',

  // 下载示例图片接口
  downloadExampleUrl: 'https://' + host + '/static/weapp.jpg'
};

module.exports = config;
});
define("page/API/pages/canvas/example.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var example = {};

example.rotate = function (context) {
  context.beginPath();
  context.rotate(10 * Math.PI / 180);
  context.rect(225, 75, 20, 10);
  context.fill();
};

example.scale = function (context) {
  context.beginPath();
  context.rect(25, 25, 50, 50);
  context.stroke();

  context.scale(2, 2);

  context.beginPath();
  context.rect(25, 25, 50, 50);
  context.stroke();
};

example.reset = function (context) {
  context.beginPath();

  context.setFillStyle('#000000');
  context.setStrokeStyle('#000000');
  context.setFontSize(10);

  context.setShadow(0, 0, 0, 'rgba(0, 0, 0, 0)');

  context.setLineCap('butt');
  context.setLineJoin('miter');
  context.setLineWidth(1);
  context.setMiterLimit(10);
};

example.translate = function (context) {
  context.beginPath();
  context.rect(10, 10, 100, 50);
  context.fill();

  context.translate(70, 70);

  context.beginPath();
  context.fill();
};

example.save = function (context) {
  context.beginPath();
  context.setStrokeStyle('#00ff00');
  context.save();

  context.scale(2, 2);
  context.setStrokeStyle('#ff0000');
  context.rect(0, 0, 100, 100);
  context.stroke();
  context.restore();

  context.rect(0, 0, 50, 50);
  context.stroke();
};

example.restore = function (context) {
  ;[3, 2, 1].forEach(function (item) {
    context.beginPath();
    context.save();
    context.scale(item, item);
    context.rect(10, 10, 100, 100);
    context.stroke();
    context.restore();
  });
};

example.drawImage = function (context) {
  context.drawImage('/image/wechat.png', 0, 0);
};

example.fillText = function (context) {
  context.setStrokeStyle('#ff0000');

  context.beginPath();
  context.moveTo(0, 10);
  context.lineTo(300, 10);
  context.stroke();

  // context.save()
  // context.scale(1.5, 1.5)
  // context.translate(20, 20)
  context.setFontSize(10);
  context.fillText('Hello World', 0, 30);
  context.setFontSize(20);
  context.fillText('Hello World', 100, 30);

  // context.restore()

  context.beginPath();
  context.moveTo(0, 30);
  context.lineTo(300, 30);
  context.stroke();
};

example.fill = function (context) {
  context.beginPath();
  context.rect(20, 20, 150, 100);
  context.setStrokeStyle('#00ff00');
  context.fill();
};

example.stroke = function (context) {
  context.beginPath();
  context.moveTo(20, 20);
  context.lineTo(20, 100);
  context.lineTo(70, 100);
  context.setStrokeStyle('#00ff00');
  context.stroke();
};

example.clearRect = function (context) {
  context.setFillStyle('#ff0000');
  context.beginPath();
  context.rect(0, 0, 300, 150);
  context.fill();
  context.clearRect(20, 20, 100, 50);
};

example.beginPath = function (context) {
  context.beginPath();
  context.setLineWidth(5);
  context.setStrokeStyle('#ff0000');
  context.moveTo(0, 75);
  context.lineTo(250, 75);
  context.stroke();

  context.beginPath();
  context.setStrokeStyle('#0000ff');
  context.moveTo(50, 0);
  context.lineTo(150, 130);
  context.stroke();
};

example.closePath = function (context) {
  context.beginPath();
  context.moveTo(20, 20);
  context.lineTo(20, 100);
  context.lineTo(70, 100);
  context.closePath();
  context.stroke();
};

example.moveTo = function (context) {
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(300, 150);
  context.stroke();
};

example.lineTo = function (context) {
  context.beginPath();
  context.moveTo(20, 20);
  context.lineTo(20, 100);
  context.lineTo(70, 100);
  context.stroke();
};

example.rect = function (context) {
  context.beginPath();
  context.rect(20, 20, 150, 100);
  context.stroke();
};

example.arc = function (context) {
  context.beginPath();
  context.arc(75, 75, 50, 0, Math.PI * 2, true);
  context.moveTo(110, 75);
  context.arc(75, 75, 35, 0, Math.PI, false);
  context.moveTo(65, 65);
  context.arc(60, 65, 5, 0, Math.PI * 2, true);
  context.moveTo(95, 65);
  context.arc(90, 65, 5, 0, Math.PI * 2, true);
  context.stroke();
};

example.quadraticCurveTo = function (context) {
  context.beginPath();
  context.moveTo(20, 20);
  context.quadraticCurveTo(20, 100, 200, 20);
  context.stroke();
};

example.bezierCurveTo = function (context) {
  context.beginPath();
  context.moveTo(20, 20);
  context.bezierCurveTo(20, 100, 200, 100, 200, 20);
  context.stroke();
};

example.setFillStyle = function (context) {
  ;['#fef957', 'rgb(242,159,63)', 'rgb(242,117,63)', '#e87e51'].forEach(function (item, index) {
    context.setFillStyle(item);
    context.beginPath();
    context.rect(0 + 75 * index, 0, 50, 50);
    context.fill();
  });
};

example.setStrokeStyle = function (context) {
  ;['#fef957', 'rgb(242,159,63)', 'rgb(242,117,63)', '#e87e51'].forEach(function (item, index) {
    context.setStrokeStyle(item);
    context.beginPath();
    context.rect(0 + 75 * index, 0, 50, 50);
    context.stroke();
  });
};

example.setGlobalAlpha = function (context) {
  context.setFillStyle('#000000');[1, 0.5, 0.1].forEach(function (item, index) {
    context.setGlobalAlpha(item);
    context.beginPath();
    context.rect(0 + 75 * index, 0, 50, 50);
    context.fill();
  });
};

example.setShadow = function (context) {
  context.beginPath();
  context.setShadow(10, 10, 10, 'rgba(0, 0, 0, 199)');
  context.rect(10, 10, 100, 100);
  context.fill();
};

example.setFontSize = function (context) {
  ;[10, 20, 30, 40].forEach(function (item, index) {
    context.setFontSize(item);
    context.fillText('Hello, world', 20, 20 + 40 * index);
  });
};

example.setLineCap = function (context) {
  context.setLineWidth(10);['butt', 'round', 'square'].forEach(function (item, index) {
    context.beginPath();
    context.setLineCap(item);
    context.moveTo(20, 20 + 20 * index);
    context.lineTo(100, 20 + 20 * index);
    context.stroke();
  });
};

example.setLineJoin = function (context) {
  context.setLineWidth(10);['bevel', 'round', 'miter'].forEach(function (item, index) {
    context.beginPath();

    context.setLineJoin(item);
    context.moveTo(20 + 80 * index, 20);
    context.lineTo(100 + 80 * index, 50);
    context.lineTo(20 + 80 * index, 100);
    context.stroke();
  });
};

example.setLineWidth = function (context) {
  ;[2, 4, 6, 8, 10].forEach(function (item, index) {
    context.beginPath();
    context.setLineWidth(item);
    context.moveTo(20, 20 + 20 * index);
    context.lineTo(100, 20 + 20 * index);
    context.stroke();
  });
};

example.setMiterLimit = function (context) {
  context.setLineWidth(4);[2, 4, 6, 8, 10].forEach(function (item, index) {
    context.beginPath();
    context.setMiterLimit(item);
    context.moveTo(20 + 80 * index, 20);
    context.lineTo(100 + 80 * index, 50);
    context.lineTo(20 + 80 * index, 100);
    context.stroke();
  });
};

module.exports = example;
});
define("page/API/pages/custom-service/custom-service.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({});
});
define("page/API/pages/sendMessage/sendMessage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({});
});
define("util/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time;
  }

  var hour = parseInt(time / 3600);
  time = time % 3600;
  var minute = parseInt(time / 60);
  time = time % 60;
  var second = time;

  return [hour, minute, second].map(function (n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }).join(':');
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude);
    latitude = parseFloat(latitude);
  }

  longitude = longitude.toFixed(2);
  latitude = latitude.toFixed(2);

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  };
}

module.exports = {
  formatTime: formatTime,
  formatLocation: formatLocation
};
});
define("vendor/qcloud-weapp-client-sdk/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var constants = require('./lib/constants');
var login = require('./lib/login');
var Session = require('./lib/session');
var request = require('./lib/request');
var Tunnel = require('./lib/tunnel');

var _exports = module.exports = {
  login: login.login,
  setLoginUrl: login.setLoginUrl,
  LoginError: login.LoginError,

  clearSession: Session.clear,

  request: request.request,
  RequestError: request.RequestError,

  Tunnel: Tunnel
};

// 导出错误类型码
Object.keys(constants).forEach(function (key) {
  if (key.indexOf('ERR_') === 0) {
    _exports[key] = constants[key];
  }
});
});
define("vendor/qcloud-weapp-client-sdk/lib/constants.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

module.exports = {
  WX_HEADER_CODE: 'X-WX-Code',
  WX_HEADER_ENCRYPTED_DATA: 'X-WX-Encrypted-Data',
  WX_HEADER_IV: 'X-WX-IV',
  WX_HEADER_ID: 'X-WX-Id',
  WX_HEADER_SKEY: 'X-WX-Skey',

  WX_SESSION_MAGIC_ID: 'F2C224D4-2BCE-4C64-AF9F-A6D872000D1A',

  ERR_INVALID_PARAMS: 'ERR_INVALID_PARAMS',

  ERR_WX_LOGIN_FAILED: 'ERR_WX_LOGIN_FAILED',
  ERR_WX_GET_USER_INFO: 'ERR_WX_GET_USER_INFO',
  ERR_LOGIN_TIMEOUT: 'ERR_LOGIN_TIMEOUT',
  ERR_LOGIN_FAILED: 'ERR_LOGIN_FAILED',
  ERR_LOGIN_SESSION_NOT_RECEIVED: 'ERR_LOGIN_MISSING_SESSION',

  ERR_INVALID_SESSION: 'ERR_INVALID_SESSION',
  ERR_CHECK_LOGIN_FAILED: 'ERR_CHECK_LOGIN_FAILED'
};
});
define("vendor/qcloud-weapp-client-sdk/lib/login.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var utils = require('./utils');
var constants = require('./constants');
var Session = require('./session');

/***
 * @class
 * 表示登录过程中发生的异常
 */
var LoginError = function () {
  function LoginError(type, message) {
    Error.call(this, message);
    this.type = type;
    this.message = message;
  }

  LoginError.prototype = new Error();
  LoginError.prototype.constructor = LoginError;

  return LoginError;
}();

/**
 * 微信登录，获取 code 和 encryptData
 */
var getWxLoginResult = function getLoginCode(callback) {
  wx.login({
    success: function success(loginResult) {
      wx.getUserInfo({
        success: function success(userResult) {
          callback(null, {
            code: loginResult.code,
            encryptedData: userResult.encryptedData,
            iv: userResult.iv,
            userInfo: userResult.userInfo
          });
        },

        fail: function fail(userError) {
          var error = new LoginError(constants.ERR_WX_GET_USER_INFO, '获取微信用户信息失败，请检查网络状态');
          error.detail = userError;
          callback(error, null);
        }
      });
    },

    fail: function fail(loginError) {
      var error = new LoginError(constants.ERR_WX_LOGIN_FAILED, '微信登录失败，请检查网络状态');
      error.detail = loginError;
      callback(error, null);
    }
  });
};

var noop = function noop() {};
var defaultOptions = {
  method: 'GET',
  success: noop,
  fail: noop,
  loginUrl: null

  /**
   * @method
   * 进行服务器登录，以获得登录会话
   *
   * @param {Object} options 登录配置
   * @param {string} options.loginUrl 登录使用的 URL，服务器应该在这个 URL 上处理登录请求
   * @param {string} [options.method] 请求使用的 HTTP 方法，默认为 "GET"
   * @param {Function} options.success(userInfo) 登录成功后的回调函数，参数 userInfo 微信用户信息
   * @param {Function} options.fail(error) 登录失败后的回调函数，参数 error 错误信息
   */
};var login = function login(options) {
  options = utils.extend({}, defaultOptions, options);

  if (!defaultOptions.loginUrl) {
    options.fail(new LoginError(constants.ERR_INVALID_PARAMS, '登录错误：缺少登录地址，请通过 setLoginUrl() 方法设置登录地址'));
    return;
  }

  var doLogin = function doLogin() {
    return getWxLoginResult(function (wxLoginError, wxLoginResult) {
      if (wxLoginError) {
        options.fail(wxLoginError);
        return;
      }

      var userInfo = wxLoginResult.userInfo;

      // 构造请求头，包含 code、encryptedData 和 iv
      var code = wxLoginResult.code;
      var encryptedData = wxLoginResult.encryptedData;
      var iv = wxLoginResult.iv;
      var header = {};

      header[constants.WX_HEADER_CODE] = code;
      header[constants.WX_HEADER_ENCRYPTED_DATA] = encryptedData;
      header[constants.WX_HEADER_IV] = iv;

      // 请求服务器登录地址，获得会话信息
      wx.request({
        url: options.loginUrl,
        header: header,
        method: options.method,
        data: options.data,

        success: function success(result) {
          var data = result.data;

          // 成功地响应会话信息
          if (data && data[constants.WX_SESSION_MAGIC_ID]) {
            if (data.session) {
              data.session.userInfo = userInfo;
              Session.set(data.session);
              options.success(userInfo);
            } else {
              var errorMessage = '登录失败(' + data.error + ')：' + (data.message || '未知错误');
              var noSessionError = new LoginError(constants.ERR_LOGIN_SESSION_NOT_RECEIVED, errorMessage);
              options.fail(noSessionError);
            }

            // 没有正确响应会话信息
          } else {
            var errorMessage = '登录请求没有包含会话响应，请确保服务器处理 `' + options.loginUrl + '` 的时候正确使用了 SDK 输出登录结果';
            var noSessionError = new LoginError(constants.ERR_LOGIN_SESSION_NOT_RECEIVED, errorMessage);
            options.fail(noSessionError);
          }
        },

        // 响应错误
        fail: function fail(loginResponseError) {
          var error = new LoginError(constants.ERR_LOGIN_FAILED, '登录失败，可能是网络错误或者服务器发生异常');
          options.fail(error);
        }
      });
    });
  };

  var session = Session.get();
  if (session) {
    wx.checkSession({
      success: function success() {
        options.success(session.userInfo);
      },

      fail: function fail() {
        Session.clear();
        doLogin();
      }
    });
  } else {
    doLogin();
  }
};

var setLoginUrl = function setLoginUrl(loginUrl) {
  defaultOptions.loginUrl = loginUrl;
};

module.exports = {
  LoginError: LoginError,
  login: login,
  setLoginUrl: setLoginUrl
};
});
define("vendor/qcloud-weapp-client-sdk/lib/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var constants = require('./constants');
var utils = require('./utils');
var Session = require('./session');
var loginLib = require('./login');

var noop = function noop() {};

var buildAuthHeader = function buildAuthHeader(session) {
  var header = {};

  if (session && session.id && session.skey) {
    header[constants.WX_HEADER_ID] = session.id;
    header[constants.WX_HEADER_SKEY] = session.skey;
  }

  return header;
};

/***
 * @class
 * 表示请求过程中发生的异常
 */
var RequestError = function () {
  function RequestError(type, message) {
    Error.call(this, message);
    this.type = type;
    this.message = message;
  }

  RequestError.prototype = new Error();
  RequestError.prototype.constructor = RequestError;

  return RequestError;
}();

function request(options) {
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
    var message = '请求传参应为 object 类型，但实际传了 ' + (typeof options === 'undefined' ? 'undefined' : _typeof(options)) + ' 类型';
    throw new RequestError(constants.ERR_INVALID_PARAMS, message);
  }

  var requireLogin = options.login;
  var success = options.success || noop;
  var fail = options.fail || noop;
  var complete = options.complete || noop;
  var originHeader = options.header || {};

  // 成功回调
  var callSuccess = function callSuccess() {
    success.apply(null, arguments);
    complete.apply(null, arguments);
  };

  // 失败回调
  var callFail = function callFail(error) {
    fail.call(null, error);
    complete.call(null, error);
  };

  // 是否已经进行过重试
  var hasRetried = false;

  if (requireLogin) {
    doRequestWithLogin();
  } else {
    doRequest();
  }

  // 登录后再请求
  function doRequestWithLogin() {
    loginLib.login({ success: doRequest, fail: callFail });
  }

  // 实际进行请求的方法
  function doRequest() {
    var authHeader = buildAuthHeader(Session.get());

    wx.request(utils.extend({}, options, {
      header: utils.extend({}, originHeader, authHeader),

      success: function success(response) {
        var data = response.data;

        // 如果响应的数据里面包含 SDK Magic ID，表示被服务端 SDK 处理过，此时一定包含登录态失败的信息
        if (data && data[constants.WX_SESSION_MAGIC_ID]) {
          // 清除登录态
          Session.clear();

          var error, message;
          if (data.error === constants.ERR_INVALID_SESSION) {
            // 如果是登录态无效，并且还没重试过，会尝试登录后刷新凭据重新请求
            if (!hasRetried) {
              hasRetried = true;
              doRequestWithLogin();
              return;
            }

            message = '登录态已过期';
            error = new RequestError(data.error, message);
          } else {
            message = '鉴权服务器检查登录态发生错误(' + (data.error || 'OTHER') + ')：' + (data.message || '未知错误');
            error = new RequestError(constants.ERR_CHECK_LOGIN_FAILED, message);
          }

          callFail(error);
          return;
        }

        callSuccess.apply(null, arguments);
      },

      fail: callFail,
      complete: noop
    }));
  }
}

module.exports = {
  RequestError: RequestError,
  request: request
};
});
define("vendor/qcloud-weapp-client-sdk/lib/session.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var constants = require('./constants');
var SESSION_KEY = 'weapp_session_' + constants.WX_SESSION_MAGIC_ID;

var Session = {
  get: function get() {
    return wx.getStorageSync(SESSION_KEY) || null;
  },

  set: function set(session) {
    wx.setStorageSync(SESSION_KEY, session);
  },

  clear: function clear() {
    wx.removeStorageSync(SESSION_KEY);
  }
};

module.exports = Session;
});
define("vendor/qcloud-weapp-client-sdk/lib/tunnel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var requestLib = require('./request');
var wxTunnel = require('./wxTunnel');

/**
 * 当前打开的信道，同一时间只能有一个信道打开
 */
var currentTunnel = null;

// 信道状态枚举
var STATUS_CLOSED = Tunnel.STATUS_CLOSED = 'CLOSED';
var STATUS_CONNECTING = Tunnel.STATUS_CONNECTING = 'CONNECTING';
var STATUS_ACTIVE = Tunnel.STATUS_ACTIVE = 'ACTIVE';
var STATUS_RECONNECTING = Tunnel.STATUS_RECONNECTING = 'RECONNECTING';

// 错误类型枚举
var ERR_CONNECT_SERVICE = Tunnel.ERR_CONNECT_SERVICE = 1001;
var ERR_CONNECT_SOCKET = Tunnel.ERR_CONNECT_SOCKET = 1002;
var ERR_RECONNECT = Tunnel.ERR_RECONNECT = 2001;
var ERR_SOCKET_ERROR = Tunnel.ERR_SOCKET_ERROR = 3001;

// 包类型枚举
var PACKET_TYPE_MESSAGE = 'message';
var PACKET_TYPE_PING = 'ping';
var PACKET_TYPE_PONG = 'pong';
var PACKET_TYPE_TIMEOUT = 'timeout';
var PACKET_TYPE_CLOSE = 'close';

// 断线重连最多尝试 5 次
var DEFAULT_MAX_RECONNECT_TRY_TIMES = 5;

// 每次重连前，等待时间的增量值
var DEFAULT_RECONNECT_TIME_INCREASE = 1000;

function Tunnel(serviceUrl) {
  if (currentTunnel && currentTunnel.status !== STATUS_CLOSED) {
    throw new Error('当前有未关闭的信道，请先关闭之前的信道，再打开新信道');
  }

  currentTunnel = this;

  // 等确认微信小程序全面支持 ES6 就不用那么麻烦了
  var me = this;

  //= ========================================================================
  // 暴露实例状态以及方法
  //= ========================================================================
  this.serviceUrl = serviceUrl;
  this.socketUrl = null;
  this.status = null;

  this.open = openConnect;
  this.on = registerEventHandler;
  this.emit = emitMessagePacket;
  this.close = close;

  this.isClosed = isClosed;
  this.isConnecting = isConnecting;
  this.isActive = isActive;
  this.isReconnecting = isReconnecting;

  //= ========================================================================
  // 信道状态处理，状态说明：
  //   closed       - 已关闭
  //   connecting   - 首次连接
  //   active       - 当前信道已经在工作
  //   reconnecting - 断线重连中
  //= ========================================================================
  function isClosed() {
    return me.status === STATUS_CLOSED;
  }
  function isConnecting() {
    return me.status === STATUS_CONNECTING;
  }
  function isActive() {
    return me.status === STATUS_ACTIVE;
  }
  function isReconnecting() {
    return me.status === STATUS_RECONNECTING;
  }

  function setStatus(status) {
    var lastStatus = me.status;
    if (lastStatus !== status) {
      me.status = status;
    }
  }

  // 初始为关闭状态
  setStatus(STATUS_CLOSED);

  //= ========================================================================
  // 信道事件处理机制
  // 信道事件包括：
  //   connect      - 连接已建立
  //   close        - 连接被关闭（包括主动关闭和被动关闭）
  //   reconnecting - 开始重连
  //   reconnect    - 重连成功
  //   error        - 发生错误，其中包括连接失败、重连失败、解包失败等等
  //   [message]    - 信道服务器发送过来的其它事件类型，如果事件类型和上面内置的事件类型冲突，将在事件类型前面添加前缀 `@`
  //= ========================================================================
  var preservedEventTypes = 'connect,close,reconnecting,reconnect,error'.split(',');
  var eventHandlers = [];

  /**
     * 注册消息处理函数
     * @param {string} messageType 支持内置消息类型（"connect"|"close"|"reconnecting"|"reconnect"|"error"）以及业务消息类型
     */
  function registerEventHandler(eventType, eventHandler) {
    if (typeof eventHandler === 'function') {
      eventHandlers.push([eventType, eventHandler]);
    }
  }

  /**
     * 派发事件，通知所有处理函数进行处理
     */
  function dispatchEvent(eventType, eventPayload) {
    eventHandlers.forEach(function (handler) {
      var handleType = handler[0];
      var handleFn = handler[1];

      if (handleType === '*') {
        handleFn(eventType, eventPayload);
      } else if (handleType === eventType) {
        handleFn(eventPayload);
      }
    });
  }

  /**
     * 派发事件，事件类型和系统保留冲突的，事件名会自动加上 '@' 前缀
     */
  function dispatchEscapedEvent(eventType, eventPayload) {
    if (preservedEventTypes.indexOf(eventType) > -1) {
      eventType = '@' + eventType;
    }

    dispatchEvent(eventType, eventPayload);
  }

  //= ========================================================================
  // 信道连接控制
  //= ========================================================================
  var isFirstConnection = true;
  var isOpening = false;

  /**
     * 连接信道服务器，获取 WebSocket 连接地址，获取地址成功后，开始进行 WebSocket 连接
     */
  function openConnect() {
    if (isOpening) return;
    isOpening = true;

    // 只有关闭状态才会重新进入准备中
    setStatus(isFirstConnection ? STATUS_CONNECTING : STATUS_RECONNECTING);

    requestLib.request({
      url: serviceUrl,
      method: 'GET',
      success: function success(response) {
        if (+response.statusCode === 200 && response.data && response.data.url) {
          openSocket(me.socketUrl = response.data.url);
        } else {
          dispatchConnectServiceError(response);
        }
      },
      fail: dispatchConnectServiceError,
      complete: function complete() {
        return isOpening = false;
      }
    });

    function dispatchConnectServiceError(detail) {
      if (isFirstConnection) {
        setStatus(STATUS_CLOSED);

        dispatchEvent('error', {
          code: ERR_CONNECT_SERVICE,
          message: '连接信道服务失败，网络错误或者信道服务没有正确响应',
          detail: detail || null
        });
      } else {
        startReconnect(detail);
      }
    }
  }

  /**
     * 打开 WebSocket 连接，打开后，注册微信的 Socket 处理方法
     */
  function openSocket(url) {
    wxTunnel.listen({
      onOpen: handleSocketOpen,
      onMessage: handleSocketMessage,
      onClose: handleSocketClose,
      onError: handleSocketError
    });

    wx.connectSocket({ url: url });
    isFirstConnection = false;
  }

  //= ========================================================================
  // 处理消息通讯
  //
  // packet           - 数据包，序列化形式为 `${type}` 或者 `${type}:${content}`
  // packet.type      - 包类型，包括 message, ping, pong, close
  // packet.content?  - 当包类型为 message 的时候，会附带 message 数据
  //
  // message          - 消息体，会使用 JSON 序列化后作为 packet.content
  // message.type     - 消息类型，表示业务消息类型
  // message.content? - 消息实体，可以为任意类型，表示消息的附带数据，也可以为空
  //
  // 数据包示例：
  //  - 'ping' 表示 Ping 数据包
  //  - 'message:{"type":"speak","content":"hello"}' 表示一个打招呼的数据包
  //= ========================================================================

  // 连接还没成功建立的时候，需要发送的包会先存放到队列里
  var queuedPackets = [];

  /**
     * WebSocket 打开之后，更新状态，同时发送所有遗留的数据包
     */
  function handleSocketOpen() {
    /* istanbul ignore else */
    if (isConnecting()) {
      dispatchEvent('connect');
    } else if (isReconnecting()) {
      dispatchEvent('reconnect');
      resetReconnectionContext();
    }

    setStatus(STATUS_ACTIVE);
    emitQueuedPackets();
    nextPing();
  }

  /**
     * 收到 WebSocket 数据包，交给处理函数
     */
  function handleSocketMessage(message) {
    resolvePacket(message.data);
  }

  /**
     * 发送数据包，如果信道没有激活，将先存放队列
     */
  function emitPacket(packet) {
    if (isActive()) {
      sendPacket(packet);
    } else {
      queuedPackets.push(packet);
    }
  }

  /**
     * 数据包推送到信道
     */
  function sendPacket(packet) {
    var encodedPacket = [packet.type];

    if (packet.content) {
      encodedPacket.push(JSON.stringify(packet.content));
    }

    wx.sendSocketMessage({
      data: encodedPacket.join(':'),
      fail: handleSocketError
    });
  }

  function emitQueuedPackets() {
    queuedPackets.forEach(emitPacket);

    // empty queued packets
    queuedPackets.length = 0;
  }

  /**
     * 发送消息包
     */
  function emitMessagePacket(messageType, messageContent) {
    var packet = {
      type: PACKET_TYPE_MESSAGE,
      content: {
        type: messageType,
        content: messageContent
      }
    };

    emitPacket(packet);
  }

  /**
     * 发送 Ping 包
     */
  function emitPingPacket() {
    emitPacket({ type: PACKET_TYPE_PING });
  }

  /**
     * 发送关闭包
     */
  function emitClosePacket() {
    emitPacket({ type: PACKET_TYPE_CLOSE });
  }

  /**
     * 解析并处理从信道接收到的包
     */
  function resolvePacket(raw) {
    var packetParts = raw.split(':');
    var packetType = packetParts.shift();
    var packetContent = packetParts.join(':') || null;
    var packet = { type: packetType };

    if (packetContent) {
      try {
        packet.content = JSON.parse(packetContent);
      } catch (e) {}
    }

    switch (packet.type) {
      case PACKET_TYPE_MESSAGE:
        handleMessagePacket(packet);
        break;
      case PACKET_TYPE_PONG:
        handlePongPacket(packet);
        break;
      case PACKET_TYPE_TIMEOUT:
        handleTimeoutPacket(packet);
        break;
      case PACKET_TYPE_CLOSE:
        handleClosePacket(packet);
        break;
      default:
        handleUnknownPacket(packet);
        break;
    }
  }

  /**
     * 收到消息包，直接 dispatch 给处理函数
     */
  function handleMessagePacket(packet) {
    var message = packet.content;
    dispatchEscapedEvent(message.type, message.content);
  }

  //= ========================================================================
  // 心跳、断开与重连处理
  //= ========================================================================

  /**
     * Ping-Pong 心跳检测超时控制，这个值有两个作用：
     *   1. 表示收到服务器的 Pong 相应之后，过多久再发下一次 Ping
     *   2. 如果 Ping 发送之后，超过这个时间还没收到 Pong，断开与服务器的连接
     * 该值将在与信道服务器建立连接后被更新
     */
  var pingPongTimeout = 15000;
  var pingTimer = 0;
  var pongTimer = 0;

  /**
     * 信道服务器返回 Ping-Pong 控制超时时间
     */
  function handleTimeoutPacket(packet) {
    var timeout = packet.content * 1000;
    /* istanbul ignore else */
    if (!isNaN(timeout)) {
      pingPongTimeout = timeout;
      ping();
    }
  }

  /**
     * 收到服务器 Pong 响应，定时发送下一个 Ping
     */
  function handlePongPacket(packet) {
    nextPing();
  }

  /**
     * 发送下一个 Ping 包
     */
  function nextPing() {
    clearTimeout(pingTimer);
    clearTimeout(pongTimer);
    pingTimer = setTimeout(ping, pingPongTimeout);
  }

  /**
     * 发送 Ping，等待 Pong
     */
  function ping() {
    /* istanbul ignore else */
    if (isActive()) {
      emitPingPacket();

      // 超时没有响应，关闭信道
      pongTimer = setTimeout(handlePongTimeout, pingPongTimeout);
    }
  }

  /**
     * Pong 超时没有响应，信道可能已经不可用，需要断开重连
     */
  function handlePongTimeout() {
    startReconnect('服务器已失去响应');
  }

  // 已经重连失败的次数
  var reconnectTryTimes = 0;

  // 最多允许失败次数
  var maxReconnectTryTimes = Tunnel.MAX_RECONNECT_TRY_TIMES || DEFAULT_MAX_RECONNECT_TRY_TIMES;

  // 重连前等待的时间
  var waitBeforeReconnect = 0;

  // 重连前等待时间增量
  var reconnectTimeIncrease = Tunnel.RECONNECT_TIME_INCREASE || DEFAULT_RECONNECT_TIME_INCREASE;

  var reconnectTimer = 0;

  function startReconnect(lastError) {
    if (reconnectTryTimes >= maxReconnectTryTimes) {
      close();

      dispatchEvent('error', {
        code: ERR_RECONNECT,
        message: '重连失败',
        detail: lastError
      });
    } else {
      wx.closeSocket();
      waitBeforeReconnect += reconnectTimeIncrease;
      setStatus(STATUS_RECONNECTING);
      reconnectTimer = setTimeout(doReconnect, waitBeforeReconnect);
    }

    if (reconnectTryTimes === 0) {
      dispatchEvent('reconnecting');
    }

    reconnectTryTimes += 1;
  }

  function doReconnect() {
    openConnect();
  }

  function resetReconnectionContext() {
    reconnectTryTimes = 0;
    waitBeforeReconnect = 0;
  }

  /**
     * 收到服务器的关闭请求
     */
  function handleClosePacket(packet) {
    close();
  }

  function handleUnknownPacket(packet) {
    // throw away
  }

  var isClosing = false;

  /**
     * 收到 WebSocket 断开的消息，处理断开逻辑
     */
  function handleSocketClose() {
    /* istanbul ignore if */
    if (isClosing) return;

    /* istanbul ignore else */
    if (isActive()) {
      // 意外断开的情况，进行重连
      startReconnect('链接已断开');
    }
  }

  function close() {
    isClosing = true;
    closeSocket();
    setStatus(STATUS_CLOSED);
    resetReconnectionContext();
    isFirstConnection = false;
    clearTimeout(pingTimer);
    clearTimeout(pongTimer);
    clearTimeout(reconnectTimer);
    dispatchEvent('close');
    isClosing = false;
  }

  function closeSocket(emitClose) {
    if (isActive() && emitClose !== false) {
      emitClosePacket();
    }

    wx.closeSocket();
  }

  //= ========================================================================
  // 错误处理
  //= ========================================================================

  /**
     * 错误处理
     */
  function handleSocketError(detail) {
    switch (me.status) {
      case Tunnel.STATUS_CONNECTING:
        dispatchEvent('error', {
          code: ERR_SOCKET_ERROR,
          message: '连接信道失败，网络错误或者信道服务不可用',
          detail: detail
        });
        break;
    }
  }
}

module.exports = Tunnel;
});
define("vendor/qcloud-weapp-client-sdk/lib/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

/**
 * 拓展对象
 */
exports.extend = function extend(target) {
  var sources = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < sources.length; i += 1) {
    var source = sources[i];
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
});
define("vendor/qcloud-weapp-client-sdk/lib/wxTunnel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

/* istanbul ignore next */
var noop = function noop() {
  return void 0;
};

var onOpen = void 0,
    onClose = void 0,
    onMessage = void 0,
    onError = void 0;

/* istanbul ignore next */
function listen(listener) {
  if (listener) {
    onOpen = listener.onOpen;
    onClose = listener.onClose;
    onMessage = listener.onMessage;
    onError = listener.onError;
  } else {
    onOpen = noop;
    onClose = noop;
    onMessage = noop;
    onError = noop;
  }
}

/* istanbul ignore next */
function bind() {
  wx.onSocketOpen(function (result) {
    return onOpen(result);
  });
  wx.onSocketClose(function (result) {
    return onClose(result);
  });
  wx.onSocketMessage(function (result) {
    return onMessage(result);
  });
  wx.onSocketError(function (error) {
    return onError(error);
  });
}

listen(null);
bind();

module.exports = { listen: listen };
});
define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var openIdUrl = require('./config').openIdUrl;

App({
  onLaunch: function onLaunch() {
    console.log('App Launch');
  },
  onShow: function onShow() {
    console.log('App Show');
  },
  onHide: function onHide() {
    console.log('App Hide');
  },
  globalData: {
    hasLogin: false,
    openid: null
  },
  // lazy loading openid
  getUserOpenId: function getUserOpenId(callback) {
    var self = this;

    if (self.globalData.openid) {
      callback(null, self.globalData.openid);
    } else {
      wx.login({
        success: function success(data) {
          wx.request({
            url: openIdUrl,
            data: {
              code: data.code
            },
            success: function success(res) {
              console.log('拉取openid成功', res);
              self.globalData.openid = res.data.openid;
              callback(null, self.globalData.openid);
            },
            fail: function fail(res) {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res);
              callback(res);
            }
          });
        },
        fail: function fail(err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err);
          callback(err);
        }
      });
    }
  }
});
});require("app.js")
var __wxRoute = "page/component/index", __wxRouteBegin = true;
define("page/component/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    list: [{
      id: 'view',
      name: '视图容器',
      open: false,
      pages: ['view', 'scroll-view', 'swiper']
    }, {
      id: 'content',
      name: '基础内容',
      open: false,
      pages: ['text', 'icon', 'progress']
    }, {
      id: 'form',
      name: '表单组件',
      open: false,
      pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
    }, {
      id: 'nav',
      name: '导航',
      open: false,
      pages: ['navigator']
    }, {
      id: 'media',
      name: '媒体组件',
      open: false,
      pages: ['image', 'audio', 'video']
    }, {
      id: 'map',
      name: '地图',
      pages: ['map']
    }, {
      id: 'canvas',
      name: '画布',
      pages: ['canvas']
    }]
  },
  kindToggle: function kindToggle(e) {
    var id = e.currentTarget.id,
        list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    });
  }
});
});require("page/component/index.js")
var __wxRoute = "page/component/pages/view/view", __wxRouteBegin = true;
define("page/component/pages/view/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({});
});require("page/component/pages/view/view.js")
var __wxRoute = "page/component/pages/scroll-view/scroll-view", __wxRouteBegin = true;
define("page/component/pages/scroll-view/scroll-view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var order = ['demo1', 'demo2', 'demo3'];
Page({
  data: {
    toView: 'green'
  },
  upper: function upper(e) {
    console.log(e);
  },
  lower: function lower(e) {
    console.log(e);
  },
  scroll: function scroll(e) {
    console.log(e);
  },
  scrollToTop: function scrollToTop(e) {
    this.setAction({
      scrollTop: 0
    });
  },
  tap: function tap(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        });
        break;
      }
    }
  },
  tapMove: function tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    });
  }
});
});require("page/component/pages/scroll-view/scroll-view.js")
var __wxRoute = "page/component/pages/swiper/swiper", __wxRouteBegin = true;
define("page/component/pages/swiper/swiper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },
  changeIndicatorDots: function changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
  },
  changeAutoplay: function changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    });
  },
  intervalChange: function intervalChange(e) {
    this.setData({
      interval: e.detail.value
    });
  },
  durationChange: function durationChange(e) {
    this.setData({
      duration: e.detail.value
    });
  }
});
});require("page/component/pages/swiper/swiper.js")
var __wxRoute = "page/component/pages/text/text", __wxRouteBegin = true;
define("page/component/pages/text/text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var texts = ['2011年1月，微信1.0发布', '同年5月，微信2.0语音对讲发布', '10月，微信3.0新增摇一摇功能', '2012年3月，微信用户突破1亿', '4月份，微信4.0朋友圈发布', '同年7月，微信4.2发布公众平台', '2013年8月，微信5.0发布微信支付', '2014年9月，企业号发布', '同月，发布微信卡包', '2015年1月，微信第一条朋友圈广告', '2016年1月，企业微信发布', '2017年1月，小程序发布', '......'];

Page({
  data: {
    text: '',
    canAdd: true,
    canRemove: false
  },
  extraLine: [],
  add: function add(e) {
    var that = this;
    this.extraLine.push(texts[this.extraLine.length % 12]);
    this.setData({
      text: this.extraLine.join('\n'),
      canAdd: this.extraLine.length < 12,
      canRemove: this.extraLine.length > 0
    }, function (res) {
      // this is setData callback
      console.log('setData Callback', res);
    });
    setTimeout(function () {
      that.setData({
        scrollTop: 99999
      });
    }, 0);
  },
  remove: function remove(e) {
    var that = this;
    if (this.extraLine.length > 0) {
      this.extraLine.pop();
      this.setData({
        text: this.extraLine.join('\n'),
        canAdd: this.extraLine.length < 12,
        canRemove: this.extraLine.length > 0
      });
    }
    setTimeout(function () {
      that.setData({
        scrollTop: 99999
      });
    }, 0);
  }
});
});require("page/component/pages/text/text.js")
var __wxRoute = "page/component/pages/icon/icon", __wxRouteBegin = true;
define("page/component/pages/icon/icon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({});
});require("page/component/pages/icon/icon.js")
var __wxRoute = "page/component/pages/progress/progress", __wxRouteBegin = true;
define("page/component/pages/progress/progress.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({});
});require("page/component/pages/progress/progress.js")
var __wxRoute = "page/component/pages/button/button", __wxRouteBegin = true;
define("page/component/pages/button/button.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var types = ['default', 'primary', 'warn'];
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  setDisabled: function setDisabled(e) {
    this.setData({
      disabled: !this.data.disabled
    });
  },
  setPlain: function setPlain(e) {
    this.setData({
      plain: !this.data.plain
    });
  },
  setLoading: function setLoading(e) {
    this.setData({
      loading: !this.data.loading
    });
  }
};

for (var i = 0; i < types.length; ++i) {
  ;(function (type) {
    pageObject[type] = function (e) {
      var key = type + 'Size';
      var changedData = {};
      changedData[key] = this.data[key] === 'default' ? 'mini' : 'default';
      this.setData(changedData);
    };
  })(types[i]);
}

Page(pageObject);
});require("page/component/pages/button/button.js")
var __wxRoute = "page/component/pages/checkbox/checkbox", __wxRouteBegin = true;
define("page/component/pages/checkbox/checkbox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    items: [{ value: 'USA', name: '美国' }, { value: 'CHN', name: '中国', checked: 'true' }, { value: 'BRA', name: '巴西' }, { value: 'JPN', name: '日本' }, { value: 'ENG', name: '英国' }, { value: 'FRA', name: '法国' }]
  },
  checkboxChange: function checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var items = this.data.items,
        values = e.detail.value;
    for (var i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value == values[j]) {
          items[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      items: items
    });
  }
});
});require("page/component/pages/checkbox/checkbox.js")
var __wxRoute = "page/component/pages/form/form", __wxRouteBegin = true;
define("page/component/pages/form/form.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    pickerHidden: true,
    chosen: ''
  },
  pickerConfirm: function pickerConfirm(e) {
    this.setData({
      pickerHidden: true
    });
    this.setData({
      chosen: e.detail.value
    });
  },
  pickerCancel: function pickerCancel(e) {
    this.setData({
      pickerHidden: true
    });
  },
  pickerShow: function pickerShow(e) {
    this.setData({
      pickerHidden: false
    });
  },
  formSubmit: function formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
  },
  formReset: function formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value);
    this.setData({
      chosen: ''
    });
  }
});
});require("page/component/pages/form/form.js")
var __wxRoute = "page/component/pages/input/input", __wxRouteBegin = true;
define("page/component/pages/input/input.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    focus: false,
    inputValue: ''
  },
  bindKeyInput: function bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  bindReplaceInput: function bindReplaceInput(e) {
    var value = e.detail.value;
    var pos = e.detail.cursor;
    var left;
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos);
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length;
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos

      // 或者直接返回字符串,光标在最后边
      // return value.replace(/11/g,'2'),
    };
  },
  bindHideKeyboard: function bindHideKeyboard(e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard();
    }
  }
});
});require("page/component/pages/input/input.js")
var __wxRoute = "page/component/pages/label/label", __wxRouteBegin = true;
define("page/component/pages/label/label.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    checkboxItems: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }],
    radioItems: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }],
    hidden: false
  },
  checkboxChange: function checkboxChange(e) {
    var checked = e.detail.value;
    var changed = {};
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true;
      } else {
        changed['checkboxItems[' + i + '].checked'] = false;
      }
    }
    this.setData(changed);
  },
  radioChange: function radioChange(e) {
    var checked = e.detail.value;
    var changed = {};
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true;
      } else {
        changed['radioItems[' + i + '].checked'] = false;
      }
    }
    this.setData(changed);
  },
  tapEvent: function tapEvent(e) {
    console.log('按钮被点击');
  }
});
});require("page/component/pages/label/label.js")
var __wxRoute = "page/component/pages/picker/picker", __wxRouteBegin = true;
define("page/component/pages/picker/picker.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    array: ['中国', '美国', '巴西', '日本'],
    index: 0,
    date: '2016-09-01',
    time: '12:01'
  },
  onStateChange: function onStateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value
    });
  },
  onDateChange: function onDateChange(e) {
    this.setData({
      date: e.detail.value
    });
  },
  onTimeChange: function onTimeChange(e) {
    this.setData({
      time: e.detail.value
    });
  }
});
});require("page/component/pages/picker/picker.js")
var __wxRoute = "page/component/pages/radio/radio", __wxRouteBegin = true;
define("page/component/pages/radio/radio.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    items: [{ value: 'USA', name: '美国' }, { value: 'CHN', name: '中国', checked: 'true' }, { value: 'BRA', name: '巴西' }, { value: 'JPN', name: '日本' }, { value: 'ENG', name: '英国' }, { value: 'FRA', name: '法国' }]
  },
  radioChange: function radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var items = this.data.items;
    for (var i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value == e.detail.value;
    }

    this.setData({
      items: items
    });
  }
});
});require("page/component/pages/radio/radio.js")
var __wxRoute = "page/component/pages/slider/slider", __wxRouteBegin = true;
define("page/component/pages/slider/slider.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var pageData = {};
for (var i = 1; i < 5; ++i) {
  ;(function (index) {
    pageData['slider' + index + 'change'] = function (e) {
      console.log('slider' + index + '发生change事件，携带值为', e.detail.value);
    };
  })(i);
}
Page(pageData);
});require("page/component/pages/slider/slider.js")
var __wxRoute = "page/component/pages/switch/switch", __wxRouteBegin = true;
define("page/component/pages/switch/switch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  switch1Change: function switch1Change(e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value);
  },
  switch2Change: function switch2Change(e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value);
  }
});
});require("page/component/pages/switch/switch.js")
var __wxRoute = "page/component/pages/textarea/textarea", __wxRouteBegin = true;
define("page/component/pages/textarea/textarea.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({
  data: {
    focus: false
  },
  bindTextAreaBlur: function bindTextAreaBlur(e) {
    console.log(e.detail.value);
  }
});
});require("page/component/pages/textarea/textarea.js")
var __wxRoute = "page/component/pages/navigator/navigator", __wxRouteBegin = true;
define("page/component/pages/navigator/navigator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({});
});require("page/component/pages/navigator/navigator.js")
var __wxRoute = "page/component/pages/navigator/navigate", __wxRouteBegin = true;
define("page/component/pages/navigator/navigate.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({
  onLoad: function onLoad(options) {
    console.log(options);
    this.setData({
      title: options.title
    });
  }
});
});require("page/component/pages/navigator/navigate.js")
var __wxRoute = "page/component/pages/navigator/redirect", __wxRouteBegin = true;
define("page/component/pages/navigator/redirect.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({
  onLoad: function onLoad(options) {
    console.log(options);
    this.setData({
      title: options.title
    });
  }
});
});require("page/component/pages/navigator/redirect.js")
var __wxRoute = "page/component/pages/image/image", __wxRouteBegin = true;
define("page/component/pages/image/image.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({});
});require("page/component/pages/image/image.js")
var __wxRoute = "page/component/pages/audio/audio", __wxRouteBegin = true;
define("page/component/pages/audio/audio.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    current: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    },
    audioAction: {
      method: 'pause'
    }
  }
});
});require("page/component/pages/audio/audio.js")
var __wxRoute = "page/component/pages/video/video", __wxRouteBegin = true;
define("page/component/pages/video/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

function getRandomColor() {
  var rgb = [];
  for (var i = 0; i < 3; ++i) {
    var color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
}

Page({
  onReady: function onReady(res) {
    this.videoContext = wx.createVideoContext('myVideo');
  },
  inputValue: '',
  data: {
    src: '',
    danmuList: [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }]
  },
  bindInputBlur: function bindInputBlur(e) {
    this.inputValue = e.detail.value;
  },
  bindButtonTap: function bindButtonTap() {
    var that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function success(res) {
        that.setData({
          src: res.tempFilePath
        });
      }
    });
  },
  bindSendDanmu: function bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    });
  },
  videoErrorCallback: function videoErrorCallback(e) {
    console.log('视频错误信息:');
    console.log(e.detail.errMsg);
  }
});
});require("page/component/pages/video/video.js")
var __wxRoute = "page/component/pages/map/map", __wxRouteBegin = true;
define("page/component/pages/map/map.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    latitude: 23.099994,
    longitude: 113.32452,
    markers: [{
      latitude: 23.099994,
      longitude: 113.32452,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.34452,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.30452,
      iconPath: '/image/location.png'
    }]
  }
});
});require("page/component/pages/map/map.js")
var __wxRoute = "page/component/pages/canvas/canvas", __wxRouteBegin = true;
define("page/component/pages/canvas/canvas.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  onReady: function onReady() {
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2
    };

    this.drawBall();
    this.interval = setInterval(this.drawBall, 17);
  },
  drawBall: function drawBall() {
    var p = this.position;
    p.x += p.vx;
    p.y += p.vy;
    if (p.x >= 300) {
      p.vx = -2;
    }
    if (p.x <= 7) {
      p.vx = 2;
    }
    if (p.y >= 300) {
      p.vy = -2;
    }
    if (p.y <= 7) {
      p.vy = 2;
    }

    var context = wx.createContext();

    function ball(x, y) {
      context.beginPath(0);
      context.arc(x, y, 5, 0, Math.PI * 2);
      context.setFillStyle('#1aad19');
      context.setStrokeStyle('rgba(1,1,1,0)');
      context.fill();
      context.stroke();
    }

    ball(p.x, 150);
    ball(150, p.y);
    ball(300 - p.x, 150);
    ball(150, 300 - p.y);
    ball(p.x, p.y);
    ball(300 - p.x, 300 - p.y);
    ball(p.x, 300 - p.y);
    ball(300 - p.x, p.y);

    wx.drawCanvas({
      canvasId: 'canvas',
      actions: context.getActions()
    });
  },
  onUnload: function onUnload() {
    clearInterval(this.interval);
  }
});
});require("page/component/pages/canvas/canvas.js")
var __wxRoute = "page/API/index", __wxRouteBegin = true;
define("page/API/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    list: [{
      id: 'api',
      name: '开放接口',
      open: false,
      pages: [
      // {
      //   zh: '微信登录',
      //   url: 'login/login'
      // }, {
      //   zh: '获取用户信息',
      //   url: 'get-user-info/get-user-info'
      // }, {
      //   zh: '发起支付',
      //   url: 'request-payment/request-payment'
      // }, {
      //   zh: '分享',
      //   url: 'share/share'
      // }, {
      //   zh: '客服消息',
      //   url: 'custom-message/custom-message'
      // }, {
      //   zh: '模板消息',
      //   url: 'template-message/template-message'
      // },
      {
        zh: '打开h5页面',
        url: 'openlink/openlink'
      }]
    }, {
      id: 'page',
      name: '界面',
      open: false,
      pages: [{
        zh: '设置界面标题',
        url: 'set-navigation-bar-title/set-navigation-bar-title'
      }, {
        zh: '设置标题栏颜色',
        url: 'set-navigation-bar-color/set-navigation-bar-color'
      }, {
        zh: '标题栏加载动画',
        url: 'navigation-bar-loading/navigation-bar-loading'
      }, {
        zh: '页面跳转',
        url: 'navigator/navigator'
      }, {
        zh: '下拉刷新',
        url: 'pull-down-refresh/pull-down-refresh'
      }, {
        zh: '创建动画',
        url: 'animation/animation'
      }, {
        zh: '创建绘画',
        url: 'canvas/canvas'
      }, {
        zh: '显示操作菜单',
        url: 'action-sheet/action-sheet'
      }, {
        zh: '显示模态弹窗',
        url: 'modal/modal'
      }, {
        zh: '显示消息提示框',
        url: 'toast/toast'
        // {
        //   zh: 'WXML节点信息',
        //   url: 'create-selector-query/create-selector-query'
        // }
      }]
    }, {
      id: 'device',
      name: '设备',
      open: false,
      pages: [{
        zh: '获取手机网络状态',
        url: 'get-network-type/get-network-type'
      }, {
        zh: '获取手机系统信息',
        url: 'get-system-info/get-system-info'
      },
      // {
      //   zh: '监听重力感应数据',
      //   url: 'on-accelerometer-change/on-accelerometer-change'
      // }, {
      //   zh: '监听罗盘数据',
      //   url: 'on-compass-change/on-compass-change'
      // },
      {
        zh: '打电话',
        url: 'make-phone-call/make-phone-call'
      }, {
        zh: '扫码',
        url: 'scan-code/scan-code'
      }]
    }, {
      id: 'network',
      name: '网络',
      open: false,
      pages: [{
        zh: '发起一个请求',
        url: 'request/request'
      },
      //  {
      //   zh: 'WebSocket',
      //   url: 'web-socket/web-socket'
      // },
      {
        zh: '上传文件',
        url: 'upload-file/upload-file'
      }, {
        zh: '下载文件',
        url: 'download-file/download-file'
      }]
    }, {
      id: 'media',
      name: '媒体',
      open: false,
      pages: [{
        zh: '图片',
        url: 'image/image'
      },
      //  {
      //   zh: '录音',
      //   url: 'voice/voice'
      // }, {
      //   zh: '背景音频',
      //   url: 'background-audio/background-audio'
      // },
      {
        zh: '文件',
        url: 'file/file'
        // {
        //   zh: '视频',
        //   url: 'video/video'
        // }
      }]
    },
    // {
    //   id: 'location',
    //   name: '位置',
    //   open: false,
    //   pages: [
    //     {
    //       zh: '获取当前位置',
    //       url: 'get-location/get-location'
    //     }, {
    //       zh: '使用原生地图查看位置',
    //       url: 'open-location/open-location'
    //     }, {
    //       zh: '使用原生地图选择位置',
    //       url: 'choose-location/choose-location'
    //     }
    //   ]
    // },
    {
      id: 'storage',
      name: '数据',
      url: 'storage/storage'
    }]
  },
  kindToggle: function kindToggle(e) {
    var id = e.currentTarget.id,
        list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        if (list[i].url) {
          wx.navigateTo({
            url: 'pages/' + list[i].url
          });
          return;
        }
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    });
  }
});
});require("page/API/index.js")
var __wxRoute = "page/API/pages/login/login", __wxRouteBegin = true;
define("page/API/pages/login/login.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

var app = getApp();
Page({
  onLoad: function onLoad() {
    this.setData({
      hasLogin: app.globalData.hasLogin
    });
  },
  data: {},
  login: function login() {
    var that = this;
    wx.login({
      success: function success(res) {
        app.globalData.hasLogin = true;
        that.setData({
          hasLogin: true
        });
        that.update();
      }
    });
  }
});
});require("page/API/pages/login/login.js")
var __wxRoute = "page/API/pages/get-user-info/get-user-info", __wxRouteBegin = true;
define("page/API/pages/get-user-info/get-user-info.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

var app = getApp();
Page({
  data: {
    hasUserInfo: false
  },
  getUserInfo: function getUserInfo() {
    var that = this;

    if (app.globalData.hasLogin === false) {
      wx.login({
        success: _getUserInfo
      });
    } else {
      _getUserInfo();
    }

    function _getUserInfo() {
      wx.getUserInfo({
        success: function success(res) {
          that.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          });
          that.update();
        }
      });
    }
  },
  clear: function clear() {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    });
  }
});
});require("page/API/pages/get-user-info/get-user-info.js")
var __wxRoute = "page/API/pages/request-payment/request-payment", __wxRouteBegin = true;
define("page/API/pages/request-payment/request-payment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var paymentUrl = require('../../../../config').paymentUrl;

var app = getApp();

Page({
  onLoad: function onLoad() {},
  requestPayment: function requestPayment() {
    var self = this;

    self.setData({
      loading: true
    });
    // 此处需要先调用wx.login方法获取code，然后在服务端调用微信接口使用code换取下单用户的openId
    // 具体文档参考https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html?t=20161230#wxloginobject
    app.getUserOpenId(function (err, openid) {
      if (!err) {
        wx.request({
          url: paymentUrl,
          data: {
            openid: openid
          },
          method: 'POST',
          success: function success(res) {
            console.log('unified order success, response is:', res);
            var payargs = res.data.payargs;
            wx.requestPayment({
              timeStamp: payargs.timeStamp,
              nonceStr: payargs.nonceStr,
              package: payargs.package,
              signType: payargs.signType,
              paySign: payargs.paySign
            });

            self.setData({
              loading: false
            });
          }
        });
      } else {
        console.log('err:', err);
        self.setData({
          loading: false
        });
      }
    });
  }
});
});require("page/API/pages/request-payment/request-payment.js")
var __wxRoute = "page/API/pages/share/share", __wxRouteBegin = true;
define("page/API/pages/share/share.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    shareData: {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/API/pages/share/share'
    }
  },
  onShareAppMessage: function onShareAppMessage() {
    return this.data.shareData;
  }
});
});require("page/API/pages/share/share.js")
var __wxRoute = "page/API/pages/custom-message/custom-message", __wxRouteBegin = true;
define("page/API/pages/custom-message/custom-message.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({});
});require("page/API/pages/custom-message/custom-message.js")
var __wxRoute = "page/API/pages/template-message/template-message", __wxRouteBegin = true;
define("page/API/pages/template-message/template-message.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var templateMessageUrl = require('../../../../config').templateMessageUrl;

var app = getApp();

var formData = {
  address: 'T.I.T 造舰厂',
  time: '2017.01.09',
  name: '帝国歼星舰',
  serial: '123456789'
};

Page({
  onLoad: function onLoad() {
    this.setData({
      formData: formData
    });
  },

  submitForm: function submitForm(e) {
    var self = this;
    var form_id = e.detail.formId;
    var formData = e.detail.value;

    console.log('form_id is:', form_id);

    self.setData({
      loading: true
    });

    app.getUserOpenId(function (err, openid) {
      if (!err) {
        wx.request({
          url: templateMessageUrl,
          method: 'POST',
          data: {
            form_id: form_id,
            openid: openid,
            formData: formData
          },
          success: function success(res) {
            console.log('submit form success', res);
            wx.showToast({
              title: '发送成功',
              icon: 'success'
            });
            self.setData({
              loading: false
            });
          },
          fail: function fail(_ref) {
            var errMsg = _ref.errMsg;

            console.log('submit form fail, errMsg is:', errMsg);
          }
        });
      } else {
        console.log('err:', err);
      }
    });
  }
});
});require("page/API/pages/template-message/template-message.js")
var __wxRoute = "page/API/pages/set-navigation-bar-title/set-navigation-bar-title", __wxRouteBegin = true;
define("page/API/pages/set-navigation-bar-title/set-navigation-bar-title.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  setNaivgationBarTitle: function setNaivgationBarTitle(e) {
    var title = e.detail.value.title;
    console.log(title);
    wx.setNavigationBarTitle({
      title: title,
      success: function success() {
        console.log('setNavigationBarTitle success');
      },
      fail: function fail(err) {
        console.log('setNavigationBarTitle fail, err is', err);
      }
    });

    return false;
  }
});
});require("page/API/pages/set-navigation-bar-title/set-navigation-bar-title.js")
var __wxRoute = "page/API/pages/set-navigation-bar-color/set-navigation-bar-color", __wxRouteBegin = true;
define("page/API/pages/set-navigation-bar-color/set-navigation-bar-color.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  setNaivgationBarColor: function setNaivgationBarColor(e) {
    var backgroundColor = e.detail.value.backgroundColor;
    var frontColor = e.detail.value.frontColor;
    console.log(backgroundColor, frontColor);
    wx.setNavigationBarColor({
      backgroundColor: backgroundColor || '#c4d7e6',
      frontColor: frontColor || '#ffffff',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      },
      success: function success() {
        console.log('setNavigationBarColor success');
      },
      fail: function fail(err) {
        console.log('setNavigationBarColor fail, err is', err);
      }
    });
    return false;
  }
});
});require("page/API/pages/set-navigation-bar-color/set-navigation-bar-color.js")
var __wxRoute = "page/API/pages/navigation-bar-loading/navigation-bar-loading", __wxRouteBegin = true;
define("page/API/pages/navigation-bar-loading/navigation-bar-loading.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({
  showNavigationBarLoading: function showNavigationBarLoading() {
    wx.showNavigationBarLoading();
  },
  hideNavigationBarLoading: function hideNavigationBarLoading() {
    wx.hideNavigationBarLoading();
  }
});
});require("page/API/pages/navigation-bar-loading/navigation-bar-loading.js")
var __wxRoute = "page/API/pages/navigator/navigator", __wxRouteBegin = true;
define("page/API/pages/navigator/navigator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  navigateTo: function navigateTo() {
    wx.navigateTo({ url: './navigator' });
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },
  redirectTo: function redirectTo() {
    wx.redirectTo({ url: './navigator' });
  }
});
});require("page/API/pages/navigator/navigator.js")
var __wxRoute = "page/API/pages/pull-down-refresh/pull-down-refresh", __wxRouteBegin = true;
define("page/API/pages/pull-down-refresh/pull-down-refresh.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  onPullDownRefresh: function onPullDownRefresh() {
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    });
    console.log('onPullDownRefresh', new Date());
  },
  stopPullDownRefresh: function stopPullDownRefresh() {
    wx.stopPullDownRefresh({
      complete: function complete(res) {
        wx.hideToast();
        console.log(res, new Date());
      }
    });
  }
});
});require("page/API/pages/pull-down-refresh/pull-down-refresh.js")
var __wxRoute = "page/API/pages/animation/animation", __wxRouteBegin = true;
define("page/API/pages/animation/animation.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({
  onReady: function onReady() {
    this.animation = wx.createAnimation();
  },
  rotate: function rotate() {
    this.animation.rotate(Math.random() * 720 - 360).step();
    this.setData({ animation: this.animation.export() });
  },
  scale: function scale() {
    this.animation.scale(Math.random() * 2).step();
    this.setData({ animation: this.animation.export() });
  },
  translate: function translate() {
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step();
    this.setData({ animation: this.animation.export() });
  },
  skew: function skew() {
    this.animation.skew(Math.random() * 90, Math.random() * 90).step();
    this.setData({ animation: this.animation.export() });
  },
  rotateAndScale: function rotateAndScale() {
    this.animation.rotate(Math.random() * 720 - 360).scale(Math.random() * 2).step();
    this.setData({ animation: this.animation.export() });
  },
  rotateThenScale: function rotateThenScale() {
    this.animation.rotate(Math.random() * 720 - 360).step().scale(Math.random() * 2).step();
    this.setData({ animation: this.animation.export() });
  },
  all: function all() {
    this.animation.rotate(Math.random() * 720 - 360).scale(Math.random() * 2).translate(Math.random() * 100 - 50, Math.random() * 100 - 50).skew(Math.random() * 90, Math.random() * 90).step();
    this.setData({ animation: this.animation.export() });
  },
  allInQueue: function allInQueue() {
    this.animation.rotate(Math.random() * 720 - 360).step().scale(Math.random() * 2).step().translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step().skew(Math.random() * 90, Math.random() * 90).step();
    this.setData({ animation: this.animation.export() });
  },
  reset: function reset() {
    this.animation.rotate(0, 0).scale(1).translate(0, 0).skew(0, 0).step({ duration: 0 });
    this.setData({ animation: this.animation.export() });
  }
});
});require("page/API/pages/animation/animation.js")
var __wxRoute = "page/API/pages/create-selector-query/create-selector-query", __wxRouteBegin = true;
define("page/API/pages/create-selector-query/create-selector-query.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  getFields: function getFields() {
    wx.createSelectorQuery().select('#the-id').fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY']
    }, function (res) {
      console.log(res);
      // res.dataset    // 节点的dataset
      // res.width      // 节点的宽度
      // res.height     // 节点的高度
      // res.scrollLeft // 节点的水平滚动位置
      // res.scrollTop  // 节点的竖直滚动位置
      // res.scrollX    // 节点 scroll-x 属性的当前值
      // res.scrollY    // 节点 scroll-x 属性的当前值
    }).exec();
  }
});
});require("page/API/pages/create-selector-query/create-selector-query.js")
var __wxRoute = "page/API/pages/action-sheet/action-sheet", __wxRouteBegin = true;
define("page/API/pages/action-sheet/action-sheet.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  actionSheetTap: function actionSheetTap() {
    wx.showActionSheet({
      itemList: ['item1', 'item2', 'item3', 'item4'],
      success: function success(e) {
        console.log(e.tapIndex);
      }
    });
  }
});
});require("page/API/pages/action-sheet/action-sheet.js")
var __wxRoute = "page/API/pages/modal/modal", __wxRouteBegin = true;
define("page/API/pages/modal/modal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    modalHidden: true,
    modalHidden2: true
  },
  modalTap: function modalTap(e) {
    wx.showModal({
      title: '弹窗标题',
      content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      showCancel: false,
      confirmText: '确定'
    });
  },
  noTitlemodalTap: function noTitlemodalTap(e) {
    wx.showModal({
      content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      confirmText: '确定',
      cancelText: '取消'
    });
  }
});
});require("page/API/pages/modal/modal.js")
var __wxRoute = "page/API/pages/toast/toast", __wxRouteBegin = true;
define("page/API/pages/toast/toast.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  toast1Tap: function toast1Tap() {
    wx.showToast({
      title: '默认'
    });
  },
  toast2Tap: function toast2Tap() {
    wx.showToast({
      title: 'duration 3000',
      duration: 3000
    });
  },
  toast3Tap: function toast3Tap() {
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 5000
    });
  },
  hideToast: function hideToast() {
    wx.hideToast();
  }
});
});require("page/API/pages/toast/toast.js")
var __wxRoute = "page/API/pages/get-network-type/get-network-type", __wxRouteBegin = true;
define("page/API/pages/get-network-type/get-network-type.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    hasNetworkType: false
  },
  getNetworkType: function getNetworkType() {
    var that = this;
    wx.getNetworkType({
      success: function success(res) {
        console.log(res);
        that.setData({
          hasNetworkType: true,
          networkType: res.subtype || res.networkType
        });
        that.update();
      }
    });
  },
  clear: function clear() {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    });
  }
});
});require("page/API/pages/get-network-type/get-network-type.js")
var __wxRoute = "page/API/pages/get-system-info/get-system-info", __wxRouteBegin = true;
define("page/API/pages/get-system-info/get-system-info.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({
  data: {
    systemInfo: {}
  },
  getSystemInfo: function getSystemInfo() {
    var that = this;
    wx.getSystemInfo({
      success: function success(res) {
        res.route = that.route;
        that.setData({
          systemInfo: res
        });
        that.update();
      }
    });
  }
});
});require("page/API/pages/get-system-info/get-system-info.js")
var __wxRoute = "page/API/pages/on-compass-change/on-compass-change", __wxRouteBegin = true;
define("page/API/pages/on-compass-change/on-compass-change.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({
  data: {
    direction: 0
  },
  onReady: function onReady() {
    var that = this;
    wx.onCompassChange(function (res) {
      that.setData({
        direction: parseInt(res.direction)
      });
    });
  }
});
});require("page/API/pages/on-compass-change/on-compass-change.js")
var __wxRoute = "page/API/pages/make-phone-call/make-phone-call", __wxRouteBegin = true;
define("page/API/pages/make-phone-call/make-phone-call.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    disabled: true
  },
  bindInput: function bindInput(e) {
    this.inputValue = e.detail.value;

    if (this.inputValue.length > 0) {
      this.setData({
        disabled: false
      });
    } else {
      this.setData({
        disabled: true
      });
    }
  },
  makePhoneCall: function makePhoneCall() {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: this.inputValue,
      success: function success() {
        console.log('成功拨打电话');
      }
    });
  }
});
});require("page/API/pages/make-phone-call/make-phone-call.js")
var __wxRoute = "page/API/pages/scan-code/scan-code", __wxRouteBegin = true;
define("page/API/pages/scan-code/scan-code.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    result: ''
  },
  scanCode: function scanCode() {
    var that = this;
    wx.scanCode({
      success: function success(res) {
        that.setData({
          result: res.result
        });
      },
      fail: function fail(res) {}
    });
  }
});
});require("page/API/pages/scan-code/scan-code.js")
var __wxRoute = "page/API/pages/request/request", __wxRouteBegin = true;
define("page/API/pages/request/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var requestUrl = require('../../../../config').requestUrl;
var duration = 2000;

Page({
  makeRequest: function makeRequest() {
    var self = this;

    self.setData({
      loading: true
    });

    wx.request({
      url: requestUrl,
      data: {
        noncestr: Date.now()
      },
      success: function success(result) {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: duration
        });
        self.setData({
          loading: false
        });
        console.log('request success', result);
      },

      fail: function fail(_ref) {
        var errMsg = _ref.errMsg;

        console.log('request fail', errMsg);
        self.setData({
          loading: false
        });
      }
    });
  }
});
});require("page/API/pages/request/request.js")
var __wxRoute = "page/API/pages/web-socket/web-socket", __wxRouteBegin = true;
define("page/API/pages/web-socket/web-socket.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var qcloud = require('../../../../vendor/qcloud-weapp-client-sdk/index');
var loginUrl = require('../../../../config').loginUrl;
var tunnelUrl = require('../../../../config').tunnelUrl;

function showModal(title, content) {
  wx.showModal({
    title: title,
    content: content,
    showCancel: false
  });
}

function showSuccess(title) {
  wx.showToast({
    title: title,
    icon: 'success',
    duration: 1000
  });
}

Page({
  data: {
    socketStatus: 'closed'
  },

  onLoad: function onLoad() {
    var self = this;

    qcloud.setLoginUrl(loginUrl);

    qcloud.login({
      success: function success(result) {
        console.log('登录成功', result);
        self.setData({
          hasLogin: true
        });
      },

      fail: function fail(error) {
        console.log('登录失败', error);
      }
    });
  },

  onUnload: function onUnload() {
    this.closeSocket();
  },

  toggleSocket: function toggleSocket(e) {
    var turnedOn = e.detail.value;

    if (turnedOn && this.data.socketStatus == 'closed') {
      this.openSocket();
    } else if (!turnedOn && this.data.socketStatus == 'connected') {
      var showSuccess = true;
      this.closeSocket(showSuccess);
    }
  },

  openSocket: function openSocket() {
    var _this = this;

    var socket = this.socket = new qcloud.Tunnel(tunnelUrl);

    socket.on('connect', function () {
      console.log('WebSocket 已连接');
      showSuccess('Socket已连接');
      _this.setData({
        socketStatus: 'connected',
        waitingResponse: false
      });
    });

    socket.on('close', function () {
      console.log('WebSocket 已断开');
      _this.setData({ socketStatus: 'closed' });
    });

    socket.on('error', function (error) {
      showModal('发生错误', JSON.stringify(error));
      console.error('socket error:', error);
      _this.setData({
        loading: false
      });
    });

    // 监听服务器推送消息
    socket.on('message', function (message) {
      showSuccess('收到信道消息');
      console.log('socket message:', message);
      _this.setData({
        loading: false
      });
    });

    // 打开信道
    socket.open();
  },

  closeSocket: function closeSocket(showSuccessToast) {
    if (this.socket) {
      this.socket.close();
    }
    if (showSuccessToast) showSuccess('Socket已断开');
    this.setData({ socketStatus: 'closed' });
  },

  sendMessage: function sendMessage() {
    if (this.socket && this.socket.isActive()) {
      this.socket.emit('message', {
        content: 'Hello, 小程序!'
      });
      this.setData({
        loading: true
      });
    }
  }
});
});require("page/API/pages/web-socket/web-socket.js")
var __wxRoute = "page/API/pages/upload-file/upload-file", __wxRouteBegin = true;
define("page/API/pages/upload-file/upload-file.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var uploadFileUrl = require('../../../../config').uploadFileUrl;

Page({
  chooseImage: function chooseImage() {
    var self = this;

    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: function success(res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths[0]);

        var imageSrc = res.tempFilePaths[0];

        wx.uploadFile({
          url: uploadFileUrl,
          filePath: imageSrc,
          name: 'data',
          success: function success(res) {
            console.log('uploadImage success, res is:', res);

            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            });

            self.setData({
              imageSrc: imageSrc
            });
          },
          fail: function fail(_ref) {
            var errMsg = _ref.errMsg;

            console.log('uploadImage fail, errMsg is', errMsg);
          }
        });
      },
      fail: function fail(_ref2) {
        var errMsg = _ref2.errMsg;

        console.log('chooseImage fail, err is', errMsg);
      }
    });
  }
});
});require("page/API/pages/upload-file/upload-file.js")
var __wxRoute = "page/API/pages/download-file/download-file", __wxRouteBegin = true;
define("page/API/pages/download-file/download-file.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var downloadExampleUrl = require('../../../../config').downloadExampleUrl;

Page({
  downloadImage: function downloadImage() {
    var self = this;

    wx.downloadFile({
      url: downloadExampleUrl,
      success: function success(res) {
        console.log('downloadFile success, res is', res);
        // wx.openDocument({
        //   filePath: res.tempFilePath,
        //   success: function (res) {
        //     console.log('打开文档成功')
        //   }
        // })
        self.setData({
          imageSrc: res.tempFilePath
        });
      },
      fail: function fail(_ref) {
        var errMsg = _ref.errMsg;

        console.log('downloadFile fail, err is:', errMsg);
      }
    });
  }
});
});require("page/API/pages/download-file/download-file.js")
var __wxRoute = "page/API/pages/image/image", __wxRouteBegin = true;
define("page/API/pages/image/image.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var sourceType = [['camera'], ['album'], ['camera', 'album']];
var sizeType = [['compressed'], ['original'], ['compressed', 'original']];

Page({
  data: {
    imageList: [],
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 2,
    sizeType: ['压缩', '原图', '压缩或原图'],

    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  sourceTypeChange: function sourceTypeChange(e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    });
  },
  sizeTypeChange: function sizeTypeChange(e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    });
  },
  countChange: function countChange(e) {
    this.setData({
      countIndex: e.detail.value
    });
  },
  chooseImage: function chooseImage() {
    var that = this;
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success: function success(res) {
        console.log(res);
        that.setData({
          imageList: res.tempFilePaths
        });
      }
    });
  },
  previewImage: function previewImage(e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current,
      urls: this.data.imageList
    });
  }
});
});require("page/API/pages/image/image.js")
var __wxRoute = "page/API/pages/voice/voice", __wxRouteBegin = true;
define("page/API/pages/voice/voice.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var util = require('../../../../util/util.js');
var playTimeInterval;
var recordTimeInterval;

Page({
  data: {
    recording: false,
    playing: false,
    hasRecord: false,
    recordTime: 0,
    playTime: 0,
    formatedRecordTime: '00:00:00',
    formatedPlayTime: '00:00:00'
  },
  onHide: function onHide() {
    if (this.data.playing) {
      this.stopVoice();
    } else if (this.data.recording) {
      this.stopRecordUnexpectedly();
    }
  },
  startRecord: function startRecord() {
    this.setData({ recording: true });

    var that = this;
    recordTimeInterval = setInterval(function () {
      var recordTime = that.data.recordTime += 1;
      that.setData({
        formatedRecordTime: util.formatTime(that.data.recordTime),
        recordTime: recordTime
      });
    }, 1000);
    wx.startRecord({
      success: function success(res) {
        that.setData({
          hasRecord: true,
          tempFilePath: res.tempFilePath,
          formatedPlayTime: util.formatTime(that.data.playTime)
        });
      },
      complete: function complete() {
        that.setData({ recording: false });
        clearInterval(recordTimeInterval);
      }
    });
  },
  stopRecord: function stopRecord() {
    wx.stopRecord();
  },
  stopRecordUnexpectedly: function stopRecordUnexpectedly() {
    var that = this;
    wx.stopRecord({
      success: function success() {
        console.log('stop record success');
        clearInterval(recordTimeInterval);
        that.setData({
          recording: false,
          hasRecord: false,
          recordTime: 0,
          formatedRecordTime: util.formatTime(0)
        });
      }
    });
  },
  playVoice: function playVoice() {
    var that = this;
    playTimeInterval = setInterval(function () {
      var playTime = that.data.playTime + 1;
      console.log('update playTime', playTime);
      that.setData({
        playing: true,
        formatedPlayTime: util.formatTime(playTime),
        playTime: playTime
      });
    }, 1000);
    wx.playVoice({
      filePath: this.data.tempFilePath,
      success: function success() {
        clearInterval(playTimeInterval);
        var playTime = 0;
        console.log('play voice finished');
        that.setData({
          playing: false,
          formatedPlayTime: util.formatTime(playTime),
          playTime: playTime
        });
      }
    });
  },
  pauseVoice: function pauseVoice() {
    clearInterval(playTimeInterval);
    wx.pauseVoice();
    this.setData({
      playing: false
    });
  },
  stopVoice: function stopVoice() {
    clearInterval(playTimeInterval);
    this.setData({
      playing: false,
      formatedPlayTime: util.formatTime(0),
      playTime: 0
    });
    wx.stopVoice();
  },
  clear: function clear() {
    clearInterval(playTimeInterval);
    wx.stopVoice();
    this.setData({
      playing: false,
      hasRecord: false,
      tempFilePath: '',
      formatedRecordTime: util.formatTime(0),
      recordTime: 0,
      playTime: 0
    });
  }
});
});require("page/API/pages/voice/voice.js")
var __wxRoute = "page/API/pages/file/file", __wxRouteBegin = true;
define("page/API/pages/file/file.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  onLoad: function onLoad() {
    this.setData({
      savedFilePath: wx.getStorageSync('savedFilePath')
    });
  },
  data: {
    tempFilePath: '',
    savedFilePath: '',
    dialog: {
      hidden: true
    }
  },
  chooseImage: function chooseImage() {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function success(res) {
        that.setData({
          tempFilePath: res.tempFilePaths[0]
        });
      }
    });
  },
  saveFile: function saveFile() {
    if (this.data.tempFilePath.length > 0) {
      var that = this;
      wx.saveFile({
        tempFilePath: this.data.tempFilePath,
        success: function success(res) {
          that.setData({
            savedFilePath: res.savedFilePath
          });
          wx.setStorageSync('savedFilePath', res.savedFilePath);
          that.setData({
            dialog: {
              title: '保存成功',
              content: '下次进入应用时，此文件仍可用',
              hidden: false
            }
          });
        },
        fail: function fail(res) {
          that.setData({
            dialog: {
              title: '保存失败',
              content: '应该是有 bug 吧',
              hidden: false
            }
          });
        }
      });
    }
  },
  clear: function clear() {
    wx.setStorageSync('savedFilePath', '');
    this.setData({
      tempFilePath: '',
      savedFilePath: ''
    });
  },
  confirm: function confirm() {
    this.setData({
      'dialog.hidden': true
    });
  }
});
});require("page/API/pages/file/file.js")
var __wxRoute = "page/API/pages/on-accelerometer-change/on-accelerometer-change", __wxRouteBegin = true;
define("page/API/pages/on-accelerometer-change/on-accelerometer-change.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  onReady: function onReady() {
    this.drawBigBall();
    var that = this;

    this.position = {
      x: 151,
      y: 151,
      vx: 0,
      vy: 0,
      ax: 0,
      ay: 0
    };
    wx.onAccelerometerChange(function (res) {
      that.setData({
        x: res.x.toFixed(2),
        y: res.y.toFixed(2),
        z: res.z.toFixed(2)
      });
      that.position.ax = Math.sin(res.x * Math.PI / 2);
      that.position.ay = -Math.sin(res.y * Math.PI / 2);
      // that.drawSmallBall()
    });

    this.interval = setInterval(function () {
      that.drawSmallBall();
    }, 17);
  },
  drawBigBall: function drawBigBall() {
    var context = wx.createContext();
    context.beginPath(0);
    context.arc(151, 151, 140, 0, Math.PI * 2);
    context.setFillStyle('#ffffff');
    context.setStrokeStyle('#aaaaaa');
    context.fill();
    // context.stroke()
    wx.drawCanvas({
      canvasId: 'big-ball',
      actions: context.getActions()
    });
  },
  drawSmallBall: function drawSmallBall() {
    var p = this.position;
    var strokeStyle = 'rgba(1,1,1,0)';

    p.x = p.x + p.vx;
    p.y = p.y + p.vy;
    p.vx = p.vx + p.ax;
    p.vy = p.vy + p.ay;

    if (Math.sqrt(Math.pow(Math.abs(p.x) - 151, 2) + Math.pow(Math.abs(p.y) - 151, 2)) >= 115) {
      if (p.x > 151 && p.vx > 0) {
        p.vx = 0;
      }
      if (p.x < 151 && p.vx < 0) {
        p.vx = 0;
      }
      if (p.y > 151 && p.vy > 0) {
        p.vy = 0;
      }
      if (p.y < 151 && p.vy < 0) {
        p.vy = 0;
      }
      strokeStyle = '#ff0000';
    }

    var context = wx.createContext();
    context.beginPath(0);
    context.arc(p.x, p.y, 15, 0, Math.PI * 2);
    context.setFillStyle('#1aad19');
    context.setStrokeStyle(strokeStyle);
    context.fill();
    // context.stroke()
    wx.drawCanvas({
      canvasId: 'small-ball',
      actions: context.getActions()
    });
  },
  data: {
    x: 0,
    y: 0,
    z: 0
  },
  onUnload: function onUnload() {
    clearInterval(this.interval);
  }
});
});require("page/API/pages/on-accelerometer-change/on-accelerometer-change.js")
var __wxRoute = "page/API/pages/canvas/canvas", __wxRouteBegin = true;
define("page/API/pages/canvas/canvas.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var example = require('./example.js');

Page({
  onLoad: function onLoad() {
    this.context = wx.createContext();

    var methods = Object.keys(example);
    this.setData({
      methods: methods
    });

    var that = this;
    methods.forEach(function (method) {
      that[method] = function () {
        example[method](that.context);
        var actions = that.context.getActions();

        wx.drawCanvas({
          canvasId: 'canvas',
          actions: actions
        });
      };
    });
  },
  toTempFilePath: function toTempFilePath() {
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      success: function success(res) {
        console.log(res);
      },
      fail: function fail(res) {
        console.log(res);
      }
    });
  }
});
});require("page/API/pages/canvas/canvas.js")
var __wxRoute = "page/API/pages/background-audio/background-audio", __wxRouteBegin = true;
define("page/API/pages/background-audio/background-audio.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var app = getApp();
var util = require('../../../../util/util.js');
var dataUrl = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
Page({
  onLoad: function onLoad() {
    this._enableInterval();

    if (app.globalData.backgroundAudioPlaying) {
      this.setData({
        playing: true
      });
    }
  },
  data: {
    playing: false,
    playTime: 0,
    formatedPlayTime: '00:00:00'
  },
  play: function play(res) {
    var that = this;
    wx.playBackgroundAudio({
      dataUrl: dataUrl,
      title: '此时此刻',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      complete: function complete(res) {
        that.setData({
          playing: true
        });
      }
    });
    this._enableInterval();
    app.globalData.backgroundAudioPlaying = true;
  },
  seek: function seek(e) {
    clearInterval(this.updateInterval);
    var that = this;
    wx.seekBackgroundAudio({
      position: e.detail.value,
      complete: function complete() {
        // 实际会延迟两秒左右才跳过去
        setTimeout(function () {
          that._enableInterval();
        }, 2000);
      }
    });
  },
  pause: function pause() {
    var that = this;
    wx.pauseBackgroundAudio({
      dataUrl: dataUrl,
      success: function success() {
        that.setData({
          playing: false
        });
      }
    });
    app.globalData.backgroundAudioPlaying = false;
  },
  stop: function stop() {
    var that = this;
    wx.stopBackgroundAudio({
      dataUrl: dataUrl,
      success: function success(res) {
        that.setData({
          playing: false,
          playTime: 0,
          formatedPlayTime: util.formatTime(0)
        });
      }
    });
    app.globalData.backgroundAudioPlaying = false;
  },
  _enableInterval: function _enableInterval() {
    var that = this;
    update();
    this.updateInterval = setInterval(update, 500);
    function update() {
      wx.getBackgroundAudioPlayerState({
        success: function success(res) {
          that.setData({
            playTime: res.currentPosition,
            formatedPlayTime: util.formatTime(res.currentPosition + 1)
          });
        }
      });
    }
  },
  onUnload: function onUnload() {
    clearInterval(this.updateInterval);
  }
});
});require("page/API/pages/background-audio/background-audio.js")
var __wxRoute = "page/API/pages/video/video", __wxRouteBegin = true;
define("page/API/pages/video/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var sourceType = [['camera'], ['album'], ['camera', 'album']];
var camera = [['front'], ['back'], ['front', 'back']];
var duration = Array.apply(null, { length: 60 }).map(function (n, i) {
  return i + 1;
});

Page({
  data: {
    sourceTypeIndex: 2,
    sourceType: ['拍摄', '相册', '拍摄或相册'],

    cameraIndex: 2,
    camera: ['前置', '后置', '前置或后置'],

    durationIndex: 59,
    duration: duration.map(function (t) {
      return t + '秒';
    }),

    src: ''
  },
  sourceTypeChange: function sourceTypeChange(e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    });
  },
  cameraChange: function cameraChange(e) {
    this.setData({
      cameraIndex: e.detail.value
    });
  },
  durationChange: function durationChange(e) {
    this.setData({
      durationIndex: e.detail.value
    });
  },
  chooseVideo: function chooseVideo() {
    var that = this;
    wx.chooseVideo({
      sourceType: sourceType[this.data.sourceTypeIndex],
      camera: camera[this.data.cameraIndex],
      maxDuration: duration[this.data.durationIndex],
      success: function success(res) {
        that.setData({
          src: res.tempFilePath
        });
      }
    });
  }
});
});require("page/API/pages/video/video.js")
var __wxRoute = "page/API/pages/get-location/get-location", __wxRouteBegin = true;
define("page/API/pages/get-location/get-location.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var util = require('../../../../util/util.js');
var formatLocation = util.formatLocation;

Page({
  data: {
    hasLocation: false
  },
  getLocation: function getLocation() {
    var that = this;
    wx.getLocation({
      success: function success(res) {
        console.log(res);
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        });
      }
    });
  },
  clear: function clear() {
    this.setData({
      hasLocation: false
    });
  }
});
});require("page/API/pages/get-location/get-location.js")
var __wxRoute = "page/API/pages/open-location/open-location", __wxRouteBegin = true;
define("page/API/pages/open-location/open-location.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
"use strict";

Page({
  openLocation: function openLocation(e) {
    console.log(e);
    var value = e.detail.value;
    console.log(value);
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude),
      name: value.name,
      address: value.address
    });
  }
});
});require("page/API/pages/open-location/open-location.js")
var __wxRoute = "page/API/pages/openlink/openlink", __wxRouteBegin = true;
define("page/API/pages/openlink/openlink.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    url: '',
    data: '',
    dialog: {
      title: '',
      content: '',
      hidden: true
    }
  },
  urlChange: function urlChange(e) {
    this.data.url = e.detail.value;
  },
  openLink: function openLink(e) {
    if (this.data.url) {
      if (this.data.url.indexOf('http') !== 0) {
        this.data.url = 'http://' + this.data.url;
      }
      console.log(this.data.url);
      wx.openLink({
        url: this.data.url
      });
    }
  }
});
});require("page/API/pages/openlink/openlink.js")
var __wxRoute = "page/API/pages/choose-location/choose-location", __wxRouteBegin = true;
define("page/API/pages/choose-location/choose-location.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

var util = require('../../../../util/util.js');
var formatLocation = util.formatLocation;

Page({
  data: {
    hasLocation: false
  },
  chooseLocation: function chooseLocation() {
    var that = this;
    wx.chooseLocation({
      success: function success(res) {
        console.log(res);
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude),
          locationAddress: res.address
        });
      }
    });
  },
  clear: function clear() {
    this.setData({
      hasLocation: false
    });
  }
});
});require("page/API/pages/choose-location/choose-location.js")
var __wxRoute = "page/API/pages/storage/storage", __wxRouteBegin = true;
define("page/API/pages/storage/storage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,HeraJSCore,HeraJSBridge,Reporter){
'use strict';

Page({
  data: {
    key: '',
    data: '',
    dialog: {
      title: '',
      content: '',
      hidden: true
    }
  },
  keyChange: function keyChange(e) {
    this.data.key = e.detail.value;
  },
  dataChange: function dataChange(e) {
    this.data.data = e.detail.value;
  },
  getStorage: function getStorage() {
    var key = this.data.key,
        data = this.data.data;
    var storageData;

    if (key.length === 0) {
      this.setData({
        key: key,
        data: data,
        'dialog.hidden': false,
        'dialog.title': '读取数据失败',
        'dialog.content': 'key 不能为空'
      });
    } else {
      storageData = wx.getStorageSync(key);
      if (storageData === '') {
        this.setData({
          key: key,
          data: data,
          'dialog.hidden': false,
          'dialog.title': '读取数据失败',
          'dialog.content': '找不到 key 对应的数据'
        });
      } else {
        this.setData({
          key: key,
          data: data,
          'dialog.hidden': false,
          'dialog.title': '读取数据成功',
          'dialog.content': "data: '" + storageData + "'"
        });
      }
    }
  },
  setStorage: function setStorage() {
    var key = this.data.key;
    var data = this.data.data;
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data,
        'dialog.hidden': false,
        'dialog.title': '保存数据失败',
        'dialog.content': 'key 不能为空'
      });
    } else {
      wx.setStorageSync(key, data);
      this.setData({
        key: key,
        data: data,
        'dialog.hidden': false,
        'dialog.title': '存储数据成功'
      });
    }
  },
  clearStorage: function clearStorage() {
    wx.clearStorageSync();
    this.setData({
      key: '',
      data: '',
      'dialog.hidden': false,
      'dialog.title': '清除数据成功',
      'dialog.content': ''
    });
  },
  confirm: function confirm() {
    this.setData({
      'dialog.hidden': true,
      'dialog.title': '',
      'dialog.content': ''
    });
  }
});
});require("page/API/pages/storage/storage.js")