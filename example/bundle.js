/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Spotify = __webpack_require__(1);

var _Spotify2 = _interopRequireDefault(_Spotify);

var _AlbumList = __webpack_require__(7);

var _AlbumList2 = _interopRequireDefault(_AlbumList);

var _AlbumInfo = __webpack_require__(8);

var _AlbumInfo2 = _interopRequireDefault(_AlbumInfo);

var _AlbumTracks = __webpack_require__(9);

var _AlbumTracks2 = _interopRequireDefault(_AlbumTracks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */

var albums = _Spotify2.default.search.albums('The weeknd');
var albumList = document.getElementById('album-list');

var album = _Spotify2.default.album.getAlbum('09fggMHib4YkOtwQNXEBII');
var albumInfo = document.getElementById('album-info');

var albumTracks = document.getElementById('album-tracks');

album.then(function (data) {
  return (0, _AlbumInfo2.default)(data, albumInfo);
});
albums.then(function (data) {
  return (0, _AlbumList2.default)(data.albums.items, albumList);
}).then(function (data) {
  return (0, _AlbumTracks2.default)(data.tracks.items, albumTracks);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spotifyWrapper = __webpack_require__(2);

var _spotifyWrapper2 = _interopRequireDefault(_spotifyWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spotify = new _spotifyWrapper2.default({
  token: 'BQDCMwD9l7tuvulPkbMZZOkmgN7I1rLTIf_CqNbMuZUfjYMduk_W61RAM7fU50oFr5fVwuqh18Uy2hUb2Q5XsDOuBVzn3f1ZwLgD6_9Zy2PHpsibZGyjyx1xnoV_2cq2L098rfDRcqUv4w'
});

exports.default = spotify;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global fetch */


var _search = __webpack_require__(3);

var _search2 = _interopRequireDefault(_search);

var _album = __webpack_require__(4);

var _album2 = _interopRequireDefault(_album);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpotifyWrapper = function () {
  function SpotifyWrapper(options) {
    _classCallCheck(this, SpotifyWrapper);

    this.apiURL = options.apiURL || _config2.default;
    this.token = options.token;

    this.album = _album2.default.bind(this)();
    this.search = _search2.default.bind(this)();
  }

  _createClass(SpotifyWrapper, [{
    key: 'request',
    value: function request(url) {
      var headers = {
        headers: {
          Authorization: '\'Bearer ' + this.token + '\''
        }
      };

      return fetch(url, headers).then(_utils2.default);
    }
  }]);

  return SpotifyWrapper;
}();

exports.default = SpotifyWrapper;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;
function searcher(type, query) {
  return this.request(this.apiURL + '/search?q=' + query + '&type=' + type);
}

function search() {
  return {
    artists: searcher.bind(this, 'artist'),
    albums: searcher.bind(this, 'album'),
    tracks: searcher.bind(this, 'track'),
    playlists: searcher.bind(this, 'playlist')
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = album;
function album() {
  var _this = this;

  return {
    getAlbum: function getAlbum(id) {
      return _this.request(_this.apiURL + "/albums/" + id);
    },
    getAlbums: function getAlbums(ids) {
      return _this.request(_this.apiURL + "/albums/?ids=" + ids);
    },
    getTracks: function getTracks(id) {
      return _this.request(_this.apiURL + "/albums/" + id + "/tracks");
    }
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = 'https://api.spotify.com/v1';
exports.default = API_URL;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toJSON = function toJSON(data) {
  return data.json();
};
exports.default = toJSON;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderAlbums;
/* eslint no-param-reassign: ["error", { "props": false }] */
function renderAlbums(data, element) {
  var markup = data.map(function (album) {
    return '\n  <div class="list-item">\n    <img src="' + album.images[2].url + '" alt="' + album.name + '" class="list-image">\n    <div class="list-description">\n      <p class="list-title">' + album.name + '</p>\n      <p class="list-subtitle">' + album.artists[0].name + '</p>\n    </div>\n  </div>';
  }).join('');
  element.innerHTML = markup;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderAlbumInfo;
/* eslint no-param-reassign: ["error", { "props": false }] */

function renderAlbumInfo(data, element) {
  var markup = "\n    <img class=\"album-image\" src=\"" + data.images[0].url + "\" alt=\"" + data.name + "\">\n     <p class=\"album-title\">" + data.name + "</p>\n     <p class=\"album-artist\">" + data.artists[0].name + "</p>\n     <p class=\"album-counter\">" + data.tracks.total + " M\xFAsicas</p>\n     ";
  element.innerHTML = markup;
  return data;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderAlbumTracks;
/* eslint no-param-reassign: ["error", { "props": false }] */

function createMarkup(tracks) {
  return tracks.map(function (track) {
    return '\n  <div class="music" data-track-preview="">\n    <p class="music-number">' + track.track_number + '</p>\n    <p class="music-title">' + track.name + '</p>\n    <p class="music-duration">' + track.duration_ms + '</p>\n  </div>';
  }).join('');
}

function renderAlbumTracks(data, element) {
  var markup = createMarkup(data);
  element.innerHTML = markup;
}

/***/ })
/******/ ]);