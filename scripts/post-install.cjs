'use strict';

var require$$1 = require('path');
var require$$0$1 = require('fs');
var require$$3$1 = require('os');
var require$$2 = require('https');
var require$$3 = require('url');
var require$$4 = require('zlib');
var require$$0$2 = require('util');
var require$$5 = require('assert');
var require$$2$1 = require('events');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var require$$3__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$3$1);
var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$2);
var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);
var require$$2__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$2$1);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  var f = n.default;
	if (typeof f == "function") {
		var a = function () {
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var build = {exports: {}};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

var tslib_es6 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	__extends: __extends,
	get __assign () { return __assign; },
	__rest: __rest,
	__decorate: __decorate,
	__param: __param,
	__metadata: __metadata,
	__awaiter: __awaiter,
	__generator: __generator,
	__createBinding: __createBinding,
	__exportStar: __exportStar,
	__values: __values,
	__read: __read,
	__spread: __spread,
	__spreadArrays: __spreadArrays,
	__spreadArray: __spreadArray,
	__await: __await,
	__asyncGenerator: __asyncGenerator,
	__asyncDelegator: __asyncDelegator,
	__asyncValues: __asyncValues,
	__makeTemplateObject: __makeTemplateObject,
	__importStar: __importStar,
	__importDefault: __importDefault,
	__classPrivateFieldGet: __classPrivateFieldGet,
	__classPrivateFieldSet: __classPrivateFieldSet,
	__classPrivateFieldIn: __classPrivateFieldIn
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(tslib_es6);

var postInstall = {};

var readJson = {};

var hasRequiredReadJson;

function requireReadJson () {
	if (hasRequiredReadJson) return readJson;
	hasRequiredReadJson = 1;
	Object.defineProperty(readJson, "__esModule", { value: true });
	const tslib_1 = require$$0;
	const path = tslib_1.__importStar(require$$1__default["default"]);
	const fs = tslib_1.__importStar(require$$0__default["default"]);
	function readPkgJson(dir) {
	    const pkgPath = `${path.resolve(dir).replace(/\\/g, "/")}/package.json`;
	    const raw = fs.readFileSync(pkgPath, 'utf8');
	    return {
	        packageJson: JSON.parse(raw),
	        path: pkgPath,
	    };
	}
	readJson.default = readPkgJson;
	return readJson;
}

var isNodeModules = {};

var hasRequiredIsNodeModules;

function requireIsNodeModules () {
	if (hasRequiredIsNodeModules) return isNodeModules;
	hasRequiredIsNodeModules = 1;
	Object.defineProperty(isNodeModules, "__esModule", { value: true });
	const tslib_1 = require$$0;
	const path = tslib_1.__importStar(require$$1__default["default"]);
	function isNodeModules$1(name) {
	    // if grand-parent directory is "node_modules", we are being installed in node_modules
	    // this is sufficient to know if we are a top module in most cases.
	    // Only misses the case where a module is being installed manually within node_modules
	    // from a git clone. Given we should be installing binaries, this is even less
	    // probable to trigger a false alarm.
	    const scopedName = name.split("/").length === 2;
	    return scopedName
	        ? __dirname.split(path.sep).slice(-3, -1)[0] === "node_modules"
	        : __dirname.split(path.sep).slice(-2, -1)[0] === "node_modules";
	}
	isNodeModules.default = isNodeModules$1;
	return isNodeModules;
}

var download = {};

var untar = {};

var hasRequiredUntar;

function requireUntar () {
	if (hasRequiredUntar) return untar;
	hasRequiredUntar = 1;
	/**
	 *
	 * We need to untar the downloaded tarball.
	 *
	 * Instead of packaging
	 * the fu
	 * To reduce the packaged footprint of the post install script, we
	 * n
	 * Which we masterfully copy from https://github.com/antimatter15/untar.js
	 * to be inline! We are after all cleverer with our words than with our code.
	 *
	 */
	/**
	 * Allows you to peek and consume bytes as numbers and strings out of an ArrayBuffer.
	 * In this buffer, everything must be byte-aligned.
	 *
	 * @param {ArrayBuffer} ab The ArrayBuffer object.
	 * @param {number=} opt_offset The offset into the ArrayBuffer
	 * @param {number=} opt_length The length of this BitStream
	 * @constructor
	 */
	class ByteStream {
	    ptr;
	    bytes;
	    constructor(ab, opt_offset, opt_length) {
	        const offset = opt_offset || 0;
	        const length = opt_length || ab.byteLength;
	        this.bytes = new Uint8Array(ab, offset, length);
	        this.ptr = 0;
	    }
	    /**
	     * Peeks at the next n bytes as an unsigned number but does not advance the
	     * pointer
	     * TODO: This apparently cannot read more than 4 bytes as a number?
	     * @param {number} n The number of bytes to peek at.
	     * @return {number} The n bytes interpreted as an unsigned number.
	     */
	    peekNumber(n) {
	        // TODO: return error if n would go past the end of the stream?
	        if (n <= 0 || typeof n != typeof 1)
	            return -1;
	        let result = 0;
	        // read from last byte to first byte and roll them in
	        let curByte = this.ptr + n - 1;
	        while (curByte >= this.ptr) {
	            result <<= 8;
	            result |= this.bytes[curByte];
	            --curByte;
	        }
	        return result;
	    }
	    /**
	     * Returns the next n bytes as an unsigned number (or -1 on error)
	     * and advances the stream pointer n bytes.
	     * @param {number} n The number of bytes to read.
	     * @return {number} The n bytes interpreted as an unsigned number.
	     */
	    readNumber(n) {
	        const num = this.peekNumber(n);
	        this.ptr += n;
	        return num;
	    }
	    /**
	     * Returns the next n bytes as a signed number but does not advance the
	     * pointer.
	     * @param {number} n The number of bytes to read.
	     * @return {number} The bytes interpreted as a signed number.
	     */
	    peekSignedNumber(n) {
	        let num = this.peekNumber(n);
	        const HALF = Math.pow(2, n * 8 - 1);
	        const FULL = HALF * 2;
	        if (num >= HALF)
	            num -= FULL;
	        return num;
	    }
	    /**
	     * Returns the next n bytes as a signed number and advances the stream pointer.
	     * @param {number} n The number of bytes to read.
	     * @return {number} The bytes interpreted as a signed number.
	     */
	    readSignedNumber(n) {
	        const num = this.peekSignedNumber(n);
	        this.ptr += n;
	        return num;
	    }
	    /**
	     * This returns n bytes as a sub-array, advancing the pointer if movePointers
	     * is true.
	     * @param {number} n The number of bytes to read.
	     * @param {boolean} movePointers Whether to move the pointers.
	     * @return {Uint8Array} The subarray.
	     */
	    peekBytes(n, movePointers) {
	        if (n <= 0 || typeof n != typeof 1) {
	            return null;
	        }
	        const result = this.bytes.subarray(this.ptr, this.ptr + n);
	        if (movePointers) {
	            this.ptr += n;
	        }
	        return result;
	    }
	    /**
	     * Reads the next n bytes as a sub-array.
	     * @param {number} n The number of bytes to read.
	     * @return {Uint8Array} The subarray.
	     */
	    readBytes(n) {
	        return this.peekBytes(n, true);
	    }
	    /**
	     * Peeks at the next n bytes as a string but does not advance the pointer.
	     * @param {number} n The number of bytes to peek at.
	     * @return {string} The next n bytes as a string.
	     */
	    peekString(n) {
	        if (n <= 0 || typeof n != typeof 1) {
	            return "";
	        }
	        let result = "";
	        for (var p = this.ptr, end = this.ptr + n; p < end; ++p) {
	            result += String.fromCharCode(this.bytes[p]);
	        }
	        return result;
	    }
	    /**
	     * Returns the next n bytes as an ASCII string and advances the stream pointer
	     * n bytes.
	     * @param {number} n The number of bytes to read.
	     * @return {string} The next n bytes as a string.
	     */
	    readString(n) {
	        let strToReturn = this.peekString(n);
	        this.ptr += n;
	        return strToReturn;
	    }
	}
	// Removes all characters from the first zero-byte in the string onwards.
	var readCleanString = function (bstr, numBytes) {
	    var str = bstr.readString(numBytes);
	    var zIndex = str.indexOf(String.fromCharCode(0));
	    return zIndex != -1 ? str.substr(0, zIndex) : str;
	};
	// takes a ByteStream and parses out the local file information
	function TarLocalFile(bStream) {
	    const fileInfo = {};
	    fileInfo.isValid = false;
	    // Read in the header block
	    fileInfo.name = readCleanString(bStream, 100);
	    fileInfo.mode = readCleanString(bStream, 8);
	    fileInfo.uid = readCleanString(bStream, 8);
	    fileInfo.gid = readCleanString(bStream, 8);
	    fileInfo.size = parseInt(readCleanString(bStream, 12), 8);
	    fileInfo.mtime = readCleanString(bStream, 12);
	    fileInfo.chksum = readCleanString(bStream, 8);
	    fileInfo.typeflag = readCleanString(bStream, 1);
	    fileInfo.linkname = readCleanString(bStream, 100);
	    fileInfo.maybeMagic = readCleanString(bStream, 6);
	    // 100+8+8+8+12+12+8+1+100+6 = 263 Bytes
	    if (fileInfo.maybeMagic == "ustar") {
	        fileInfo.version = readCleanString(bStream, 2);
	        fileInfo.uname = readCleanString(bStream, 32);
	        fileInfo.gname = readCleanString(bStream, 32);
	        fileInfo.devmajor = readCleanString(bStream, 8);
	        fileInfo.devminor = readCleanString(bStream, 8);
	        fileInfo.prefix = readCleanString(bStream, 155);
	        // 2+32+32+8+8+155 = 237 Bytes
	        if (fileInfo.prefix.length) {
	            fileInfo.name = fileInfo.prefix + fileInfo.name;
	        }
	        bStream.readBytes(12); // 512 - 263 - 237
	    }
	    else {
	        bStream.readBytes(249); // 512 - 263
	    }
	    // Done header, now rest of blocks are the file contents.
	    fileInfo.filename = fileInfo.name;
	    fileInfo.fileData = null;
	    // console.info("Untarring file '" + fileInfo.filename + "'");
	    // console.info("  size = " + fileInfo.size);
	    // console.info("  typeflag = " + fileInfo.typeflag);
	    if (fileInfo.typeflag == 0) {
	        // console.info("  This is a regular file.");
	        // var sizeInBytes = parseInt(fileInfo.size);
	        fileInfo.fileData = new Uint8Array(bStream.bytes.buffer, bStream.ptr, fileInfo.size);
	        if (fileInfo.name.length > 0 &&
	            fileInfo.size > 0 &&
	            fileInfo.fileData &&
	            fileInfo.fileData.buffer) {
	            fileInfo.isValid = true;
	        }
	    }
	    else if (fileInfo.typeflag == 5) ;
	    bStream.ptr += fileInfo.size;
	    // Round up to 512-byte blocks.
	    var remaining = 512 - (bStream.ptr % 512);
	    // console.log('remaining')
	    if (remaining > 0 && remaining < 512) {
	        bStream.readBytes(remaining);
	    }
	    return fileInfo;
	}
	const fs = require$$0__default["default"];
	const path = require$$1__default["default"];
	untar.untar = function (arrayBuffer, pkgRoot) {
	    var bStream = new ByteStream(arrayBuffer);
	    var localFiles = [];
	    // While we don't encounter an empty block, keep making TarLocalFiles.
	    while (bStream.peekNumber(4) != 0) {
	        var oneLocalFile = TarLocalFile(bStream);
	        if (oneLocalFile && oneLocalFile.isValid) {
	            const fpath = writeFile(oneLocalFile, pkgRoot);
	            localFiles.push(fpath);
	            // totalUncompressedBytesInArchive += oneLocalFile.size;
	        }
	    }
	    return localFiles;
	};
	function writeFile(uncompressedFile /* fileInfo */, pkgRoot) {
	    const { filename, mode, /* mtime, uid, gid, */ fileData } = uncompressedFile;
	    const fPath = `${pkgRoot}/${filename}`;
	    fs.mkdirSync(path.dirname(fPath), { recursive: true });
	    fs.writeFileSync(fPath, fileData);
	    // setting the times seems to mess up 'ls -l' on windows.
	    // It's not the biggest problem, so we'll just skip for now.
	    // But makes one wonder why this is really a problem.
	    // const stats = fs.statSync(fPath);
	    // fs.utimesSync(fPath, stats.atime, mtime)
	    // WARNING: DO NOT set file permissions.
	    // Messing with this seems to cause trouble on ubuntu
	    // https://nodejs.org/api/fs.html#fschmodpath-mode-callback
	    fs.chmodSync(fPath, mode.trim()); // parseInt(mode.trim()));
	    return fPath;
	}
	return untar;
}

var hasRequiredDownload;

function requireDownload () {
	if (hasRequiredDownload) return download;
	hasRequiredDownload = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.trace = exports.debug = void 0;
		const tslib_1 = require$$0;
		const fs = tslib_1.__importStar(require$$0__default["default"]);
		const https = tslib_1.__importStar(require$$2__default["default"]);
		const url_1 = tslib_1.__importDefault(require$$3__default["default"]);
		// import rimraf from "rimraf";
		const zlib_1 = tslib_1.__importDefault(require$$4__default["default"]);
		const { untar } = requireUntar();
		const debug = (msg) => !!process.env.SCATTER_BIN_DEBUG && console.log(`[SCATTER_BIN_DEBUG] ${msg}`);
		exports.debug = debug;
		const trace = (message) => {
		    if (process.env.npm_config_loglevel !== "silent") {
		        console.log(message);
		    }
		};
		exports.trace = trace;
		const httpsGet = async function (url, _private, redirects = 0) {
		    return new Promise((resolve, reject) => {
		        const data = [];
		        // const data = new Blob();
		        (0, exports.debug)(`fetching ${url}`);
		        url_1.default.parse(url);
		        _private
		            ? {
		                Authorization: `token ${process.env.GITHUB_TOKEN}`,
		            }
		            : undefined;
		        https
		            .get(url.replace(/^https:\/\//, `https://${process.env.GITHUB_TOKEN}@`), (res) => {
		            const { statusCode, headers } = res;
		            (0, exports.debug)(`statusCode ${JSON.stringify({ statusCode, headers }, null, 2)}`);
		            if (!statusCode) {
		                reject({ url, response: res });
		            }
		            // handle redirects, we'll limit to 10, but really it should be much smaller - 1 or 2 at most.
		            if ((res.statusCode === 301 || res.statusCode === 302) &&
		                redirects < 10) {
		                const { location } = headers;
		                (0, exports.debug)(`redirect: ${JSON.stringify({ statusCode, headers, url, redirects }, null, 2)}`);
		                return httpsGet(location, _private, redirects + 1)
		                    .then(resolve)
		                    .catch(reject);
		            }
		            else if (400 <= statusCode) {
		                const { headers, trailers, 
		                // aborted,
		                // upgrade,
		                method, statusCode, statusMessage, } = res;
		                const details = {
		                    url,
		                    headers,
		                    trailers,
		                    // aborted,
		                    // upgrade,
		                    method,
		                    statusCode,
		                    statusMessage,
		                };
		                const err = new Error(`${statusCode} ${statusMessage}\n${JSON.stringify(details, null, 2)}`);
		                reject(err);
		            }
		            res.on("data", (chunk) => {
		                data.push(chunk);
		            });
		            res.on("end", () => {
		                resolve(Buffer.concat(data));
		            });
		        })
		            .on("error", (err) => {
		            reject(err);
		        });
		    });
		};
		async function download(tgzUrl, dstDir, _private) {
		    const tgzBuffer = await httpsGet(tgzUrl, _private);
		    // rimraf.sync(dstDir);
		    fs.mkdirSync(dstDir, { recursive: true });
		    const unzipped = zlib_1.default.unzipSync(tgzBuffer);
		    (0, exports.debug)(`unzip release asset - success`);
		    const files = untar(unzipped, dstDir);
		    (0, exports.debug)(`untar release asset - success`);
		    return files;
		}
		exports.default = download;
		// download(
		//   //  `https://github.com/tufan-io/noun-and-verb/releases/download/0.0.1-alpha/noun-and-verb-0.0.1-alpha.tgz`,
		//   `https://github.com/tufan-io/noun-and-verb/releases/download/0.0.1-alpha/noun_and_verb.0.0.1-alpha.mac_m1.tar.gz`,
		//   `./.tmp/dwn`,
		//   true
		// )
		//   .catch(console.error)
		//   .then(console.log);
} (download));
	return download;
}

var isWindows;
var hasRequiredIsWindows;

function requireIsWindows () {
	if (hasRequiredIsWindows) return isWindows;
	hasRequiredIsWindows = 1;
	const platform = process.env.__TESTING_BIN_LINKS_PLATFORM__ || process.platform;
	isWindows = platform === 'win32';
	return isWindows;
}

var getNodeModules;
var hasRequiredGetNodeModules;

function requireGetNodeModules () {
	if (hasRequiredGetNodeModules) return getNodeModules;
	hasRequiredGetNodeModules = 1;
	// we know it's global and/or not top, so the path has to be
	// {prefix}/node_modules/{name}.  Can't rely on pkg.name, because
	// it might be installed as an alias.

	const { dirname, basename } = require$$1__default["default"];
	// this gets called a lot and can't change, so memoize it
	const memo = new Map();
	getNodeModules = path => {
	  if (memo.has(path)) {
	    return memo.get(path)
	  }

	  const scopeOrNm = dirname(path);
	  const nm = basename(scopeOrNm) === 'node_modules' ? scopeOrNm
	    : dirname(scopeOrNm);

	  memo.set(path, nm);
	  return nm
	};
	return getNodeModules;
}

var getPrefix;
var hasRequiredGetPrefix;

function requireGetPrefix () {
	if (hasRequiredGetPrefix) return getPrefix;
	hasRequiredGetPrefix = 1;
	const { dirname } = require$$1__default["default"];
	const getNodeModules = requireGetNodeModules();
	getPrefix = path => dirname(getNodeModules(path));
	return getPrefix;
}

var binTarget;
var hasRequiredBinTarget;

function requireBinTarget () {
	if (hasRequiredBinTarget) return binTarget;
	hasRequiredBinTarget = 1;
	const isWindows = requireIsWindows();
	const getPrefix = requireGetPrefix();
	const getNodeModules = requireGetNodeModules();
	const { dirname } = require$$1__default["default"];

	binTarget = ({ top, path }) =>
	  !top ? getNodeModules(path) + '/.bin'
	  : isWindows ? getPrefix(path)
	  : dirname(getPrefix(path)) + '/bin';
	return binTarget;
}

var mkdirpInferOwner = {exports: {}};

var inferOwner = {exports: {}};

var hasRequiredInferOwner;

function requireInferOwner () {
	if (hasRequiredInferOwner) return inferOwner.exports;
	hasRequiredInferOwner = 1;
	const cache = new Map();
	const fs = require$$0__default["default"];
	const { dirname, resolve } = require$$1__default["default"];


	const lstat = path => new Promise((res, rej) =>
	  fs.lstat(path, (er, st) => er ? rej(er) : res(st)));

	const inferOwner$1 = path => {
	  path = resolve(path);
	  if (cache.has(path))
	    return Promise.resolve(cache.get(path))

	  const statThen = st => {
	    const { uid, gid } = st;
	    cache.set(path, { uid, gid });
	    return { uid, gid }
	  };
	  const parent = dirname(path);
	  const parentTrap = parent === path ? null : er => {
	    return inferOwner$1(parent).then((owner) => {
	      cache.set(path, owner);
	      return owner
	    })
	  };
	  return lstat(path).then(statThen, parentTrap)
	};

	const inferOwnerSync = path => {
	  path = resolve(path);
	  if (cache.has(path))
	    return cache.get(path)

	  const parent = dirname(path);

	  // avoid obscuring call site by re-throwing
	  // "catch" the error by returning from a finally,
	  // only if we're not at the root, and the parent call works.
	  let threw = true;
	  try {
	    const st = fs.lstatSync(path);
	    threw = false;
	    const { uid, gid } = st;
	    cache.set(path, { uid, gid });
	    return { uid, gid }
	  } finally {
	    if (threw && parent !== path) {
	      const owner = inferOwnerSync(parent);
	      cache.set(path, owner);
	      return owner // eslint-disable-line no-unsafe-finally
	    }
	  }
	};

	const inflight = new Map();
	inferOwner.exports = path => {
	  path = resolve(path);
	  if (inflight.has(path))
	    return Promise.resolve(inflight.get(path))
	  const p = inferOwner$1(path).then(owner => {
	    inflight.delete(path);
	    return owner
	  });
	  inflight.set(path, p);
	  return p
	};
	inferOwner.exports.sync = inferOwnerSync;
	inferOwner.exports.clearCache = () => {
	  cache.clear();
	  inflight.clear();
	};
	return inferOwner.exports;
}

var optsArg_1;
var hasRequiredOptsArg;

function requireOptsArg () {
	if (hasRequiredOptsArg) return optsArg_1;
	hasRequiredOptsArg = 1;
	const { promisify } = require$$0__default$1["default"];
	const fs = require$$0__default["default"];
	const optsArg = opts => {
	  if (!opts)
	    opts = { mode: 0o777, fs };
	  else if (typeof opts === 'object')
	    opts = { mode: 0o777, fs, ...opts };
	  else if (typeof opts === 'number')
	    opts = { mode: opts, fs };
	  else if (typeof opts === 'string')
	    opts = { mode: parseInt(opts, 8), fs };
	  else
	    throw new TypeError('invalid options argument')

	  opts.mkdir = opts.mkdir || opts.fs.mkdir || fs.mkdir;
	  opts.mkdirAsync = promisify(opts.mkdir);
	  opts.stat = opts.stat || opts.fs.stat || fs.stat;
	  opts.statAsync = promisify(opts.stat);
	  opts.statSync = opts.statSync || opts.fs.statSync || fs.statSync;
	  opts.mkdirSync = opts.mkdirSync || opts.fs.mkdirSync || fs.mkdirSync;
	  return opts
	};
	optsArg_1 = optsArg;
	return optsArg_1;
}

var pathArg_1;
var hasRequiredPathArg;

function requirePathArg () {
	if (hasRequiredPathArg) return pathArg_1;
	hasRequiredPathArg = 1;
	const platform = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform;
	const { resolve, parse } = require$$1__default["default"];
	const pathArg = path => {
	  if (/\0/.test(path)) {
	    // simulate same failure that node raises
	    throw Object.assign(
	      new TypeError('path must be a string without null bytes'),
	      {
	        path,
	        code: 'ERR_INVALID_ARG_VALUE',
	      }
	    )
	  }

	  path = resolve(path);
	  if (platform === 'win32') {
	    const badWinChars = /[*|"<>?:]/;
	    const {root} = parse(path);
	    if (badWinChars.test(path.substr(root.length))) {
	      throw Object.assign(new Error('Illegal characters in path.'), {
	        path,
	        code: 'EINVAL',
	      })
	    }
	  }

	  return path
	};
	pathArg_1 = pathArg;
	return pathArg_1;
}

var findMade_1;
var hasRequiredFindMade;

function requireFindMade () {
	if (hasRequiredFindMade) return findMade_1;
	hasRequiredFindMade = 1;
	const {dirname} = require$$1__default["default"];

	const findMade = (opts, parent, path = undefined) => {
	  // we never want the 'made' return value to be a root directory
	  if (path === parent)
	    return Promise.resolve()

	  return opts.statAsync(parent).then(
	    st => st.isDirectory() ? path : undefined, // will fail later
	    er => er.code === 'ENOENT'
	      ? findMade(opts, dirname(parent), parent)
	      : undefined
	  )
	};

	const findMadeSync = (opts, parent, path = undefined) => {
	  if (path === parent)
	    return undefined

	  try {
	    return opts.statSync(parent).isDirectory() ? path : undefined
	  } catch (er) {
	    return er.code === 'ENOENT'
	      ? findMadeSync(opts, dirname(parent), parent)
	      : undefined
	  }
	};

	findMade_1 = {findMade, findMadeSync};
	return findMade_1;
}

var mkdirpManual_1;
var hasRequiredMkdirpManual;

function requireMkdirpManual () {
	if (hasRequiredMkdirpManual) return mkdirpManual_1;
	hasRequiredMkdirpManual = 1;
	const {dirname} = require$$1__default["default"];

	const mkdirpManual = (path, opts, made) => {
	  opts.recursive = false;
	  const parent = dirname(path);
	  if (parent === path) {
	    return opts.mkdirAsync(path, opts).catch(er => {
	      // swallowed by recursive implementation on posix systems
	      // any other error is a failure
	      if (er.code !== 'EISDIR')
	        throw er
	    })
	  }

	  return opts.mkdirAsync(path, opts).then(() => made || path, er => {
	    if (er.code === 'ENOENT')
	      return mkdirpManual(parent, opts)
	        .then(made => mkdirpManual(path, opts, made))
	    if (er.code !== 'EEXIST' && er.code !== 'EROFS')
	      throw er
	    return opts.statAsync(path).then(st => {
	      if (st.isDirectory())
	        return made
	      else
	        throw er
	    }, () => { throw er })
	  })
	};

	const mkdirpManualSync = (path, opts, made) => {
	  const parent = dirname(path);
	  opts.recursive = false;

	  if (parent === path) {
	    try {
	      return opts.mkdirSync(path, opts)
	    } catch (er) {
	      // swallowed by recursive implementation on posix systems
	      // any other error is a failure
	      if (er.code !== 'EISDIR')
	        throw er
	      else
	        return
	    }
	  }

	  try {
	    opts.mkdirSync(path, opts);
	    return made || path
	  } catch (er) {
	    if (er.code === 'ENOENT')
	      return mkdirpManualSync(path, opts, mkdirpManualSync(parent, opts, made))
	    if (er.code !== 'EEXIST' && er.code !== 'EROFS')
	      throw er
	    try {
	      if (!opts.statSync(path).isDirectory())
	        throw er
	    } catch (_) {
	      throw er
	    }
	  }
	};

	mkdirpManual_1 = {mkdirpManual, mkdirpManualSync};
	return mkdirpManual_1;
}

var mkdirpNative_1;
var hasRequiredMkdirpNative;

function requireMkdirpNative () {
	if (hasRequiredMkdirpNative) return mkdirpNative_1;
	hasRequiredMkdirpNative = 1;
	const {dirname} = require$$1__default["default"];
	const {findMade, findMadeSync} = requireFindMade();
	const {mkdirpManual, mkdirpManualSync} = requireMkdirpManual();

	const mkdirpNative = (path, opts) => {
	  opts.recursive = true;
	  const parent = dirname(path);
	  if (parent === path)
	    return opts.mkdirAsync(path, opts)

	  return findMade(opts, path).then(made =>
	    opts.mkdirAsync(path, opts).then(() => made)
	    .catch(er => {
	      if (er.code === 'ENOENT')
	        return mkdirpManual(path, opts)
	      else
	        throw er
	    }))
	};

	const mkdirpNativeSync = (path, opts) => {
	  opts.recursive = true;
	  const parent = dirname(path);
	  if (parent === path)
	    return opts.mkdirSync(path, opts)

	  const made = findMadeSync(opts, path);
	  try {
	    opts.mkdirSync(path, opts);
	    return made
	  } catch (er) {
	    if (er.code === 'ENOENT')
	      return mkdirpManualSync(path, opts)
	    else
	      throw er
	  }
	};

	mkdirpNative_1 = {mkdirpNative, mkdirpNativeSync};
	return mkdirpNative_1;
}

var useNative_1;
var hasRequiredUseNative;

function requireUseNative () {
	if (hasRequiredUseNative) return useNative_1;
	hasRequiredUseNative = 1;
	const fs = require$$0__default["default"];

	const version = process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version;
	const versArr = version.replace(/^v/, '').split('.');
	const hasNative = +versArr[0] > 10 || +versArr[0] === 10 && +versArr[1] >= 12;

	const useNative = !hasNative ? () => false : opts => opts.mkdir === fs.mkdir;
	const useNativeSync = !hasNative ? () => false : opts => opts.mkdirSync === fs.mkdirSync;

	useNative_1 = {useNative, useNativeSync};
	return useNative_1;
}

var mkdirp_1;
var hasRequiredMkdirp;

function requireMkdirp () {
	if (hasRequiredMkdirp) return mkdirp_1;
	hasRequiredMkdirp = 1;
	const optsArg = requireOptsArg();
	const pathArg = requirePathArg();

	const {mkdirpNative, mkdirpNativeSync} = requireMkdirpNative();
	const {mkdirpManual, mkdirpManualSync} = requireMkdirpManual();
	const {useNative, useNativeSync} = requireUseNative();


	const mkdirp = (path, opts) => {
	  path = pathArg(path);
	  opts = optsArg(opts);
	  return useNative(opts)
	    ? mkdirpNative(path, opts)
	    : mkdirpManual(path, opts)
	};

	const mkdirpSync = (path, opts) => {
	  path = pathArg(path);
	  opts = optsArg(opts);
	  return useNativeSync(opts)
	    ? mkdirpNativeSync(path, opts)
	    : mkdirpManualSync(path, opts)
	};

	mkdirp.sync = mkdirpSync;
	mkdirp.native = (path, opts) => mkdirpNative(pathArg(path), optsArg(opts));
	mkdirp.manual = (path, opts) => mkdirpManual(pathArg(path), optsArg(opts));
	mkdirp.nativeSync = (path, opts) => mkdirpNativeSync(pathArg(path), optsArg(opts));
	mkdirp.manualSync = (path, opts) => mkdirpManualSync(pathArg(path), optsArg(opts));

	mkdirp_1 = mkdirp;
	return mkdirp_1;
}

var chownr_1;
var hasRequiredChownr;

function requireChownr () {
	if (hasRequiredChownr) return chownr_1;
	hasRequiredChownr = 1;
	const fs = require$$0__default["default"];
	const path = require$$1__default["default"];

	/* istanbul ignore next */
	const LCHOWN = fs.lchown ? 'lchown' : 'chown';
	/* istanbul ignore next */
	const LCHOWNSYNC = fs.lchownSync ? 'lchownSync' : 'chownSync';

	/* istanbul ignore next */
	const needEISDIRHandled = fs.lchown &&
	  !process.version.match(/v1[1-9]+\./) &&
	  !process.version.match(/v10\.[6-9]/);

	const lchownSync = (path, uid, gid) => {
	  try {
	    return fs[LCHOWNSYNC](path, uid, gid)
	  } catch (er) {
	    if (er.code !== 'ENOENT')
	      throw er
	  }
	};

	/* istanbul ignore next */
	const chownSync = (path, uid, gid) => {
	  try {
	    return fs.chownSync(path, uid, gid)
	  } catch (er) {
	    if (er.code !== 'ENOENT')
	      throw er
	  }
	};

	/* istanbul ignore next */
	const handleEISDIR =
	  needEISDIRHandled ? (path, uid, gid, cb) => er => {
	    // Node prior to v10 had a very questionable implementation of
	    // fs.lchown, which would always try to call fs.open on a directory
	    // Fall back to fs.chown in those cases.
	    if (!er || er.code !== 'EISDIR')
	      cb(er);
	    else
	      fs.chown(path, uid, gid, cb);
	  }
	  : (_, __, ___, cb) => cb;

	/* istanbul ignore next */
	const handleEISDirSync =
	  needEISDIRHandled ? (path, uid, gid) => {
	    try {
	      return lchownSync(path, uid, gid)
	    } catch (er) {
	      if (er.code !== 'EISDIR')
	        throw er
	      chownSync(path, uid, gid);
	    }
	  }
	  : (path, uid, gid) => lchownSync(path, uid, gid);

	// fs.readdir could only accept an options object as of node v6
	const nodeVersion = process.version;
	let readdir = (path, options, cb) => fs.readdir(path, options, cb);
	let readdirSync = (path, options) => fs.readdirSync(path, options);
	/* istanbul ignore next */
	if (/^v4\./.test(nodeVersion))
	  readdir = (path, options, cb) => fs.readdir(path, cb);

	const chown = (cpath, uid, gid, cb) => {
	  fs[LCHOWN](cpath, uid, gid, handleEISDIR(cpath, uid, gid, er => {
	    // Skip ENOENT error
	    cb(er && er.code !== 'ENOENT' ? er : null);
	  }));
	};

	const chownrKid = (p, child, uid, gid, cb) => {
	  if (typeof child === 'string')
	    return fs.lstat(path.resolve(p, child), (er, stats) => {
	      // Skip ENOENT error
	      if (er)
	        return cb(er.code !== 'ENOENT' ? er : null)
	      stats.name = child;
	      chownrKid(p, stats, uid, gid, cb);
	    })

	  if (child.isDirectory()) {
	    chownr(path.resolve(p, child.name), uid, gid, er => {
	      if (er)
	        return cb(er)
	      const cpath = path.resolve(p, child.name);
	      chown(cpath, uid, gid, cb);
	    });
	  } else {
	    const cpath = path.resolve(p, child.name);
	    chown(cpath, uid, gid, cb);
	  }
	};


	const chownr = (p, uid, gid, cb) => {
	  readdir(p, { withFileTypes: true }, (er, children) => {
	    // any error other than ENOTDIR or ENOTSUP means it's not readable,
	    // or doesn't exist.  give up.
	    if (er) {
	      if (er.code === 'ENOENT')
	        return cb()
	      else if (er.code !== 'ENOTDIR' && er.code !== 'ENOTSUP')
	        return cb(er)
	    }
	    if (er || !children.length)
	      return chown(p, uid, gid, cb)

	    let len = children.length;
	    let errState = null;
	    const then = er => {
	      if (errState)
	        return
	      if (er)
	        return cb(errState = er)
	      if (-- len === 0)
	        return chown(p, uid, gid, cb)
	    };

	    children.forEach(child => chownrKid(p, child, uid, gid, then));
	  });
	};

	const chownrKidSync = (p, child, uid, gid) => {
	  if (typeof child === 'string') {
	    try {
	      const stats = fs.lstatSync(path.resolve(p, child));
	      stats.name = child;
	      child = stats;
	    } catch (er) {
	      if (er.code === 'ENOENT')
	        return
	      else
	        throw er
	    }
	  }

	  if (child.isDirectory())
	    chownrSync(path.resolve(p, child.name), uid, gid);

	  handleEISDirSync(path.resolve(p, child.name), uid, gid);
	};

	const chownrSync = (p, uid, gid) => {
	  let children;
	  try {
	    children = readdirSync(p, { withFileTypes: true });
	  } catch (er) {
	    if (er.code === 'ENOENT')
	      return
	    else if (er.code === 'ENOTDIR' || er.code === 'ENOTSUP')
	      return handleEISDirSync(p, uid, gid)
	    else
	      throw er
	  }

	  if (children && children.length)
	    children.forEach(child => chownrKidSync(p, child, uid, gid));

	  return handleEISDirSync(p, uid, gid)
	};

	chownr_1 = chownr;
	chownr.sync = chownrSync;
	return chownr_1;
}

var hasRequiredMkdirpInferOwner;

function requireMkdirpInferOwner () {
	if (hasRequiredMkdirpInferOwner) return mkdirpInferOwner.exports;
	hasRequiredMkdirpInferOwner = 1;
	const inferOwner = requireInferOwner();
	const mkdirp = requireMkdirp();
	const {promisify} = require$$0__default$1["default"];
	const chownr = promisify(requireChownr());

	const platform = process.env.__TESTING_MKDIRP_INFER_OWNER_PLATFORM__
	  || process.platform;
	const isWindows = platform === 'win32';
	const isRoot = process.getuid && process.getuid() === 0;
	const doChown = !isWindows && isRoot;

	mkdirpInferOwner.exports = !doChown ? (path, opts) => mkdirp(path, opts)
	  : (path, opts) => inferOwner(path).then(({uid, gid}) =>
	    mkdirp(path, opts).then(made =>
	      uid !== 0 || gid !== process.getgid()
	      ? chownr(made || path, uid, gid).then(() => made)
	      : made));

	mkdirpInferOwner.exports.sync = !doChown ? (path, opts) => mkdirp.sync(path, opts)
	  : (path, opts) => {
	    const {uid, gid} = inferOwner.sync(path);
	    const made = mkdirp.sync(path);
	    if (uid !== 0 || gid !== process.getgid())
	      chownr.sync(made || path, uid, gid);
	    return made
	  };
	return mkdirpInferOwner.exports;
}

var toBatchSyntax = {};

var hasRequiredToBatchSyntax;

function requireToBatchSyntax () {
	if (hasRequiredToBatchSyntax) return toBatchSyntax;
	hasRequiredToBatchSyntax = 1;
	toBatchSyntax.replaceDollarWithPercentPair = replaceDollarWithPercentPair;
	toBatchSyntax.convertToSetCommand = convertToSetCommand;
	toBatchSyntax.convertToSetCommands = convertToSetCommands;

	function convertToSetCommand (key, value) {
	  var line = '';
	  key = key || '';
	  key = key.trim();
	  value = value || '';
	  value = value.trim();
	  if (key && value && value.length > 0) {
	    line = '@SET ' + key + '=' + replaceDollarWithPercentPair(value) + '\r\n';
	  }
	  return line
	}

	function extractVariableValuePairs (declarations) {
	  var pairs = {};
	  declarations.map(function (declaration) {
	    var split = declaration.split('=');
	    pairs[split[0]] = split[1];
	  });
	  return pairs
	}

	function convertToSetCommands (variableString) {
	  var variableValuePairs = extractVariableValuePairs(variableString.split(' '));
	  var variableDeclarationsAsBatch = '';
	  Object.keys(variableValuePairs).forEach(function (key) {
	    variableDeclarationsAsBatch += convertToSetCommand(key, variableValuePairs[key]);
	  });
	  return variableDeclarationsAsBatch
	}

	function replaceDollarWithPercentPair (value) {
	  var dollarExpressions = /\$\{?([^$@#?\- \t{}:]+)\}?/g;
	  var result = '';
	  var startIndex = 0;
	  do {
	    var match = dollarExpressions.exec(value);
	    if (match) {
	      var betweenMatches = value.substring(startIndex, match.index) || '';
	      result += betweenMatches + '%' + match[1] + '%';
	      startIndex = dollarExpressions.lastIndex;
	    }
	  } while (dollarExpressions.lastIndex > 0)
	  result += value.slice(startIndex);
	  return result
	}
	return toBatchSyntax;
}

var lib$3;
var hasRequiredLib$3;

function requireLib$3 () {
	if (hasRequiredLib$3) return lib$3;
	hasRequiredLib$3 = 1;
	// On windows, create a .cmd file.
	// Read the #! in the file to see what it uses.  The vast majority
	// of the time, this will be either:
	// "#!/usr/bin/env <prog> <args...>"
	// or:
	// "#!<prog> <args...>"
	//
	// Write a binroot/pkg.bin + ".cmd" file that has this line in it:
	// @<prog> <args...> %dp0%<target> %*

	const { promisify } = require$$0__default$1["default"];
	const fs = require$$0__default["default"];
	const writeFile = promisify(fs.writeFile);
	const readFile = promisify(fs.readFile);
	const chmod = promisify(fs.chmod);
	const stat = promisify(fs.stat);
	const unlink = promisify(fs.unlink);

	const { dirname, relative } = require$$1__default["default"];
	const mkdir = requireMkdirpInferOwner();
	const toBatchSyntax = requireToBatchSyntax();
	const shebangExpr = /^#!\s*(?:\/usr\/bin\/env\s*((?:[^ \t=]+=[^ \t=]+\s+)*))?([^ \t]+)(.*)$/;

	const cmdShimIfExists = (from, to) =>
	  stat(from).then(() => cmdShim(from, to), () => {});

	// Try to unlink, but ignore errors.
	// Any problems will surface later.
	const rm = path => unlink(path).catch(() => {});

	const cmdShim = (from, to) =>
	  stat(from).then(() => cmdShim_(from, to));

	const cmdShim_ = (from, to) => Promise.all([
	  rm(to),
	  rm(to + '.cmd'),
	  rm(to + '.ps1'),
	]).then(() => writeShim(from, to));

	const writeShim = (from, to) =>
	  // make a cmd file and a sh script
	  // First, check if the bin is a #! of some sort.
	  // If not, then assume it's something that'll be compiled, or some other
	  // sort of script, and just call it directly.
	  mkdir(dirname(to))
	    .then(() => readFile(from, 'utf8'))
	    .then(data => {
	      const firstLine = data.trim().split(/\r*\n/)[0];
	      const shebang = firstLine.match(shebangExpr);
	      if (!shebang) {
	        return writeShim_(from, to)
	      }
	      const vars = shebang[1] || '';
	      const prog = shebang[2];
	      const args = shebang[3] || '';
	      return writeShim_(from, to, prog, args, vars)
	    }, er => writeShim_(from, to));

	const writeShim_ = (from, to, prog, args, variables) => {
	  let shTarget = relative(dirname(to), from);
	  let target = shTarget.split('/').join('\\');
	  let longProg;
	  let shProg = prog && prog.split('\\').join('/');
	  let shLongProg;
	  let pwshProg = shProg && `"${shProg}$exe"`;
	  let pwshLongProg;
	  shTarget = shTarget.split('\\').join('/');
	  args = args || '';
	  variables = variables || '';
	  if (!prog) {
	    prog = `"%dp0%\\${target}"`;
	    shProg = `"$basedir/${shTarget}"`;
	    pwshProg = shProg;
	    args = '';
	    target = '';
	    shTarget = '';
	  } else {
	    longProg = `"%dp0%\\${prog}.exe"`;
	    shLongProg = `"$basedir/${prog}"`;
	    pwshLongProg = `"$basedir/${prog}$exe"`;
	    target = `"%dp0%\\${target}"`;
	    shTarget = `"$basedir/${shTarget}"`;
	  }

	  // Subroutine trick to fix https://github.com/npm/cmd-shim/issues/10
	  // and https://github.com/npm/cli/issues/969
	  const head = '@ECHO off\r\n' +
	    'GOTO start\r\n' +
	    ':find_dp0\r\n' +
	    'SET dp0=%~dp0\r\n' +
	    'EXIT /b\r\n' +
	    ':start\r\n' +
	    'SETLOCAL\r\n' +
	    'CALL :find_dp0\r\n';

	  let cmd;
	  if (longProg) {
	    shLongProg = shLongProg.trim();
	    args = args.trim();
	    const variablesBatch = toBatchSyntax.convertToSetCommands(variables);
	    cmd = head
	        + variablesBatch
	        + '\r\n'
	        + `IF EXIST ${longProg} (\r\n`
	        + `  SET "_prog=${longProg.replace(/(^")|("$)/g, '')}"\r\n`
	        + ') ELSE (\r\n'
	        + `  SET "_prog=${prog.replace(/(^")|("$)/g, '')}"\r\n`
	        + '  SET PATHEXT=%PATHEXT:;.JS;=;%\r\n'
	        + ')\r\n'
	        + '\r\n'
	        // prevent "Terminate Batch Job? (Y/n)" message
	        // https://github.com/npm/cli/issues/969#issuecomment-737496588
	        + 'endLocal & goto #_undefined_# 2>NUL || title %COMSPEC% & '
	        + `"%_prog%" ${args} ${target} %*\r\n`;
	  } else {
	    cmd = `${head}${prog} ${args} ${target} %*\r\n`;
	  }

	  // #!/bin/sh
	  // basedir=`dirname "$0"`
	  //
	  // case `uname` in
	  //     *CYGWIN*|*MINGW*|*MSYS*) basedir=`cygpath -w "$basedir"`;;
	  // esac
	  //
	  // if [ -x "$basedir/node.exe" ]; then
	  //   exec "$basedir/node.exe" "$basedir/node_modules/npm/bin/npm-cli.js" "$@"
	  // else
	  //   exec node "$basedir/node_modules/npm/bin/npm-cli.js" "$@"
	  // fi

	  let sh = '#!/bin/sh\n';

	  sh = sh
	      + `basedir=$(dirname "$(echo "$0" | sed -e 's,\\\\,/,g')")\n`
	      + '\n'
	      + 'case `uname` in\n'
	      + '    *CYGWIN*|*MINGW*|*MSYS*) basedir=`cygpath -w "$basedir"`;;\n'
	      + 'esac\n'
	      + '\n';

	  if (shLongProg) {
	    sh = sh
	       + `if [ -x ${shLongProg} ]; then\n`
	       + `  exec ${variables}${shLongProg} ${args} ${shTarget} "$@"\n`
	       + 'else \n'
	       + `  exec ${variables}${shProg} ${args} ${shTarget} "$@"\n`
	       + 'fi\n';
	  } else {
	    sh = sh
	       + `exec ${shProg} ${args} ${shTarget} "$@"\n`;
	  }

	  // #!/usr/bin/env pwsh
	  // $basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent
	  //
	  // $ret=0
	  // $exe = ""
	  // if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
	  //   # Fix case when both the Windows and Linux builds of Node
	  //   # are installed in the same directory
	  //   $exe = ".exe"
	  // }
	  // if (Test-Path "$basedir/node") {
	  //   # Suport pipeline input
	  //   if ($MyInvocation.ExpectingInput) {
	  //     input | & "$basedir/node$exe" "$basedir/node_modules/npm/bin/npm-cli.js" $args
	  //   } else {
	  //     & "$basedir/node$exe" "$basedir/node_modules/npm/bin/npm-cli.js" $args
	  //   }
	  //   $ret=$LASTEXITCODE
	  // } else {
	  //   # Support pipeline input
	  //   if ($MyInvocation.ExpectingInput) {
	  //     $input | & "node$exe" "$basedir/node_modules/npm/bin/npm-cli.js" $args
	  //   } else {
	  //     & "node$exe" "$basedir/node_modules/npm/bin/npm-cli.js" $args
	  //   }
	  //   $ret=$LASTEXITCODE
	  // }
	  // exit $ret
	  let pwsh = '#!/usr/bin/env pwsh\n'
	           + '$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent\n'
	           + '\n'
	           + '$exe=""\n'
	           + 'if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {\n'
	           + '  # Fix case when both the Windows and Linux builds of Node\n'
	           + '  # are installed in the same directory\n'
	           + '  $exe=".exe"\n'
	           + '}\n';
	  if (shLongProg) {
	    pwsh = pwsh
	         + '$ret=0\n'
	         + `if (Test-Path ${pwshLongProg}) {\n`
	         + '  # Support pipeline input\n'
	         + '  if ($MyInvocation.ExpectingInput) {\n'
	         + `    $input | & ${pwshLongProg} ${args} ${shTarget} $args\n`
	         + '  } else {\n'
	         + `    & ${pwshLongProg} ${args} ${shTarget} $args\n`
	         + '  }\n'
	         + '  $ret=$LASTEXITCODE\n'
	         + '} else {\n'
	         + '  # Support pipeline input\n'
	         + '  if ($MyInvocation.ExpectingInput) {\n'
	         + `    $input | & ${pwshProg} ${args} ${shTarget} $args\n`
	         + '  } else {\n'
	         + `    & ${pwshProg} ${args} ${shTarget} $args\n`
	         + '  }\n'
	         + '  $ret=$LASTEXITCODE\n'
	         + '}\n'
	         + 'exit $ret\n';
	  } else {
	    pwsh = pwsh
	         + '# Support pipeline input\n'
	         + 'if ($MyInvocation.ExpectingInput) {\n'
	         + `  $input | & ${pwshProg} ${args} ${shTarget} $args\n`
	         + '} else {\n'
	         + `  & ${pwshProg} ${args} ${shTarget} $args\n`
	         + '}\n'
	         + 'exit $LASTEXITCODE\n';
	  }

	  return Promise.all([
	    writeFile(to + '.ps1', pwsh, 'utf8'),
	    writeFile(to + '.cmd', cmd, 'utf8'),
	    writeFile(to, sh, 'utf8'),
	  ]).then(() => chmodShim(to))
	};

	const chmodShim = to => Promise.all([
	  chmod(to, 0o755),
	  chmod(to + '.cmd', 0o755),
	  chmod(to + '.ps1', 0o755),
	]);

	lib$3 = cmdShim;
	cmdShim.ifExists = cmdShimIfExists;
	return lib$3;
}

var lib$2;
var hasRequiredLib$2;

function requireLib$2 () {
	if (hasRequiredLib$2) return lib$2;
	hasRequiredLib$2 = 1;
	const fs = require$$0__default["default"];
	const { promisify } = require$$0__default$1["default"];
	const { readFileSync } = fs;
	const readFile = promisify(fs.readFile);

	const extractPath = (path, cmdshimContents) => {
	  if (/[.]cmd$/.test(path)) {
	    return extractPathFromCmd(cmdshimContents)
	  } else if (/[.]ps1$/.test(path)) {
	    return extractPathFromPowershell(cmdshimContents)
	  } else {
	    return extractPathFromCygwin(cmdshimContents)
	  }
	};

	const extractPathFromPowershell = cmdshimContents => {
	  const matches = cmdshimContents.match(/"[$]basedir[/]([^"]+?)"\s+[$]args/);
	  return matches && matches[1]
	};

	const extractPathFromCmd = cmdshimContents => {
	  const matches = cmdshimContents.match(/"%(?:~dp0|dp0%)\\([^"]+?)"\s+%[*]/);
	  return matches && matches[1]
	};

	const extractPathFromCygwin = cmdshimContents => {
	  const matches = cmdshimContents.match(/"[$]basedir[/]([^"]+?)"\s+"[$]@"/);
	  return matches && matches[1]
	};

	const wrapError = (thrown, newError) => {
	  newError.message = thrown.message;
	  newError.code = thrown.code;
	  newError.path = thrown.path;
	  return newError
	};

	const notaShim = (path, er) => {
	  if (!er) {
	    er = new Error();
	    Error.captureStackTrace(er, notaShim);
	  }
	  er.code = 'ENOTASHIM';
	  er.message = `Can't read shim path from '${path}', ` +
	    `it doesn't appear to be a cmd-shim`;
	  return er
	};

	const readCmdShim = path => {
	  // create a new error to capture the stack trace from this point,
	  // instead of getting some opaque stack into node's internals
	  const er = new Error();
	  Error.captureStackTrace(er, readCmdShim);
	  return readFile(path).then(contents => {
	    const destination = extractPath(path, contents.toString());
	    if (destination) {
	      return destination
	    }
	    return Promise.reject(notaShim(path, er))
	  }, readFileEr => Promise.reject(wrapError(readFileEr, er)))
	};

	const readCmdShimSync = path => {
	  const contents = readFileSync(path);
	  const destination = extractPath(path, contents.toString());
	  if (!destination) {
	    throw notaShim(path)
	  }
	  return destination
	};

	readCmdShim.sync = readCmdShimSync;
	lib$2 = readCmdShim;
	return lib$2;
}

var lib$1 = {exports: {}};

var imurmurhash = {exports: {}};

/**
 * @preserve
 * JS Implementation of incremental MurmurHash3 (r150) (as of May 10, 2013)
 *
 * @author <a href="mailto:jensyt@gmail.com">Jens Taylor</a>
 * @see http://github.com/homebrewing/brauhaus-diff
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 */

var hasRequiredImurmurhash;

function requireImurmurhash () {
	if (hasRequiredImurmurhash) return imurmurhash.exports;
	hasRequiredImurmurhash = 1;
	(function (module) {
		(function(){
		    var cache;

		    // Call this function without `new` to use the cached object (good for
		    // single-threaded environments), or with `new` to create a new object.
		    //
		    // @param {string} key A UTF-16 or ASCII string
		    // @param {number} seed An optional positive integer
		    // @return {object} A MurmurHash3 object for incremental hashing
		    function MurmurHash3(key, seed) {
		        var m = this instanceof MurmurHash3 ? this : cache;
		        m.reset(seed);
		        if (typeof key === 'string' && key.length > 0) {
		            m.hash(key);
		        }

		        if (m !== this) {
		            return m;
		        }
		    }
		    // Incrementally add a string to this hash
		    //
		    // @param {string} key A UTF-16 or ASCII string
		    // @return {object} this
		    MurmurHash3.prototype.hash = function(key) {
		        var h1, k1, i, top, len;

		        len = key.length;
		        this.len += len;

		        k1 = this.k1;
		        i = 0;
		        switch (this.rem) {
		            case 0: k1 ^= len > i ? (key.charCodeAt(i++) & 0xffff) : 0;
		            case 1: k1 ^= len > i ? (key.charCodeAt(i++) & 0xffff) << 8 : 0;
		            case 2: k1 ^= len > i ? (key.charCodeAt(i++) & 0xffff) << 16 : 0;
		            case 3:
		                k1 ^= len > i ? (key.charCodeAt(i) & 0xff) << 24 : 0;
		                k1 ^= len > i ? (key.charCodeAt(i++) & 0xff00) >> 8 : 0;
		        }

		        this.rem = (len + this.rem) & 3; // & 3 is same as % 4
		        len -= this.rem;
		        if (len > 0) {
		            h1 = this.h1;
		            while (1) {
		                k1 = (k1 * 0x2d51 + (k1 & 0xffff) * 0xcc9e0000) & 0xffffffff;
		                k1 = (k1 << 15) | (k1 >>> 17);
		                k1 = (k1 * 0x3593 + (k1 & 0xffff) * 0x1b870000) & 0xffffffff;

		                h1 ^= k1;
		                h1 = (h1 << 13) | (h1 >>> 19);
		                h1 = (h1 * 5 + 0xe6546b64) & 0xffffffff;

		                if (i >= len) {
		                    break;
		                }

		                k1 = ((key.charCodeAt(i++) & 0xffff)) ^
		                     ((key.charCodeAt(i++) & 0xffff) << 8) ^
		                     ((key.charCodeAt(i++) & 0xffff) << 16);
		                top = key.charCodeAt(i++);
		                k1 ^= ((top & 0xff) << 24) ^
		                      ((top & 0xff00) >> 8);
		            }

		            k1 = 0;
		            switch (this.rem) {
		                case 3: k1 ^= (key.charCodeAt(i + 2) & 0xffff) << 16;
		                case 2: k1 ^= (key.charCodeAt(i + 1) & 0xffff) << 8;
		                case 1: k1 ^= (key.charCodeAt(i) & 0xffff);
		            }

		            this.h1 = h1;
		        }

		        this.k1 = k1;
		        return this;
		    };

		    // Get the result of this hash
		    //
		    // @return {number} The 32-bit hash
		    MurmurHash3.prototype.result = function() {
		        var k1, h1;
		        
		        k1 = this.k1;
		        h1 = this.h1;

		        if (k1 > 0) {
		            k1 = (k1 * 0x2d51 + (k1 & 0xffff) * 0xcc9e0000) & 0xffffffff;
		            k1 = (k1 << 15) | (k1 >>> 17);
		            k1 = (k1 * 0x3593 + (k1 & 0xffff) * 0x1b870000) & 0xffffffff;
		            h1 ^= k1;
		        }

		        h1 ^= this.len;

		        h1 ^= h1 >>> 16;
		        h1 = (h1 * 0xca6b + (h1 & 0xffff) * 0x85eb0000) & 0xffffffff;
		        h1 ^= h1 >>> 13;
		        h1 = (h1 * 0xae35 + (h1 & 0xffff) * 0xc2b20000) & 0xffffffff;
		        h1 ^= h1 >>> 16;

		        return h1 >>> 0;
		    };

		    // Reset the hash object for reuse
		    //
		    // @param {number} seed An optional positive integer
		    MurmurHash3.prototype.reset = function(seed) {
		        this.h1 = typeof seed === 'number' ? seed : 0;
		        this.rem = this.k1 = this.len = 0;
		        return this;
		    };

		    // A cached object to use. This can be safely used if you're in a single-
		    // threaded environment, otherwise you need to create new hashes to use.
		    cache = new MurmurHash3();

		    {
		        module.exports = MurmurHash3;
		    }
		}());
} (imurmurhash));
	return imurmurhash.exports;
}

var signalExit = {exports: {}};

var signals = {exports: {}};

var hasRequiredSignals;

function requireSignals () {
	if (hasRequiredSignals) return signals.exports;
	hasRequiredSignals = 1;
	(function (module) {
		// This is not the set of all possible signals.
		//
		// It IS, however, the set of all signals that trigger
		// an exit on either Linux or BSD systems.  Linux is a
		// superset of the signal names supported on BSD, and
		// the unknown signals just fail to register, so we can
		// catch that easily enough.
		//
		// Don't bother with SIGKILL.  It's uncatchable, which
		// means that we can't fire any callbacks anyway.
		//
		// If a user does happen to register a handler on a non-
		// fatal signal like SIGWINCH or something, and then
		// exit, it'll end up firing `process.emit('exit')`, so
		// the handler will be fired anyway.
		//
		// SIGBUS, SIGFPE, SIGSEGV and SIGILL, when not raised
		// artificially, inherently leave the process in a
		// state from which it is not safe to try and enter JS
		// listeners.
		module.exports = [
		  'SIGABRT',
		  'SIGALRM',
		  'SIGHUP',
		  'SIGINT',
		  'SIGTERM'
		];

		if (process.platform !== 'win32') {
		  module.exports.push(
		    'SIGVTALRM',
		    'SIGXCPU',
		    'SIGXFSZ',
		    'SIGUSR2',
		    'SIGTRAP',
		    'SIGSYS',
		    'SIGQUIT',
		    'SIGIOT'
		    // should detect profiler and enable/disable accordingly.
		    // see #21
		    // 'SIGPROF'
		  );
		}

		if (process.platform === 'linux') {
		  module.exports.push(
		    'SIGIO',
		    'SIGPOLL',
		    'SIGPWR',
		    'SIGSTKFLT',
		    'SIGUNUSED'
		  );
		}
} (signals));
	return signals.exports;
}

var hasRequiredSignalExit;

function requireSignalExit () {
	if (hasRequiredSignalExit) return signalExit.exports;
	hasRequiredSignalExit = 1;
	// Note: since nyc uses this module to output coverage, any lines
	// that are in the direct sync flow of nyc's outputCoverage are
	// ignored, since we can never get coverage for them.
	// grab a reference to node's real process object right away
	var process = commonjsGlobal.process;

	const processOk = function (process) {
	  return process &&
	    typeof process === 'object' &&
	    typeof process.removeListener === 'function' &&
	    typeof process.emit === 'function' &&
	    typeof process.reallyExit === 'function' &&
	    typeof process.listeners === 'function' &&
	    typeof process.kill === 'function' &&
	    typeof process.pid === 'number' &&
	    typeof process.on === 'function'
	};

	// some kind of non-node environment, just no-op
	/* istanbul ignore if */
	if (!processOk(process)) {
	  signalExit.exports = function () {
	    return function () {}
	  };
	} else {
	  var assert = require$$5__default["default"];
	  var signals = requireSignals();
	  var isWin = /^win/i.test(process.platform);

	  var EE = require$$2__default$1["default"];
	  /* istanbul ignore if */
	  if (typeof EE !== 'function') {
	    EE = EE.EventEmitter;
	  }

	  var emitter;
	  if (process.__signal_exit_emitter__) {
	    emitter = process.__signal_exit_emitter__;
	  } else {
	    emitter = process.__signal_exit_emitter__ = new EE();
	    emitter.count = 0;
	    emitter.emitted = {};
	  }

	  // Because this emitter is a global, we have to check to see if a
	  // previous version of this library failed to enable infinite listeners.
	  // I know what you're about to say.  But literally everything about
	  // signal-exit is a compromise with evil.  Get used to it.
	  if (!emitter.infinite) {
	    emitter.setMaxListeners(Infinity);
	    emitter.infinite = true;
	  }

	  signalExit.exports = function (cb, opts) {
	    /* istanbul ignore if */
	    if (!processOk(commonjsGlobal.process)) {
	      return function () {}
	    }
	    assert.equal(typeof cb, 'function', 'a callback must be provided for exit handler');

	    if (loaded === false) {
	      load();
	    }

	    var ev = 'exit';
	    if (opts && opts.alwaysLast) {
	      ev = 'afterexit';
	    }

	    var remove = function () {
	      emitter.removeListener(ev, cb);
	      if (emitter.listeners('exit').length === 0 &&
	          emitter.listeners('afterexit').length === 0) {
	        unload();
	      }
	    };
	    emitter.on(ev, cb);

	    return remove
	  };

	  var unload = function unload () {
	    if (!loaded || !processOk(commonjsGlobal.process)) {
	      return
	    }
	    loaded = false;

	    signals.forEach(function (sig) {
	      try {
	        process.removeListener(sig, sigListeners[sig]);
	      } catch (er) {}
	    });
	    process.emit = originalProcessEmit;
	    process.reallyExit = originalProcessReallyExit;
	    emitter.count -= 1;
	  };
	  signalExit.exports.unload = unload;

	  var emit = function emit (event, code, signal) {
	    /* istanbul ignore if */
	    if (emitter.emitted[event]) {
	      return
	    }
	    emitter.emitted[event] = true;
	    emitter.emit(event, code, signal);
	  };

	  // { <signal>: <listener fn>, ... }
	  var sigListeners = {};
	  signals.forEach(function (sig) {
	    sigListeners[sig] = function listener () {
	      /* istanbul ignore if */
	      if (!processOk(commonjsGlobal.process)) {
	        return
	      }
	      // If there are no other listeners, an exit is coming!
	      // Simplest way: remove us and then re-send the signal.
	      // We know that this will kill the process, so we can
	      // safely emit now.
	      var listeners = process.listeners(sig);
	      if (listeners.length === emitter.count) {
	        unload();
	        emit('exit', null, sig);
	        /* istanbul ignore next */
	        emit('afterexit', null, sig);
	        /* istanbul ignore next */
	        if (isWin && sig === 'SIGHUP') {
	          // "SIGHUP" throws an `ENOSYS` error on Windows,
	          // so use a supported signal instead
	          sig = 'SIGINT';
	        }
	        /* istanbul ignore next */
	        process.kill(process.pid, sig);
	      }
	    };
	  });

	  signalExit.exports.signals = function () {
	    return signals
	  };

	  var loaded = false;

	  var load = function load () {
	    if (loaded || !processOk(commonjsGlobal.process)) {
	      return
	    }
	    loaded = true;

	    // This is the number of onSignalExit's that are in play.
	    // It's important so that we can count the correct number of
	    // listeners on signals, and don't wait for the other one to
	    // handle it instead of us.
	    emitter.count += 1;

	    signals = signals.filter(function (sig) {
	      try {
	        process.on(sig, sigListeners[sig]);
	        return true
	      } catch (er) {
	        return false
	      }
	    });

	    process.emit = processEmit;
	    process.reallyExit = processReallyExit;
	  };
	  signalExit.exports.load = load;

	  var originalProcessReallyExit = process.reallyExit;
	  var processReallyExit = function processReallyExit (code) {
	    /* istanbul ignore if */
	    if (!processOk(commonjsGlobal.process)) {
	      return
	    }
	    process.exitCode = code || /* istanbul ignore next */ 0;
	    emit('exit', process.exitCode, null);
	    /* istanbul ignore next */
	    emit('afterexit', process.exitCode, null);
	    /* istanbul ignore next */
	    originalProcessReallyExit.call(process, process.exitCode);
	  };

	  var originalProcessEmit = process.emit;
	  var processEmit = function processEmit (ev, arg) {
	    if (ev === 'exit' && processOk(commonjsGlobal.process)) {
	      /* istanbul ignore else */
	      if (arg !== undefined) {
	        process.exitCode = arg;
	      }
	      var ret = originalProcessEmit.apply(this, arguments);
	      /* istanbul ignore next */
	      emit('exit', process.exitCode, null);
	      /* istanbul ignore next */
	      emit('afterexit', process.exitCode, null);
	      /* istanbul ignore next */
	      return ret
	    } else {
	      return originalProcessEmit.apply(this, arguments)
	    }
	  };
	}
	return signalExit.exports;
}

var hasRequiredLib$1;

function requireLib$1 () {
	if (hasRequiredLib$1) return lib$1.exports;
	hasRequiredLib$1 = 1;
	lib$1.exports = writeFile;
	lib$1.exports.sync = writeFileSync;
	lib$1.exports._getTmpname = getTmpname; // for testing
	lib$1.exports._cleanupOnExit = cleanupOnExit;

	const fs = require$$0__default["default"];
	const MurmurHash3 = requireImurmurhash();
	const onExit = requireSignalExit();
	const path = require$$1__default["default"];
	const { promisify } = require$$0__default$1["default"];
	const activeFiles = {};

	// if we run inside of a worker_thread, `process.pid` is not unique
	/* istanbul ignore next */
	const threadId = (function getId () {
	  try {
	    const workerThreads = require('worker_threads');

	    /// if we are in main thread, this is set to `0`
	    return workerThreads.threadId
	  } catch (e) {
	    // worker_threads are not available, fallback to 0
	    return 0
	  }
	})();

	let invocations = 0;
	function getTmpname (filename) {
	  return filename + '.' +
	    MurmurHash3(__filename)
	      .hash(String(process.pid))
	      .hash(String(threadId))
	      .hash(String(++invocations))
	      .result()
	}

	function cleanupOnExit (tmpfile) {
	  return () => {
	    try {
	      fs.unlinkSync(typeof tmpfile === 'function' ? tmpfile() : tmpfile);
	    } catch (_) {}
	  }
	}

	function serializeActiveFile (absoluteName) {
	  return new Promise(resolve => {
	    // make a queue if it doesn't already exist
	    if (!activeFiles[absoluteName]) {
	      activeFiles[absoluteName] = [];
	    }

	    activeFiles[absoluteName].push(resolve); // add this job to the queue
	    if (activeFiles[absoluteName].length === 1) {
	      resolve();
	    } // kick off the first one
	  })
	}

	// https://github.com/isaacs/node-graceful-fs/blob/master/polyfills.js#L315-L342
	function isChownErrOk (err) {
	  if (err.code === 'ENOSYS') {
	    return true
	  }

	  const nonroot = !process.getuid || process.getuid() !== 0;
	  if (nonroot) {
	    if (err.code === 'EINVAL' || err.code === 'EPERM') {
	      return true
	    }
	  }

	  return false
	}

	async function writeFileAsync (filename, data, options = {}) {
	  if (typeof options === 'string') {
	    options = { encoding: options };
	  }

	  let fd;
	  let tmpfile;
	  /* istanbul ignore next -- The closure only gets called when onExit triggers */
	  const removeOnExitHandler = onExit(cleanupOnExit(() => tmpfile));
	  const absoluteName = path.resolve(filename);

	  try {
	    await serializeActiveFile(absoluteName);
	    const truename = await promisify(fs.realpath)(filename).catch(() => filename);
	    tmpfile = getTmpname(truename);

	    if (!options.mode || !options.chown) {
	      // Either mode or chown is not explicitly set
	      // Default behavior is to copy it from original file
	      const stats = await promisify(fs.stat)(truename).catch(() => {});
	      if (stats) {
	        if (options.mode == null) {
	          options.mode = stats.mode;
	        }

	        if (options.chown == null && process.getuid) {
	          options.chown = { uid: stats.uid, gid: stats.gid };
	        }
	      }
	    }

	    fd = await promisify(fs.open)(tmpfile, 'w', options.mode);
	    if (options.tmpfileCreated) {
	      await options.tmpfileCreated(tmpfile);
	    }
	    if (ArrayBuffer.isView(data)) {
	      await promisify(fs.write)(fd, data, 0, data.length, 0);
	    } else if (data != null) {
	      await promisify(fs.write)(fd, String(data), 0, String(options.encoding || 'utf8'));
	    }

	    if (options.fsync !== false) {
	      await promisify(fs.fsync)(fd);
	    }

	    await promisify(fs.close)(fd);
	    fd = null;

	    if (options.chown) {
	      await promisify(fs.chown)(tmpfile, options.chown.uid, options.chown.gid).catch(err => {
	        if (!isChownErrOk(err)) {
	          throw err
	        }
	      });
	    }

	    if (options.mode) {
	      await promisify(fs.chmod)(tmpfile, options.mode).catch(err => {
	        if (!isChownErrOk(err)) {
	          throw err
	        }
	      });
	    }

	    await promisify(fs.rename)(tmpfile, truename);
	  } finally {
	    if (fd) {
	      await promisify(fs.close)(fd).catch(
	        /* istanbul ignore next */
	        () => {}
	      );
	    }
	    removeOnExitHandler();
	    await promisify(fs.unlink)(tmpfile).catch(() => {});
	    activeFiles[absoluteName].shift(); // remove the element added by serializeSameFile
	    if (activeFiles[absoluteName].length > 0) {
	      activeFiles[absoluteName][0](); // start next job if one is pending
	    } else {
	      delete activeFiles[absoluteName];
	    }
	  }
	}

	function writeFile (filename, data, options, callback) {
	  if (options instanceof Function) {
	    callback = options;
	    options = {};
	  }

	  const promise = writeFileAsync(filename, data, options);
	  if (callback) {
	    promise.then(callback, callback);
	  }

	  return promise
	}

	function writeFileSync (filename, data, options) {
	  if (typeof options === 'string') {
	    options = { encoding: options };
	  } else if (!options) {
	    options = {};
	  }
	  try {
	    filename = fs.realpathSync(filename);
	  } catch (ex) {
	    // it's ok, it'll happen on a not yet existing file
	  }
	  const tmpfile = getTmpname(filename);

	  if (!options.mode || !options.chown) {
	    // Either mode or chown is not explicitly set
	    // Default behavior is to copy it from original file
	    try {
	      const stats = fs.statSync(filename);
	      options = Object.assign({}, options);
	      if (!options.mode) {
	        options.mode = stats.mode;
	      }
	      if (!options.chown && process.getuid) {
	        options.chown = { uid: stats.uid, gid: stats.gid };
	      }
	    } catch (ex) {
	      // ignore stat errors
	    }
	  }

	  let fd;
	  const cleanup = cleanupOnExit(tmpfile);
	  const removeOnExitHandler = onExit(cleanup);

	  let threw = true;
	  try {
	    fd = fs.openSync(tmpfile, 'w', options.mode || 0o666);
	    if (options.tmpfileCreated) {
	      options.tmpfileCreated(tmpfile);
	    }
	    if (ArrayBuffer.isView(data)) {
	      fs.writeSync(fd, data, 0, data.length, 0);
	    } else if (data != null) {
	      fs.writeSync(fd, String(data), 0, String(options.encoding || 'utf8'));
	    }
	    if (options.fsync !== false) {
	      fs.fsyncSync(fd);
	    }

	    fs.closeSync(fd);
	    fd = null;

	    if (options.chown) {
	      try {
	        fs.chownSync(tmpfile, options.chown.uid, options.chown.gid);
	      } catch (err) {
	        if (!isChownErrOk(err)) {
	          throw err
	        }
	      }
	    }

	    if (options.mode) {
	      try {
	        fs.chmodSync(tmpfile, options.mode);
	      } catch (err) {
	        if (!isChownErrOk(err)) {
	          throw err
	        }
	      }
	    }

	    fs.renameSync(tmpfile, filename);
	    threw = false;
	  } finally {
	    if (fd) {
	      try {
	        fs.closeSync(fd);
	      } catch (ex) {
	        // ignore close errors at this stage, error may have closed fd already.
	      }
	    }
	    removeOnExitHandler();
	    if (threw) {
	      cleanup();
	    }
	  }
	}
	return lib$1.exports;
}

var fixBin_1;
var hasRequiredFixBin;

function requireFixBin () {
	if (hasRequiredFixBin) return fixBin_1;
	hasRequiredFixBin = 1;
	// make sure that bins are executable, and that they don't have
	// windows line-endings on the hashbang line.
	const fs = require$$0__default["default"];
	const { promisify } = require$$0__default$1["default"];

	const execMode = 0o777 & (~process.umask());

	const writeFileAtomic = requireLib$1();
	const open = promisify(fs.open);
	const close = promisify(fs.close);
	const read = promisify(fs.read);
	const chmod = promisify(fs.chmod);
	const readFile = promisify(fs.readFile);

	const isWindowsHashBang = buf =>
	  buf[0] === '#'.charCodeAt(0) &&
	  buf[1] === '!'.charCodeAt(0) &&
	  /^#![^\n]+\r\n/.test(buf.toString());

	const isWindowsHashbangFile = file => {
	  const FALSE = () => false;
	  return open(file, 'r').then(fd => {
	    const buf = Buffer.alloc(2048);
	    return read(fd, buf, 0, 2048, 0)
	      .then(
	        () => {
	          const isWHB = isWindowsHashBang(buf);
	          return close(fd).then(() => isWHB, () => isWHB)
	        },
	        // don't leak FD if read() fails
	        () => close(fd).then(FALSE, FALSE)
	      )
	  }, FALSE)
	};

	const dos2Unix = file =>
	  readFile(file, 'utf8').then(content =>
	    writeFileAtomic(file, content.replace(/^(#![^\n]+)\r\n/, '$1\n')));

	const fixBin = (file, mode = execMode) => chmod(file, mode)
	  .then(() => isWindowsHashbangFile(file))
	  .then(isWHB => isWHB ? dos2Unix(file) : null);

	fixBin_1 = fixBin;
	return fixBin_1;
}

var shimBin_1;
var hasRequiredShimBin;

function requireShimBin () {
	if (hasRequiredShimBin) return shimBin_1;
	hasRequiredShimBin = 1;
	const { promisify } = require$$0__default$1["default"];
	const { resolve, dirname } = require$$1__default["default"];
	const fs = require$$0__default["default"];
	const lstat = promisify(fs.lstat);
	const throwNonEnoent = er => {
	  if (er.code !== 'ENOENT') {
	    throw er
	  }
	};

	const cmdShim = requireLib$3();
	const readCmdShim = requireLib$2();

	const fixBin = requireFixBin();

	// even in --force mode, we never create a shim over a shim we've
	// already created.  you can have multiple packages in a tree trying
	// to contend for the same bin, which creates a race condition and
	// nondeterminism.
	const seen = new Set();

	const failEEXIST = ({ path, to, from }) =>
	  Promise.reject(Object.assign(new Error('EEXIST: file already exists'), {
	    path: to,
	    dest: from,
	    code: 'EEXIST',
	  }));

	const handleReadCmdShimError = ({ er, from, to }) =>
	  er.code === 'ENOENT' ? null
	  : er.code === 'ENOTASHIM' ? failEEXIST({ from, to })
	  : Promise.reject(er);

	const SKIP = Symbol('skip - missing or already installed');
	const shimBin = ({ path, to, from, absFrom, force }) => {
	  const shims = [
	    to,
	    to + '.cmd',
	    to + '.ps1',
	  ];

	  for (const shim of shims) {
	    if (seen.has(shim)) {
	      return true
	    }
	    seen.add(shim);
	  }

	  return Promise.all([
	    ...shims,
	    absFrom,
	  ].map(f => lstat(f).catch(throwNonEnoent))).then((stats) => {
	    const [, , , stFrom] = stats;
	    if (!stFrom) {
	      return SKIP
	    }

	    if (force) {
	      return
	    }

	    return Promise.all(shims.map((s, i) => [s, stats[i]]).map(([s, st]) => {
	      if (!st) {
	        return
	      }
	      return readCmdShim(s)
	        .then(target => {
	          target = resolve(dirname(to), target);
	          if (target.indexOf(resolve(path)) !== 0) {
	            return failEEXIST({ from, to, path })
	          }
	        }, er => handleReadCmdShimError({ er, from, to }))
	    }))
	  })
	    .then(skip => skip !== SKIP && doShim(absFrom, to))
	};

	const doShim = (absFrom, to) =>
	  cmdShim(absFrom, to).then(() => fixBin(absFrom));

	const resetSeen = () => {
	  for (const p of seen) {
	    seen.delete(p);
	  }
	};

	shimBin_1 = Object.assign(shimBin, { resetSeen });
	return shimBin_1;
}

var old = {};

var hasRequiredOld;

function requireOld () {
	if (hasRequiredOld) return old;
	hasRequiredOld = 1;
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var pathModule = require$$1__default["default"];
	var isWindows = process.platform === 'win32';
	var fs = require$$0__default["default"];

	// JavaScript implementation of realpath, ported from node pre-v6

	var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);

	function rethrow() {
	  // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and
	  // is fairly slow to generate.
	  var callback;
	  if (DEBUG) {
	    var backtrace = new Error;
	    callback = debugCallback;
	  } else
	    callback = missingCallback;

	  return callback;

	  function debugCallback(err) {
	    if (err) {
	      backtrace.message = err.message;
	      err = backtrace;
	      missingCallback(err);
	    }
	  }

	  function missingCallback(err) {
	    if (err) {
	      if (process.throwDeprecation)
	        throw err;  // Forgot a callback but don't know where? Use NODE_DEBUG=fs
	      else if (!process.noDeprecation) {
	        var msg = 'fs: missing callback ' + (err.stack || err.message);
	        if (process.traceDeprecation)
	          console.trace(msg);
	        else
	          console.error(msg);
	      }
	    }
	  }
	}

	function maybeCallback(cb) {
	  return typeof cb === 'function' ? cb : rethrow();
	}

	pathModule.normalize;

	// Regexp that finds the next partion of a (partial) path
	// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
	if (isWindows) {
	  var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
	} else {
	  var nextPartRe = /(.*?)(?:[\/]+|$)/g;
	}

	// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
	if (isWindows) {
	  var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
	} else {
	  var splitRootRe = /^[\/]*/;
	}

	old.realpathSync = function realpathSync(p, cache) {
	  // make p is absolute
	  p = pathModule.resolve(p);

	  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
	    return cache[p];
	  }

	  var original = p,
	      seenLinks = {},
	      knownHard = {};

	  // current character position in p
	  var pos;
	  // the partial path so far, including a trailing slash if any
	  var current;
	  // the partial path without a trailing slash (except when pointing at a root)
	  var base;
	  // the partial path scanned in the previous round, with slash
	  var previous;

	  start();

	  function start() {
	    // Skip over roots
	    var m = splitRootRe.exec(p);
	    pos = m[0].length;
	    current = m[0];
	    base = m[0];
	    previous = '';

	    // On windows, check that the root exists. On unix there is no need.
	    if (isWindows && !knownHard[base]) {
	      fs.lstatSync(base);
	      knownHard[base] = true;
	    }
	  }

	  // walk down the path, swapping out linked pathparts for their real
	  // values
	  // NB: p.length changes.
	  while (pos < p.length) {
	    // find the next part
	    nextPartRe.lastIndex = pos;
	    var result = nextPartRe.exec(p);
	    previous = current;
	    current += result[0];
	    base = previous + result[1];
	    pos = nextPartRe.lastIndex;

	    // continue if not a symlink
	    if (knownHard[base] || (cache && cache[base] === base)) {
	      continue;
	    }

	    var resolvedLink;
	    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
	      // some known symbolic link.  no need to stat again.
	      resolvedLink = cache[base];
	    } else {
	      var stat = fs.lstatSync(base);
	      if (!stat.isSymbolicLink()) {
	        knownHard[base] = true;
	        if (cache) cache[base] = base;
	        continue;
	      }

	      // read the link if it wasn't read before
	      // dev/ino always return 0 on windows, so skip the check.
	      var linkTarget = null;
	      if (!isWindows) {
	        var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
	        if (seenLinks.hasOwnProperty(id)) {
	          linkTarget = seenLinks[id];
	        }
	      }
	      if (linkTarget === null) {
	        fs.statSync(base);
	        linkTarget = fs.readlinkSync(base);
	      }
	      resolvedLink = pathModule.resolve(previous, linkTarget);
	      // track this, if given a cache.
	      if (cache) cache[base] = resolvedLink;
	      if (!isWindows) seenLinks[id] = linkTarget;
	    }

	    // resolve the link, then start over
	    p = pathModule.resolve(resolvedLink, p.slice(pos));
	    start();
	  }

	  if (cache) cache[original] = p;

	  return p;
	};


	old.realpath = function realpath(p, cache, cb) {
	  if (typeof cb !== 'function') {
	    cb = maybeCallback(cache);
	    cache = null;
	  }

	  // make p is absolute
	  p = pathModule.resolve(p);

	  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
	    return process.nextTick(cb.bind(null, null, cache[p]));
	  }

	  var original = p,
	      seenLinks = {},
	      knownHard = {};

	  // current character position in p
	  var pos;
	  // the partial path so far, including a trailing slash if any
	  var current;
	  // the partial path without a trailing slash (except when pointing at a root)
	  var base;
	  // the partial path scanned in the previous round, with slash
	  var previous;

	  start();

	  function start() {
	    // Skip over roots
	    var m = splitRootRe.exec(p);
	    pos = m[0].length;
	    current = m[0];
	    base = m[0];
	    previous = '';

	    // On windows, check that the root exists. On unix there is no need.
	    if (isWindows && !knownHard[base]) {
	      fs.lstat(base, function(err) {
	        if (err) return cb(err);
	        knownHard[base] = true;
	        LOOP();
	      });
	    } else {
	      process.nextTick(LOOP);
	    }
	  }

	  // walk down the path, swapping out linked pathparts for their real
	  // values
	  function LOOP() {
	    // stop if scanned past end of path
	    if (pos >= p.length) {
	      if (cache) cache[original] = p;
	      return cb(null, p);
	    }

	    // find the next part
	    nextPartRe.lastIndex = pos;
	    var result = nextPartRe.exec(p);
	    previous = current;
	    current += result[0];
	    base = previous + result[1];
	    pos = nextPartRe.lastIndex;

	    // continue if not a symlink
	    if (knownHard[base] || (cache && cache[base] === base)) {
	      return process.nextTick(LOOP);
	    }

	    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
	      // known symbolic link.  no need to stat again.
	      return gotResolvedLink(cache[base]);
	    }

	    return fs.lstat(base, gotStat);
	  }

	  function gotStat(err, stat) {
	    if (err) return cb(err);

	    // if not a symlink, skip to the next path part
	    if (!stat.isSymbolicLink()) {
	      knownHard[base] = true;
	      if (cache) cache[base] = base;
	      return process.nextTick(LOOP);
	    }

	    // stat & read the link if not read before
	    // call gotTarget as soon as the link target is known
	    // dev/ino always return 0 on windows, so skip the check.
	    if (!isWindows) {
	      var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
	      if (seenLinks.hasOwnProperty(id)) {
	        return gotTarget(null, seenLinks[id], base);
	      }
	    }
	    fs.stat(base, function(err) {
	      if (err) return cb(err);

	      fs.readlink(base, function(err, target) {
	        if (!isWindows) seenLinks[id] = target;
	        gotTarget(err, target);
	      });
	    });
	  }

	  function gotTarget(err, target, base) {
	    if (err) return cb(err);

	    var resolvedLink = pathModule.resolve(previous, target);
	    if (cache) cache[base] = resolvedLink;
	    gotResolvedLink(resolvedLink);
	  }

	  function gotResolvedLink(resolvedLink) {
	    // resolve the link, then start over
	    p = pathModule.resolve(resolvedLink, p.slice(pos));
	    start();
	  }
	};
	return old;
}

var fs_realpath;
var hasRequiredFs_realpath;

function requireFs_realpath () {
	if (hasRequiredFs_realpath) return fs_realpath;
	hasRequiredFs_realpath = 1;
	fs_realpath = realpath;
	realpath.realpath = realpath;
	realpath.sync = realpathSync;
	realpath.realpathSync = realpathSync;
	realpath.monkeypatch = monkeypatch;
	realpath.unmonkeypatch = unmonkeypatch;

	var fs = require$$0__default["default"];
	var origRealpath = fs.realpath;
	var origRealpathSync = fs.realpathSync;

	var version = process.version;
	var ok = /^v[0-5]\./.test(version);
	var old = requireOld();

	function newError (er) {
	  return er && er.syscall === 'realpath' && (
	    er.code === 'ELOOP' ||
	    er.code === 'ENOMEM' ||
	    er.code === 'ENAMETOOLONG'
	  )
	}

	function realpath (p, cache, cb) {
	  if (ok) {
	    return origRealpath(p, cache, cb)
	  }

	  if (typeof cache === 'function') {
	    cb = cache;
	    cache = null;
	  }
	  origRealpath(p, cache, function (er, result) {
	    if (newError(er)) {
	      old.realpath(p, cache, cb);
	    } else {
	      cb(er, result);
	    }
	  });
	}

	function realpathSync (p, cache) {
	  if (ok) {
	    return origRealpathSync(p, cache)
	  }

	  try {
	    return origRealpathSync(p, cache)
	  } catch (er) {
	    if (newError(er)) {
	      return old.realpathSync(p, cache)
	    } else {
	      throw er
	    }
	  }
	}

	function monkeypatch () {
	  fs.realpath = realpath;
	  fs.realpathSync = realpathSync;
	}

	function unmonkeypatch () {
	  fs.realpath = origRealpath;
	  fs.realpathSync = origRealpathSync;
	}
	return fs_realpath;
}

var concatMap;
var hasRequiredConcatMap;

function requireConcatMap () {
	if (hasRequiredConcatMap) return concatMap;
	hasRequiredConcatMap = 1;
	concatMap = function (xs, fn) {
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        var x = fn(xs[i], i);
	        if (isArray(x)) res.push.apply(res, x);
	        else res.push(x);
	    }
	    return res;
	};

	var isArray = Array.isArray || function (xs) {
	    return Object.prototype.toString.call(xs) === '[object Array]';
	};
	return concatMap;
}

var balancedMatch;
var hasRequiredBalancedMatch;

function requireBalancedMatch () {
	if (hasRequiredBalancedMatch) return balancedMatch;
	hasRequiredBalancedMatch = 1;
	balancedMatch = balanced;
	function balanced(a, b, str) {
	  if (a instanceof RegExp) a = maybeMatch(a, str);
	  if (b instanceof RegExp) b = maybeMatch(b, str);

	  var r = range(a, b, str);

	  return r && {
	    start: r[0],
	    end: r[1],
	    pre: str.slice(0, r[0]),
	    body: str.slice(r[0] + a.length, r[1]),
	    post: str.slice(r[1] + b.length)
	  };
	}

	function maybeMatch(reg, str) {
	  var m = str.match(reg);
	  return m ? m[0] : null;
	}

	balanced.range = range;
	function range(a, b, str) {
	  var begs, beg, left, right, result;
	  var ai = str.indexOf(a);
	  var bi = str.indexOf(b, ai + 1);
	  var i = ai;

	  if (ai >= 0 && bi > 0) {
	    if(a===b) {
	      return [ai, bi];
	    }
	    begs = [];
	    left = str.length;

	    while (i >= 0 && !result) {
	      if (i == ai) {
	        begs.push(i);
	        ai = str.indexOf(a, i + 1);
	      } else if (begs.length == 1) {
	        result = [ begs.pop(), bi ];
	      } else {
	        beg = begs.pop();
	        if (beg < left) {
	          left = beg;
	          right = bi;
	        }

	        bi = str.indexOf(b, i + 1);
	      }

	      i = ai < bi && ai >= 0 ? ai : bi;
	    }

	    if (begs.length) {
	      result = [ left, right ];
	    }
	  }

	  return result;
	}
	return balancedMatch;
}

var braceExpansion;
var hasRequiredBraceExpansion;

function requireBraceExpansion () {
	if (hasRequiredBraceExpansion) return braceExpansion;
	hasRequiredBraceExpansion = 1;
	var concatMap = requireConcatMap();
	var balanced = requireBalancedMatch();

	braceExpansion = expandTop;

	var escSlash = '\0SLASH'+Math.random()+'\0';
	var escOpen = '\0OPEN'+Math.random()+'\0';
	var escClose = '\0CLOSE'+Math.random()+'\0';
	var escComma = '\0COMMA'+Math.random()+'\0';
	var escPeriod = '\0PERIOD'+Math.random()+'\0';

	function numeric(str) {
	  return parseInt(str, 10) == str
	    ? parseInt(str, 10)
	    : str.charCodeAt(0);
	}

	function escapeBraces(str) {
	  return str.split('\\\\').join(escSlash)
	            .split('\\{').join(escOpen)
	            .split('\\}').join(escClose)
	            .split('\\,').join(escComma)
	            .split('\\.').join(escPeriod);
	}

	function unescapeBraces(str) {
	  return str.split(escSlash).join('\\')
	            .split(escOpen).join('{')
	            .split(escClose).join('}')
	            .split(escComma).join(',')
	            .split(escPeriod).join('.');
	}


	// Basically just str.split(","), but handling cases
	// where we have nested braced sections, which should be
	// treated as individual members, like {a,{b,c},d}
	function parseCommaParts(str) {
	  if (!str)
	    return [''];

	  var parts = [];
	  var m = balanced('{', '}', str);

	  if (!m)
	    return str.split(',');

	  var pre = m.pre;
	  var body = m.body;
	  var post = m.post;
	  var p = pre.split(',');

	  p[p.length-1] += '{' + body + '}';
	  var postParts = parseCommaParts(post);
	  if (post.length) {
	    p[p.length-1] += postParts.shift();
	    p.push.apply(p, postParts);
	  }

	  parts.push.apply(parts, p);

	  return parts;
	}

	function expandTop(str) {
	  if (!str)
	    return [];

	  // I don't know why Bash 4.3 does this, but it does.
	  // Anything starting with {} will have the first two bytes preserved
	  // but *only* at the top level, so {},a}b will not expand to anything,
	  // but a{},b}c will be expanded to [a}c,abc].
	  // One could argue that this is a bug in Bash, but since the goal of
	  // this module is to match Bash's rules, we escape a leading {}
	  if (str.substr(0, 2) === '{}') {
	    str = '\\{\\}' + str.substr(2);
	  }

	  return expand(escapeBraces(str), true).map(unescapeBraces);
	}

	function embrace(str) {
	  return '{' + str + '}';
	}
	function isPadded(el) {
	  return /^-?0\d/.test(el);
	}

	function lte(i, y) {
	  return i <= y;
	}
	function gte(i, y) {
	  return i >= y;
	}

	function expand(str, isTop) {
	  var expansions = [];

	  var m = balanced('{', '}', str);
	  if (!m || /\$$/.test(m.pre)) return [str];

	  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
	  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
	  var isSequence = isNumericSequence || isAlphaSequence;
	  var isOptions = m.body.indexOf(',') >= 0;
	  if (!isSequence && !isOptions) {
	    // {a},b}
	    if (m.post.match(/,.*\}/)) {
	      str = m.pre + '{' + m.body + escClose + m.post;
	      return expand(str);
	    }
	    return [str];
	  }

	  var n;
	  if (isSequence) {
	    n = m.body.split(/\.\./);
	  } else {
	    n = parseCommaParts(m.body);
	    if (n.length === 1) {
	      // x{{a,b}}y ==> x{a}y x{b}y
	      n = expand(n[0], false).map(embrace);
	      if (n.length === 1) {
	        var post = m.post.length
	          ? expand(m.post, false)
	          : [''];
	        return post.map(function(p) {
	          return m.pre + n[0] + p;
	        });
	      }
	    }
	  }

	  // at this point, n is the parts, and we know it's not a comma set
	  // with a single entry.

	  // no need to expand pre, since it is guaranteed to be free of brace-sets
	  var pre = m.pre;
	  var post = m.post.length
	    ? expand(m.post, false)
	    : [''];

	  var N;

	  if (isSequence) {
	    var x = numeric(n[0]);
	    var y = numeric(n[1]);
	    var width = Math.max(n[0].length, n[1].length);
	    var incr = n.length == 3
	      ? Math.abs(numeric(n[2]))
	      : 1;
	    var test = lte;
	    var reverse = y < x;
	    if (reverse) {
	      incr *= -1;
	      test = gte;
	    }
	    var pad = n.some(isPadded);

	    N = [];

	    for (var i = x; test(i, y); i += incr) {
	      var c;
	      if (isAlphaSequence) {
	        c = String.fromCharCode(i);
	        if (c === '\\')
	          c = '';
	      } else {
	        c = String(i);
	        if (pad) {
	          var need = width - c.length;
	          if (need > 0) {
	            var z = new Array(need + 1).join('0');
	            if (i < 0)
	              c = '-' + z + c.slice(1);
	            else
	              c = z + c;
	          }
	        }
	      }
	      N.push(c);
	    }
	  } else {
	    N = concatMap(n, function(el) { return expand(el, false) });
	  }

	  for (var j = 0; j < N.length; j++) {
	    for (var k = 0; k < post.length; k++) {
	      var expansion = pre + N[j] + post[k];
	      if (!isTop || isSequence || expansion)
	        expansions.push(expansion);
	    }
	  }

	  return expansions;
	}
	return braceExpansion;
}

var minimatch_1;
var hasRequiredMinimatch;

function requireMinimatch () {
	if (hasRequiredMinimatch) return minimatch_1;
	hasRequiredMinimatch = 1;
	minimatch_1 = minimatch;
	minimatch.Minimatch = Minimatch;

	var path = (function () { try { return require('path') } catch (e) {}}()) || {
	  sep: '/'
	};
	minimatch.sep = path.sep;

	var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};
	var expand = requireBraceExpansion();

	var plTypes = {
	  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
	  '?': { open: '(?:', close: ')?' },
	  '+': { open: '(?:', close: ')+' },
	  '*': { open: '(?:', close: ')*' },
	  '@': { open: '(?:', close: ')' }
	};

	// any single thing other than /
	// don't need to escape / when using new RegExp()
	var qmark = '[^/]';

	// * => any number of characters
	var star = qmark + '*?';

	// ** when dots are allowed.  Anything goes, except .. and .
	// not (^ or / followed by one or two dots followed by $ or /),
	// followed by anything, any number of times.
	var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?';

	// not a ^ or / followed by a dot,
	// followed by anything, any number of times.
	var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?';

	// characters that need to be escaped in RegExp.
	var reSpecials = charSet('().*{}+?[]^$\\!');

	// "abc" -> { a:true, b:true, c:true }
	function charSet (s) {
	  return s.split('').reduce(function (set, c) {
	    set[c] = true;
	    return set
	  }, {})
	}

	// normalizes slashes.
	var slashSplit = /\/+/;

	minimatch.filter = filter;
	function filter (pattern, options) {
	  options = options || {};
	  return function (p, i, list) {
	    return minimatch(p, pattern, options)
	  }
	}

	function ext (a, b) {
	  b = b || {};
	  var t = {};
	  Object.keys(a).forEach(function (k) {
	    t[k] = a[k];
	  });
	  Object.keys(b).forEach(function (k) {
	    t[k] = b[k];
	  });
	  return t
	}

	minimatch.defaults = function (def) {
	  if (!def || typeof def !== 'object' || !Object.keys(def).length) {
	    return minimatch
	  }

	  var orig = minimatch;

	  var m = function minimatch (p, pattern, options) {
	    return orig(p, pattern, ext(def, options))
	  };

	  m.Minimatch = function Minimatch (pattern, options) {
	    return new orig.Minimatch(pattern, ext(def, options))
	  };
	  m.Minimatch.defaults = function defaults (options) {
	    return orig.defaults(ext(def, options)).Minimatch
	  };

	  m.filter = function filter (pattern, options) {
	    return orig.filter(pattern, ext(def, options))
	  };

	  m.defaults = function defaults (options) {
	    return orig.defaults(ext(def, options))
	  };

	  m.makeRe = function makeRe (pattern, options) {
	    return orig.makeRe(pattern, ext(def, options))
	  };

	  m.braceExpand = function braceExpand (pattern, options) {
	    return orig.braceExpand(pattern, ext(def, options))
	  };

	  m.match = function (list, pattern, options) {
	    return orig.match(list, pattern, ext(def, options))
	  };

	  return m
	};

	Minimatch.defaults = function (def) {
	  return minimatch.defaults(def).Minimatch
	};

	function minimatch (p, pattern, options) {
	  assertValidPattern(pattern);

	  if (!options) options = {};

	  // shortcut: comments match nothing.
	  if (!options.nocomment && pattern.charAt(0) === '#') {
	    return false
	  }

	  return new Minimatch(pattern, options).match(p)
	}

	function Minimatch (pattern, options) {
	  if (!(this instanceof Minimatch)) {
	    return new Minimatch(pattern, options)
	  }

	  assertValidPattern(pattern);

	  if (!options) options = {};

	  pattern = pattern.trim();

	  // windows support: need to use /, not \
	  if (!options.allowWindowsEscape && path.sep !== '/') {
	    pattern = pattern.split(path.sep).join('/');
	  }

	  this.options = options;
	  this.set = [];
	  this.pattern = pattern;
	  this.regexp = null;
	  this.negate = false;
	  this.comment = false;
	  this.empty = false;
	  this.partial = !!options.partial;

	  // make the set of regexps etc.
	  this.make();
	}

	Minimatch.prototype.debug = function () {};

	Minimatch.prototype.make = make;
	function make () {
	  var pattern = this.pattern;
	  var options = this.options;

	  // empty patterns and comments match nothing.
	  if (!options.nocomment && pattern.charAt(0) === '#') {
	    this.comment = true;
	    return
	  }
	  if (!pattern) {
	    this.empty = true;
	    return
	  }

	  // step 1: figure out negation, etc.
	  this.parseNegate();

	  // step 2: expand braces
	  var set = this.globSet = this.braceExpand();

	  if (options.debug) this.debug = function debug() { console.error.apply(console, arguments); };

	  this.debug(this.pattern, set);

	  // step 3: now we have a set, so turn each one into a series of path-portion
	  // matching patterns.
	  // These will be regexps, except in the case of "**", which is
	  // set to the GLOBSTAR object for globstar behavior,
	  // and will not contain any / characters
	  set = this.globParts = set.map(function (s) {
	    return s.split(slashSplit)
	  });

	  this.debug(this.pattern, set);

	  // glob --> regexps
	  set = set.map(function (s, si, set) {
	    return s.map(this.parse, this)
	  }, this);

	  this.debug(this.pattern, set);

	  // filter out everything that didn't compile properly.
	  set = set.filter(function (s) {
	    return s.indexOf(false) === -1
	  });

	  this.debug(this.pattern, set);

	  this.set = set;
	}

	Minimatch.prototype.parseNegate = parseNegate;
	function parseNegate () {
	  var pattern = this.pattern;
	  var negate = false;
	  var options = this.options;
	  var negateOffset = 0;

	  if (options.nonegate) return

	  for (var i = 0, l = pattern.length
	    ; i < l && pattern.charAt(i) === '!'
	    ; i++) {
	    negate = !negate;
	    negateOffset++;
	  }

	  if (negateOffset) this.pattern = pattern.substr(negateOffset);
	  this.negate = negate;
	}

	// Brace expansion:
	// a{b,c}d -> abd acd
	// a{b,}c -> abc ac
	// a{0..3}d -> a0d a1d a2d a3d
	// a{b,c{d,e}f}g -> abg acdfg acefg
	// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
	//
	// Invalid sets are not expanded.
	// a{2..}b -> a{2..}b
	// a{b}c -> a{b}c
	minimatch.braceExpand = function (pattern, options) {
	  return braceExpand(pattern, options)
	};

	Minimatch.prototype.braceExpand = braceExpand;

	function braceExpand (pattern, options) {
	  if (!options) {
	    if (this instanceof Minimatch) {
	      options = this.options;
	    } else {
	      options = {};
	    }
	  }

	  pattern = typeof pattern === 'undefined'
	    ? this.pattern : pattern;

	  assertValidPattern(pattern);

	  // Thanks to Yeting Li <https://github.com/yetingli> for
	  // improving this regexp to avoid a ReDOS vulnerability.
	  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
	    // shortcut. no need to expand.
	    return [pattern]
	  }

	  return expand(pattern)
	}

	var MAX_PATTERN_LENGTH = 1024 * 64;
	var assertValidPattern = function (pattern) {
	  if (typeof pattern !== 'string') {
	    throw new TypeError('invalid pattern')
	  }

	  if (pattern.length > MAX_PATTERN_LENGTH) {
	    throw new TypeError('pattern is too long')
	  }
	};

	// parse a component of the expanded set.
	// At this point, no pattern may contain "/" in it
	// so we're going to return a 2d array, where each entry is the full
	// pattern, split on '/', and then turned into a regular expression.
	// A regexp is made at the end which joins each array with an
	// escaped /, and another full one which joins each regexp with |.
	//
	// Following the lead of Bash 4.1, note that "**" only has special meaning
	// when it is the *only* thing in a path portion.  Otherwise, any series
	// of * is equivalent to a single *.  Globstar behavior is enabled by
	// default, and can be disabled by setting options.noglobstar.
	Minimatch.prototype.parse = parse;
	var SUBPARSE = {};
	function parse (pattern, isSub) {
	  assertValidPattern(pattern);

	  var options = this.options;

	  // shortcuts
	  if (pattern === '**') {
	    if (!options.noglobstar)
	      return GLOBSTAR
	    else
	      pattern = '*';
	  }
	  if (pattern === '') return ''

	  var re = '';
	  var hasMagic = !!options.nocase;
	  var escaping = false;
	  // ? => one single character
	  var patternListStack = [];
	  var negativeLists = [];
	  var stateChar;
	  var inClass = false;
	  var reClassStart = -1;
	  var classStart = -1;
	  // . and .. never match anything that doesn't start with .,
	  // even when options.dot is set.
	  var patternStart = pattern.charAt(0) === '.' ? '' // anything
	  // not (start or / followed by . or .. followed by / or end)
	  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
	  : '(?!\\.)';
	  var self = this;

	  function clearStateChar () {
	    if (stateChar) {
	      // we had some state-tracking character
	      // that wasn't consumed by this pass.
	      switch (stateChar) {
	        case '*':
	          re += star;
	          hasMagic = true;
	        break
	        case '?':
	          re += qmark;
	          hasMagic = true;
	        break
	        default:
	          re += '\\' + stateChar;
	        break
	      }
	      self.debug('clearStateChar %j %j', stateChar, re);
	      stateChar = false;
	    }
	  }

	  for (var i = 0, len = pattern.length, c
	    ; (i < len) && (c = pattern.charAt(i))
	    ; i++) {
	    this.debug('%s\t%s %s %j', pattern, i, re, c);

	    // skip over any that are escaped.
	    if (escaping && reSpecials[c]) {
	      re += '\\' + c;
	      escaping = false;
	      continue
	    }

	    switch (c) {
	      /* istanbul ignore next */
	      case '/': {
	        // completely not allowed, even escaped.
	        // Should already be path-split by now.
	        return false
	      }

	      case '\\':
	        clearStateChar();
	        escaping = true;
	      continue

	      // the various stateChar values
	      // for the "extglob" stuff.
	      case '?':
	      case '*':
	      case '+':
	      case '@':
	      case '!':
	        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c);

	        // all of those are literals inside a class, except that
	        // the glob [!a] means [^a] in regexp
	        if (inClass) {
	          this.debug('  in class');
	          if (c === '!' && i === classStart + 1) c = '^';
	          re += c;
	          continue
	        }

	        // if we already have a stateChar, then it means
	        // that there was something like ** or +? in there.
	        // Handle the stateChar, then proceed with this one.
	        self.debug('call clearStateChar %j', stateChar);
	        clearStateChar();
	        stateChar = c;
	        // if extglob is disabled, then +(asdf|foo) isn't a thing.
	        // just clear the statechar *now*, rather than even diving into
	        // the patternList stuff.
	        if (options.noext) clearStateChar();
	      continue

	      case '(':
	        if (inClass) {
	          re += '(';
	          continue
	        }

	        if (!stateChar) {
	          re += '\\(';
	          continue
	        }

	        patternListStack.push({
	          type: stateChar,
	          start: i - 1,
	          reStart: re.length,
	          open: plTypes[stateChar].open,
	          close: plTypes[stateChar].close
	        });
	        // negation is (?:(?!js)[^/]*)
	        re += stateChar === '!' ? '(?:(?!(?:' : '(?:';
	        this.debug('plType %j %j', stateChar, re);
	        stateChar = false;
	      continue

	      case ')':
	        if (inClass || !patternListStack.length) {
	          re += '\\)';
	          continue
	        }

	        clearStateChar();
	        hasMagic = true;
	        var pl = patternListStack.pop();
	        // negation is (?:(?!js)[^/]*)
	        // The others are (?:<pattern>)<type>
	        re += pl.close;
	        if (pl.type === '!') {
	          negativeLists.push(pl);
	        }
	        pl.reEnd = re.length;
	      continue

	      case '|':
	        if (inClass || !patternListStack.length || escaping) {
	          re += '\\|';
	          escaping = false;
	          continue
	        }

	        clearStateChar();
	        re += '|';
	      continue

	      // these are mostly the same in regexp and glob
	      case '[':
	        // swallow any state-tracking char before the [
	        clearStateChar();

	        if (inClass) {
	          re += '\\' + c;
	          continue
	        }

	        inClass = true;
	        classStart = i;
	        reClassStart = re.length;
	        re += c;
	      continue

	      case ']':
	        //  a right bracket shall lose its special
	        //  meaning and represent itself in
	        //  a bracket expression if it occurs
	        //  first in the list.  -- POSIX.2 2.8.3.2
	        if (i === classStart + 1 || !inClass) {
	          re += '\\' + c;
	          escaping = false;
	          continue
	        }

	        // handle the case where we left a class open.
	        // "[z-a]" is valid, equivalent to "\[z-a\]"
	        // split where the last [ was, make sure we don't have
	        // an invalid re. if so, re-walk the contents of the
	        // would-be class to re-translate any characters that
	        // were passed through as-is
	        // TODO: It would probably be faster to determine this
	        // without a try/catch and a new RegExp, but it's tricky
	        // to do safely.  For now, this is safe and works.
	        var cs = pattern.substring(classStart + 1, i);
	        try {
	          RegExp('[' + cs + ']');
	        } catch (er) {
	          // not a valid class!
	          var sp = this.parse(cs, SUBPARSE);
	          re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]';
	          hasMagic = hasMagic || sp[1];
	          inClass = false;
	          continue
	        }

	        // finish up the class.
	        hasMagic = true;
	        inClass = false;
	        re += c;
	      continue

	      default:
	        // swallow any state char that wasn't consumed
	        clearStateChar();

	        if (escaping) {
	          // no need
	          escaping = false;
	        } else if (reSpecials[c]
	          && !(c === '^' && inClass)) {
	          re += '\\';
	        }

	        re += c;

	    } // switch
	  } // for

	  // handle the case where we left a class open.
	  // "[abc" is valid, equivalent to "\[abc"
	  if (inClass) {
	    // split where the last [ was, and escape it
	    // this is a huge pita.  We now have to re-walk
	    // the contents of the would-be class to re-translate
	    // any characters that were passed through as-is
	    cs = pattern.substr(classStart + 1);
	    sp = this.parse(cs, SUBPARSE);
	    re = re.substr(0, reClassStart) + '\\[' + sp[0];
	    hasMagic = hasMagic || sp[1];
	  }

	  // handle the case where we had a +( thing at the *end*
	  // of the pattern.
	  // each pattern list stack adds 3 chars, and we need to go through
	  // and escape any | chars that were passed through as-is for the regexp.
	  // Go through and escape them, taking care not to double-escape any
	  // | chars that were already escaped.
	  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
	    var tail = re.slice(pl.reStart + pl.open.length);
	    this.debug('setting tail', re, pl);
	    // maybe some even number of \, then maybe 1 \, followed by a |
	    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
	      if (!$2) {
	        // the | isn't already escaped, so escape it.
	        $2 = '\\';
	      }

	      // need to escape all those slashes *again*, without escaping the
	      // one that we need for escaping the | character.  As it works out,
	      // escaping an even number of slashes can be done by simply repeating
	      // it exactly after itself.  That's why this trick works.
	      //
	      // I am sorry that you have to see this.
	      return $1 + $1 + $2 + '|'
	    });

	    this.debug('tail=%j\n   %s', tail, tail, pl, re);
	    var t = pl.type === '*' ? star
	      : pl.type === '?' ? qmark
	      : '\\' + pl.type;

	    hasMagic = true;
	    re = re.slice(0, pl.reStart) + t + '\\(' + tail;
	  }

	  // handle trailing things that only matter at the very end.
	  clearStateChar();
	  if (escaping) {
	    // trailing \\
	    re += '\\\\';
	  }

	  // only need to apply the nodot start if the re starts with
	  // something that could conceivably capture a dot
	  var addPatternStart = false;
	  switch (re.charAt(0)) {
	    case '[': case '.': case '(': addPatternStart = true;
	  }

	  // Hack to work around lack of negative lookbehind in JS
	  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
	  // like 'a.xyz.yz' doesn't match.  So, the first negative
	  // lookahead, has to look ALL the way ahead, to the end of
	  // the pattern.
	  for (var n = negativeLists.length - 1; n > -1; n--) {
	    var nl = negativeLists[n];

	    var nlBefore = re.slice(0, nl.reStart);
	    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
	    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
	    var nlAfter = re.slice(nl.reEnd);

	    nlLast += nlAfter;

	    // Handle nested stuff like *(*.js|!(*.json)), where open parens
	    // mean that we should *not* include the ) in the bit that is considered
	    // "after" the negated section.
	    var openParensBefore = nlBefore.split('(').length - 1;
	    var cleanAfter = nlAfter;
	    for (i = 0; i < openParensBefore; i++) {
	      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '');
	    }
	    nlAfter = cleanAfter;

	    var dollar = '';
	    if (nlAfter === '' && isSub !== SUBPARSE) {
	      dollar = '$';
	    }
	    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
	    re = newRe;
	  }

	  // if the re is not "" at this point, then we need to make sure
	  // it doesn't match against an empty path part.
	  // Otherwise a/* will match a/, which it should not.
	  if (re !== '' && hasMagic) {
	    re = '(?=.)' + re;
	  }

	  if (addPatternStart) {
	    re = patternStart + re;
	  }

	  // parsing just a piece of a larger pattern.
	  if (isSub === SUBPARSE) {
	    return [re, hasMagic]
	  }

	  // skip the regexp for non-magical patterns
	  // unescape anything in it, though, so that it'll be
	  // an exact match against a file etc.
	  if (!hasMagic) {
	    return globUnescape(pattern)
	  }

	  var flags = options.nocase ? 'i' : '';
	  try {
	    var regExp = new RegExp('^' + re + '$', flags);
	  } catch (er) /* istanbul ignore next - should be impossible */ {
	    // If it was an invalid regular expression, then it can't match
	    // anything.  This trick looks for a character after the end of
	    // the string, which is of course impossible, except in multi-line
	    // mode, but it's not a /m regex.
	    return new RegExp('$.')
	  }

	  regExp._glob = pattern;
	  regExp._src = re;

	  return regExp
	}

	minimatch.makeRe = function (pattern, options) {
	  return new Minimatch(pattern, options || {}).makeRe()
	};

	Minimatch.prototype.makeRe = makeRe;
	function makeRe () {
	  if (this.regexp || this.regexp === false) return this.regexp

	  // at this point, this.set is a 2d array of partial
	  // pattern strings, or "**".
	  //
	  // It's better to use .match().  This function shouldn't
	  // be used, really, but it's pretty convenient sometimes,
	  // when you just want to work with a regex.
	  var set = this.set;

	  if (!set.length) {
	    this.regexp = false;
	    return this.regexp
	  }
	  var options = this.options;

	  var twoStar = options.noglobstar ? star
	    : options.dot ? twoStarDot
	    : twoStarNoDot;
	  var flags = options.nocase ? 'i' : '';

	  var re = set.map(function (pattern) {
	    return pattern.map(function (p) {
	      return (p === GLOBSTAR) ? twoStar
	      : (typeof p === 'string') ? regExpEscape(p)
	      : p._src
	    }).join('\\\/')
	  }).join('|');

	  // must match entire pattern
	  // ending in a * or ** will make it less strict.
	  re = '^(?:' + re + ')$';

	  // can match anything, as long as it's not this.
	  if (this.negate) re = '^(?!' + re + ').*$';

	  try {
	    this.regexp = new RegExp(re, flags);
	  } catch (ex) /* istanbul ignore next - should be impossible */ {
	    this.regexp = false;
	  }
	  return this.regexp
	}

	minimatch.match = function (list, pattern, options) {
	  options = options || {};
	  var mm = new Minimatch(pattern, options);
	  list = list.filter(function (f) {
	    return mm.match(f)
	  });
	  if (mm.options.nonull && !list.length) {
	    list.push(pattern);
	  }
	  return list
	};

	Minimatch.prototype.match = function match (f, partial) {
	  if (typeof partial === 'undefined') partial = this.partial;
	  this.debug('match', f, this.pattern);
	  // short-circuit in the case of busted things.
	  // comments, etc.
	  if (this.comment) return false
	  if (this.empty) return f === ''

	  if (f === '/' && partial) return true

	  var options = this.options;

	  // windows: need to use /, not \
	  if (path.sep !== '/') {
	    f = f.split(path.sep).join('/');
	  }

	  // treat the test path as a set of pathparts.
	  f = f.split(slashSplit);
	  this.debug(this.pattern, 'split', f);

	  // just ONE of the pattern sets in this.set needs to match
	  // in order for it to be valid.  If negating, then just one
	  // match means that we have failed.
	  // Either way, return on the first hit.

	  var set = this.set;
	  this.debug(this.pattern, 'set', set);

	  // Find the basename of the path by looking for the last non-empty segment
	  var filename;
	  var i;
	  for (i = f.length - 1; i >= 0; i--) {
	    filename = f[i];
	    if (filename) break
	  }

	  for (i = 0; i < set.length; i++) {
	    var pattern = set[i];
	    var file = f;
	    if (options.matchBase && pattern.length === 1) {
	      file = [filename];
	    }
	    var hit = this.matchOne(file, pattern, partial);
	    if (hit) {
	      if (options.flipNegate) return true
	      return !this.negate
	    }
	  }

	  // didn't get any hits.  this is success if it's a negative
	  // pattern, failure otherwise.
	  if (options.flipNegate) return false
	  return this.negate
	};

	// set partial to true to test if, for example,
	// "/a/b" matches the start of "/*/b/*/d"
	// Partial means, if you run out of file before you run
	// out of pattern, then that's fine, as long as all
	// the parts match.
	Minimatch.prototype.matchOne = function (file, pattern, partial) {
	  var options = this.options;

	  this.debug('matchOne',
	    { 'this': this, file: file, pattern: pattern });

	  this.debug('matchOne', file.length, pattern.length);

	  for (var fi = 0,
	      pi = 0,
	      fl = file.length,
	      pl = pattern.length
	      ; (fi < fl) && (pi < pl)
	      ; fi++, pi++) {
	    this.debug('matchOne loop');
	    var p = pattern[pi];
	    var f = file[fi];

	    this.debug(pattern, p, f);

	    // should be impossible.
	    // some invalid regexp stuff in the set.
	    /* istanbul ignore if */
	    if (p === false) return false

	    if (p === GLOBSTAR) {
	      this.debug('GLOBSTAR', [pattern, p, f]);

	      // "**"
	      // a/**/b/**/c would match the following:
	      // a/b/x/y/z/c
	      // a/x/y/z/b/c
	      // a/b/x/b/x/c
	      // a/b/c
	      // To do this, take the rest of the pattern after
	      // the **, and see if it would match the file remainder.
	      // If so, return success.
	      // If not, the ** "swallows" a segment, and try again.
	      // This is recursively awful.
	      //
	      // a/**/b/**/c matching a/b/x/y/z/c
	      // - a matches a
	      // - doublestar
	      //   - matchOne(b/x/y/z/c, b/**/c)
	      //     - b matches b
	      //     - doublestar
	      //       - matchOne(x/y/z/c, c) -> no
	      //       - matchOne(y/z/c, c) -> no
	      //       - matchOne(z/c, c) -> no
	      //       - matchOne(c, c) yes, hit
	      var fr = fi;
	      var pr = pi + 1;
	      if (pr === pl) {
	        this.debug('** at the end');
	        // a ** at the end will just swallow the rest.
	        // We have found a match.
	        // however, it will not swallow /.x, unless
	        // options.dot is set.
	        // . and .. are *never* matched by **, for explosively
	        // exponential reasons.
	        for (; fi < fl; fi++) {
	          if (file[fi] === '.' || file[fi] === '..' ||
	            (!options.dot && file[fi].charAt(0) === '.')) return false
	        }
	        return true
	      }

	      // ok, let's see if we can swallow whatever we can.
	      while (fr < fl) {
	        var swallowee = file[fr];

	        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);

	        // XXX remove this slice.  Just pass the start index.
	        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
	          this.debug('globstar found match!', fr, fl, swallowee);
	          // found a match.
	          return true
	        } else {
	          // can't swallow "." or ".." ever.
	          // can only swallow ".foo" when explicitly asked.
	          if (swallowee === '.' || swallowee === '..' ||
	            (!options.dot && swallowee.charAt(0) === '.')) {
	            this.debug('dot detected!', file, fr, pattern, pr);
	            break
	          }

	          // ** swallows a segment, and continue.
	          this.debug('globstar swallow a segment, and continue');
	          fr++;
	        }
	      }

	      // no match was found.
	      // However, in partial mode, we can't say this is necessarily over.
	      // If there's more *pattern* left, then
	      /* istanbul ignore if */
	      if (partial) {
	        // ran out of file
	        this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
	        if (fr === fl) return true
	      }
	      return false
	    }

	    // something other than **
	    // non-magic patterns just have to match exactly
	    // patterns with magic have been turned into regexps.
	    var hit;
	    if (typeof p === 'string') {
	      hit = f === p;
	      this.debug('string match', p, f, hit);
	    } else {
	      hit = f.match(p);
	      this.debug('pattern match', p, f, hit);
	    }

	    if (!hit) return false
	  }

	  // Note: ending in / means that we'll get a final ""
	  // at the end of the pattern.  This can only match a
	  // corresponding "" at the end of the file.
	  // If the file ends in /, then it can only match a
	  // a pattern that ends in /, unless the pattern just
	  // doesn't have any more for it. But, a/b/ should *not*
	  // match "a/b/*", even though "" matches against the
	  // [^/]*? pattern, except in partial mode, where it might
	  // simply not be reached yet.
	  // However, a/b/ should still satisfy a/*

	  // now either we fell off the end of the pattern, or we're done.
	  if (fi === fl && pi === pl) {
	    // ran out of pattern and filename at the same time.
	    // an exact hit!
	    return true
	  } else if (fi === fl) {
	    // ran out of file, but still had pattern left.
	    // this is ok if we're doing the match as part of
	    // a glob fs traversal.
	    return partial
	  } else /* istanbul ignore else */ if (pi === pl) {
	    // ran out of pattern, still have file left.
	    // this is only acceptable if we're on the very last
	    // empty segment of a file with a trailing slash.
	    // a/* should match a/b/
	    return (fi === fl - 1) && (file[fi] === '')
	  }

	  // should be unreachable.
	  /* istanbul ignore next */
	  throw new Error('wtf?')
	};

	// replace stuff like \* with *
	function globUnescape (s) {
	  return s.replace(/\\(.)/g, '$1')
	}

	function regExpEscape (s) {
	  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
	}
	return minimatch_1;
}

var inherits = {exports: {}};

var inherits_browser = {exports: {}};

var hasRequiredInherits_browser;

function requireInherits_browser () {
	if (hasRequiredInherits_browser) return inherits_browser.exports;
	hasRequiredInherits_browser = 1;
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      ctor.prototype = Object.create(superCtor.prototype, {
	        constructor: {
	          value: ctor,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	    }
	  };
	} else {
	  // old school shim for old browsers
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      var TempCtor = function () {};
	      TempCtor.prototype = superCtor.prototype;
	      ctor.prototype = new TempCtor();
	      ctor.prototype.constructor = ctor;
	    }
	  };
	}
	return inherits_browser.exports;
}

var hasRequiredInherits;

function requireInherits () {
	if (hasRequiredInherits) return inherits.exports;
	hasRequiredInherits = 1;
	(function (module) {
		try {
		  var util = require('util');
		  /* istanbul ignore next */
		  if (typeof util.inherits !== 'function') throw '';
		  module.exports = util.inherits;
		} catch (e) {
		  /* istanbul ignore next */
		  module.exports = requireInherits_browser();
		}
} (inherits));
	return inherits.exports;
}

var pathIsAbsolute = {exports: {}};

var hasRequiredPathIsAbsolute;

function requirePathIsAbsolute () {
	if (hasRequiredPathIsAbsolute) return pathIsAbsolute.exports;
	hasRequiredPathIsAbsolute = 1;

	function posix(path) {
		return path.charAt(0) === '/';
	}

	function win32(path) {
		// https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
		var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
		var result = splitDeviceRe.exec(path);
		var device = result[1] || '';
		var isUnc = Boolean(device && device.charAt(1) !== ':');

		// UNC paths are always absolute
		return Boolean(result[2] || isUnc);
	}

	pathIsAbsolute.exports = process.platform === 'win32' ? win32 : posix;
	pathIsAbsolute.exports.posix = posix;
	pathIsAbsolute.exports.win32 = win32;
	return pathIsAbsolute.exports;
}

var common = {};

var hasRequiredCommon;

function requireCommon () {
	if (hasRequiredCommon) return common;
	hasRequiredCommon = 1;
	common.setopts = setopts;
	common.ownProp = ownProp;
	common.makeAbs = makeAbs;
	common.finish = finish;
	common.mark = mark;
	common.isIgnored = isIgnored;
	common.childrenIgnored = childrenIgnored;

	function ownProp (obj, field) {
	  return Object.prototype.hasOwnProperty.call(obj, field)
	}

	var fs = require$$0__default["default"];
	var path = require$$1__default["default"];
	var minimatch = requireMinimatch();
	var isAbsolute = requirePathIsAbsolute();
	var Minimatch = minimatch.Minimatch;

	function alphasort (a, b) {
	  return a.localeCompare(b, 'en')
	}

	function setupIgnores (self, options) {
	  self.ignore = options.ignore || [];

	  if (!Array.isArray(self.ignore))
	    self.ignore = [self.ignore];

	  if (self.ignore.length) {
	    self.ignore = self.ignore.map(ignoreMap);
	  }
	}

	// ignore patterns are always in dot:true mode.
	function ignoreMap (pattern) {
	  var gmatcher = null;
	  if (pattern.slice(-3) === '/**') {
	    var gpattern = pattern.replace(/(\/\*\*)+$/, '');
	    gmatcher = new Minimatch(gpattern, { dot: true });
	  }

	  return {
	    matcher: new Minimatch(pattern, { dot: true }),
	    gmatcher: gmatcher
	  }
	}

	function setopts (self, pattern, options) {
	  if (!options)
	    options = {};

	  // base-matching: just use globstar for that.
	  if (options.matchBase && -1 === pattern.indexOf("/")) {
	    if (options.noglobstar) {
	      throw new Error("base matching requires globstar")
	    }
	    pattern = "**/" + pattern;
	  }

	  self.silent = !!options.silent;
	  self.pattern = pattern;
	  self.strict = options.strict !== false;
	  self.realpath = !!options.realpath;
	  self.realpathCache = options.realpathCache || Object.create(null);
	  self.follow = !!options.follow;
	  self.dot = !!options.dot;
	  self.mark = !!options.mark;
	  self.nodir = !!options.nodir;
	  if (self.nodir)
	    self.mark = true;
	  self.sync = !!options.sync;
	  self.nounique = !!options.nounique;
	  self.nonull = !!options.nonull;
	  self.nosort = !!options.nosort;
	  self.nocase = !!options.nocase;
	  self.stat = !!options.stat;
	  self.noprocess = !!options.noprocess;
	  self.absolute = !!options.absolute;
	  self.fs = options.fs || fs;

	  self.maxLength = options.maxLength || Infinity;
	  self.cache = options.cache || Object.create(null);
	  self.statCache = options.statCache || Object.create(null);
	  self.symlinks = options.symlinks || Object.create(null);

	  setupIgnores(self, options);

	  self.changedCwd = false;
	  var cwd = process.cwd();
	  if (!ownProp(options, "cwd"))
	    self.cwd = cwd;
	  else {
	    self.cwd = path.resolve(options.cwd);
	    self.changedCwd = self.cwd !== cwd;
	  }

	  self.root = options.root || path.resolve(self.cwd, "/");
	  self.root = path.resolve(self.root);
	  if (process.platform === "win32")
	    self.root = self.root.replace(/\\/g, "/");

	  // TODO: is an absolute `cwd` supposed to be resolved against `root`?
	  // e.g. { cwd: '/test', root: __dirname } === path.join(__dirname, '/test')
	  self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd);
	  if (process.platform === "win32")
	    self.cwdAbs = self.cwdAbs.replace(/\\/g, "/");
	  self.nomount = !!options.nomount;

	  // disable comments and negation in Minimatch.
	  // Note that they are not supported in Glob itself anyway.
	  options.nonegate = true;
	  options.nocomment = true;

	  self.minimatch = new Minimatch(pattern, options);
	  self.options = self.minimatch.options;
	}

	function finish (self) {
	  var nou = self.nounique;
	  var all = nou ? [] : Object.create(null);

	  for (var i = 0, l = self.matches.length; i < l; i ++) {
	    var matches = self.matches[i];
	    if (!matches || Object.keys(matches).length === 0) {
	      if (self.nonull) {
	        // do like the shell, and spit out the literal glob
	        var literal = self.minimatch.globSet[i];
	        if (nou)
	          all.push(literal);
	        else
	          all[literal] = true;
	      }
	    } else {
	      // had matches
	      var m = Object.keys(matches);
	      if (nou)
	        all.push.apply(all, m);
	      else
	        m.forEach(function (m) {
	          all[m] = true;
	        });
	    }
	  }

	  if (!nou)
	    all = Object.keys(all);

	  if (!self.nosort)
	    all = all.sort(alphasort);

	  // at *some* point we statted all of these
	  if (self.mark) {
	    for (var i = 0; i < all.length; i++) {
	      all[i] = self._mark(all[i]);
	    }
	    if (self.nodir) {
	      all = all.filter(function (e) {
	        var notDir = !(/\/$/.test(e));
	        var c = self.cache[e] || self.cache[makeAbs(self, e)];
	        if (notDir && c)
	          notDir = c !== 'DIR' && !Array.isArray(c);
	        return notDir
	      });
	    }
	  }

	  if (self.ignore.length)
	    all = all.filter(function(m) {
	      return !isIgnored(self, m)
	    });

	  self.found = all;
	}

	function mark (self, p) {
	  var abs = makeAbs(self, p);
	  var c = self.cache[abs];
	  var m = p;
	  if (c) {
	    var isDir = c === 'DIR' || Array.isArray(c);
	    var slash = p.slice(-1) === '/';

	    if (isDir && !slash)
	      m += '/';
	    else if (!isDir && slash)
	      m = m.slice(0, -1);

	    if (m !== p) {
	      var mabs = makeAbs(self, m);
	      self.statCache[mabs] = self.statCache[abs];
	      self.cache[mabs] = self.cache[abs];
	    }
	  }

	  return m
	}

	// lotta situps...
	function makeAbs (self, f) {
	  var abs = f;
	  if (f.charAt(0) === '/') {
	    abs = path.join(self.root, f);
	  } else if (isAbsolute(f) || f === '') {
	    abs = f;
	  } else if (self.changedCwd) {
	    abs = path.resolve(self.cwd, f);
	  } else {
	    abs = path.resolve(f);
	  }

	  if (process.platform === 'win32')
	    abs = abs.replace(/\\/g, '/');

	  return abs
	}


	// Return true, if pattern ends with globstar '**', for the accompanying parent directory.
	// Ex:- If node_modules/** is the pattern, add 'node_modules' to ignore list along with it's contents
	function isIgnored (self, path) {
	  if (!self.ignore.length)
	    return false

	  return self.ignore.some(function(item) {
	    return item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path))
	  })
	}

	function childrenIgnored (self, path) {
	  if (!self.ignore.length)
	    return false

	  return self.ignore.some(function(item) {
	    return !!(item.gmatcher && item.gmatcher.match(path))
	  })
	}
	return common;
}

var sync;
var hasRequiredSync;

function requireSync () {
	if (hasRequiredSync) return sync;
	hasRequiredSync = 1;
	sync = globSync;
	globSync.GlobSync = GlobSync;

	var rp = requireFs_realpath();
	var minimatch = requireMinimatch();
	minimatch.Minimatch;
	requireGlob().Glob;
	var path = require$$1__default["default"];
	var assert = require$$5__default["default"];
	var isAbsolute = requirePathIsAbsolute();
	var common = requireCommon();
	var setopts = common.setopts;
	var ownProp = common.ownProp;
	var childrenIgnored = common.childrenIgnored;
	var isIgnored = common.isIgnored;

	function globSync (pattern, options) {
	  if (typeof options === 'function' || arguments.length === 3)
	    throw new TypeError('callback provided to sync glob\n'+
	                        'See: https://github.com/isaacs/node-glob/issues/167')

	  return new GlobSync(pattern, options).found
	}

	function GlobSync (pattern, options) {
	  if (!pattern)
	    throw new Error('must provide pattern')

	  if (typeof options === 'function' || arguments.length === 3)
	    throw new TypeError('callback provided to sync glob\n'+
	                        'See: https://github.com/isaacs/node-glob/issues/167')

	  if (!(this instanceof GlobSync))
	    return new GlobSync(pattern, options)

	  setopts(this, pattern, options);

	  if (this.noprocess)
	    return this

	  var n = this.minimatch.set.length;
	  this.matches = new Array(n);
	  for (var i = 0; i < n; i ++) {
	    this._process(this.minimatch.set[i], i, false);
	  }
	  this._finish();
	}

	GlobSync.prototype._finish = function () {
	  assert(this instanceof GlobSync);
	  if (this.realpath) {
	    var self = this;
	    this.matches.forEach(function (matchset, index) {
	      var set = self.matches[index] = Object.create(null);
	      for (var p in matchset) {
	        try {
	          p = self._makeAbs(p);
	          var real = rp.realpathSync(p, self.realpathCache);
	          set[real] = true;
	        } catch (er) {
	          if (er.syscall === 'stat')
	            set[self._makeAbs(p)] = true;
	          else
	            throw er
	        }
	      }
	    });
	  }
	  common.finish(this);
	};


	GlobSync.prototype._process = function (pattern, index, inGlobStar) {
	  assert(this instanceof GlobSync);

	  // Get the first [n] parts of pattern that are all strings.
	  var n = 0;
	  while (typeof pattern[n] === 'string') {
	    n ++;
	  }
	  // now n is the index of the first one that is *not* a string.

	  // See if there's anything else
	  var prefix;
	  switch (n) {
	    // if not, then this is rather simple
	    case pattern.length:
	      this._processSimple(pattern.join('/'), index);
	      return

	    case 0:
	      // pattern *starts* with some non-trivial item.
	      // going to readdir(cwd), but not include the prefix in matches.
	      prefix = null;
	      break

	    default:
	      // pattern has some string bits in the front.
	      // whatever it starts with, whether that's 'absolute' like /foo/bar,
	      // or 'relative' like '../baz'
	      prefix = pattern.slice(0, n).join('/');
	      break
	  }

	  var remain = pattern.slice(n);

	  // get the list of entries.
	  var read;
	  if (prefix === null)
	    read = '.';
	  else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
	    if (!prefix || !isAbsolute(prefix))
	      prefix = '/' + prefix;
	    read = prefix;
	  } else
	    read = prefix;

	  var abs = this._makeAbs(read);

	  //if ignored, skip processing
	  if (childrenIgnored(this, read))
	    return

	  var isGlobStar = remain[0] === minimatch.GLOBSTAR;
	  if (isGlobStar)
	    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);
	  else
	    this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
	};


	GlobSync.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar) {
	  var entries = this._readdir(abs, inGlobStar);

	  // if the abs isn't a dir, then nothing can match!
	  if (!entries)
	    return

	  // It will only match dot entries if it starts with a dot, or if
	  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
	  var pn = remain[0];
	  var negate = !!this.minimatch.negate;
	  var rawGlob = pn._glob;
	  var dotOk = this.dot || rawGlob.charAt(0) === '.';

	  var matchedEntries = [];
	  for (var i = 0; i < entries.length; i++) {
	    var e = entries[i];
	    if (e.charAt(0) !== '.' || dotOk) {
	      var m;
	      if (negate && !prefix) {
	        m = !e.match(pn);
	      } else {
	        m = e.match(pn);
	      }
	      if (m)
	        matchedEntries.push(e);
	    }
	  }

	  var len = matchedEntries.length;
	  // If there are no matched entries, then nothing matches.
	  if (len === 0)
	    return

	  // if this is the last remaining pattern bit, then no need for
	  // an additional stat *unless* the user has specified mark or
	  // stat explicitly.  We know they exist, since readdir returned
	  // them.

	  if (remain.length === 1 && !this.mark && !this.stat) {
	    if (!this.matches[index])
	      this.matches[index] = Object.create(null);

	    for (var i = 0; i < len; i ++) {
	      var e = matchedEntries[i];
	      if (prefix) {
	        if (prefix.slice(-1) !== '/')
	          e = prefix + '/' + e;
	        else
	          e = prefix + e;
	      }

	      if (e.charAt(0) === '/' && !this.nomount) {
	        e = path.join(this.root, e);
	      }
	      this._emitMatch(index, e);
	    }
	    // This was the last one, and no stats were needed
	    return
	  }

	  // now test all matched entries as stand-ins for that part
	  // of the pattern.
	  remain.shift();
	  for (var i = 0; i < len; i ++) {
	    var e = matchedEntries[i];
	    var newPattern;
	    if (prefix)
	      newPattern = [prefix, e];
	    else
	      newPattern = [e];
	    this._process(newPattern.concat(remain), index, inGlobStar);
	  }
	};


	GlobSync.prototype._emitMatch = function (index, e) {
	  if (isIgnored(this, e))
	    return

	  var abs = this._makeAbs(e);

	  if (this.mark)
	    e = this._mark(e);

	  if (this.absolute) {
	    e = abs;
	  }

	  if (this.matches[index][e])
	    return

	  if (this.nodir) {
	    var c = this.cache[abs];
	    if (c === 'DIR' || Array.isArray(c))
	      return
	  }

	  this.matches[index][e] = true;

	  if (this.stat)
	    this._stat(e);
	};


	GlobSync.prototype._readdirInGlobStar = function (abs) {
	  // follow all symlinked directories forever
	  // just proceed as if this is a non-globstar situation
	  if (this.follow)
	    return this._readdir(abs, false)

	  var entries;
	  var lstat;
	  try {
	    lstat = this.fs.lstatSync(abs);
	  } catch (er) {
	    if (er.code === 'ENOENT') {
	      // lstat failed, doesn't exist
	      return null
	    }
	  }

	  var isSym = lstat && lstat.isSymbolicLink();
	  this.symlinks[abs] = isSym;

	  // If it's not a symlink or a dir, then it's definitely a regular file.
	  // don't bother doing a readdir in that case.
	  if (!isSym && lstat && !lstat.isDirectory())
	    this.cache[abs] = 'FILE';
	  else
	    entries = this._readdir(abs, false);

	  return entries
	};

	GlobSync.prototype._readdir = function (abs, inGlobStar) {

	  if (inGlobStar && !ownProp(this.symlinks, abs))
	    return this._readdirInGlobStar(abs)

	  if (ownProp(this.cache, abs)) {
	    var c = this.cache[abs];
	    if (!c || c === 'FILE')
	      return null

	    if (Array.isArray(c))
	      return c
	  }

	  try {
	    return this._readdirEntries(abs, this.fs.readdirSync(abs))
	  } catch (er) {
	    this._readdirError(abs, er);
	    return null
	  }
	};

	GlobSync.prototype._readdirEntries = function (abs, entries) {
	  // if we haven't asked to stat everything, then just
	  // assume that everything in there exists, so we can avoid
	  // having to stat it a second time.
	  if (!this.mark && !this.stat) {
	    for (var i = 0; i < entries.length; i ++) {
	      var e = entries[i];
	      if (abs === '/')
	        e = abs + e;
	      else
	        e = abs + '/' + e;
	      this.cache[e] = true;
	    }
	  }

	  this.cache[abs] = entries;

	  // mark and cache dir-ness
	  return entries
	};

	GlobSync.prototype._readdirError = function (f, er) {
	  // handle errors, and cache the information
	  switch (er.code) {
	    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
	    case 'ENOTDIR': // totally normal. means it *does* exist.
	      var abs = this._makeAbs(f);
	      this.cache[abs] = 'FILE';
	      if (abs === this.cwdAbs) {
	        var error = new Error(er.code + ' invalid cwd ' + this.cwd);
	        error.path = this.cwd;
	        error.code = er.code;
	        throw error
	      }
	      break

	    case 'ENOENT': // not terribly unusual
	    case 'ELOOP':
	    case 'ENAMETOOLONG':
	    case 'UNKNOWN':
	      this.cache[this._makeAbs(f)] = false;
	      break

	    default: // some unusual error.  Treat as failure.
	      this.cache[this._makeAbs(f)] = false;
	      if (this.strict)
	        throw er
	      if (!this.silent)
	        console.error('glob error', er);
	      break
	  }
	};

	GlobSync.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar) {

	  var entries = this._readdir(abs, inGlobStar);

	  // no entries means not a dir, so it can never have matches
	  // foo.txt/** doesn't match foo.txt
	  if (!entries)
	    return

	  // test without the globstar, and with every child both below
	  // and replacing the globstar.
	  var remainWithoutGlobStar = remain.slice(1);
	  var gspref = prefix ? [ prefix ] : [];
	  var noGlobStar = gspref.concat(remainWithoutGlobStar);

	  // the noGlobStar pattern exits the inGlobStar state
	  this._process(noGlobStar, index, false);

	  var len = entries.length;
	  var isSym = this.symlinks[abs];

	  // If it's a symlink, and we're in a globstar, then stop
	  if (isSym && inGlobStar)
	    return

	  for (var i = 0; i < len; i++) {
	    var e = entries[i];
	    if (e.charAt(0) === '.' && !this.dot)
	      continue

	    // these two cases enter the inGlobStar state
	    var instead = gspref.concat(entries[i], remainWithoutGlobStar);
	    this._process(instead, index, true);

	    var below = gspref.concat(entries[i], remain);
	    this._process(below, index, true);
	  }
	};

	GlobSync.prototype._processSimple = function (prefix, index) {
	  // XXX review this.  Shouldn't it be doing the mounting etc
	  // before doing stat?  kinda weird?
	  var exists = this._stat(prefix);

	  if (!this.matches[index])
	    this.matches[index] = Object.create(null);

	  // If it doesn't exist, then just mark the lack of results
	  if (!exists)
	    return

	  if (prefix && isAbsolute(prefix) && !this.nomount) {
	    var trail = /[\/\\]$/.test(prefix);
	    if (prefix.charAt(0) === '/') {
	      prefix = path.join(this.root, prefix);
	    } else {
	      prefix = path.resolve(this.root, prefix);
	      if (trail)
	        prefix += '/';
	    }
	  }

	  if (process.platform === 'win32')
	    prefix = prefix.replace(/\\/g, '/');

	  // Mark this as a match
	  this._emitMatch(index, prefix);
	};

	// Returns either 'DIR', 'FILE', or false
	GlobSync.prototype._stat = function (f) {
	  var abs = this._makeAbs(f);
	  var needDir = f.slice(-1) === '/';

	  if (f.length > this.maxLength)
	    return false

	  if (!this.stat && ownProp(this.cache, abs)) {
	    var c = this.cache[abs];

	    if (Array.isArray(c))
	      c = 'DIR';

	    // It exists, but maybe not how we need it
	    if (!needDir || c === 'DIR')
	      return c

	    if (needDir && c === 'FILE')
	      return false

	    // otherwise we have to stat, because maybe c=true
	    // if we know it exists, but not what it is.
	  }
	  var stat = this.statCache[abs];
	  if (!stat) {
	    var lstat;
	    try {
	      lstat = this.fs.lstatSync(abs);
	    } catch (er) {
	      if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
	        this.statCache[abs] = false;
	        return false
	      }
	    }

	    if (lstat && lstat.isSymbolicLink()) {
	      try {
	        stat = this.fs.statSync(abs);
	      } catch (er) {
	        stat = lstat;
	      }
	    } else {
	      stat = lstat;
	    }
	  }

	  this.statCache[abs] = stat;

	  var c = true;
	  if (stat)
	    c = stat.isDirectory() ? 'DIR' : 'FILE';

	  this.cache[abs] = this.cache[abs] || c;

	  if (needDir && c === 'FILE')
	    return false

	  return c
	};

	GlobSync.prototype._mark = function (p) {
	  return common.mark(this, p)
	};

	GlobSync.prototype._makeAbs = function (f) {
	  return common.makeAbs(this, f)
	};
	return sync;
}

var wrappy_1;
var hasRequiredWrappy;

function requireWrappy () {
	if (hasRequiredWrappy) return wrappy_1;
	hasRequiredWrappy = 1;
	// Returns a wrapper function that returns a wrapped callback
	// The wrapper function should do some stuff, and return a
	// presumably different callback function.
	// This makes sure that own properties are retained, so that
	// decorations and such are not lost along the way.
	wrappy_1 = wrappy;
	function wrappy (fn, cb) {
	  if (fn && cb) return wrappy(fn)(cb)

	  if (typeof fn !== 'function')
	    throw new TypeError('need wrapper function')

	  Object.keys(fn).forEach(function (k) {
	    wrapper[k] = fn[k];
	  });

	  return wrapper

	  function wrapper() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    var ret = fn.apply(this, args);
	    var cb = args[args.length-1];
	    if (typeof ret === 'function' && ret !== cb) {
	      Object.keys(cb).forEach(function (k) {
	        ret[k] = cb[k];
	      });
	    }
	    return ret
	  }
	}
	return wrappy_1;
}

var once = {exports: {}};

var hasRequiredOnce;

function requireOnce () {
	if (hasRequiredOnce) return once.exports;
	hasRequiredOnce = 1;
	var wrappy = requireWrappy();
	once.exports = wrappy(once$1);
	once.exports.strict = wrappy(onceStrict);

	once$1.proto = once$1(function () {
	  Object.defineProperty(Function.prototype, 'once', {
	    value: function () {
	      return once$1(this)
	    },
	    configurable: true
	  });

	  Object.defineProperty(Function.prototype, 'onceStrict', {
	    value: function () {
	      return onceStrict(this)
	    },
	    configurable: true
	  });
	});

	function once$1 (fn) {
	  var f = function () {
	    if (f.called) return f.value
	    f.called = true;
	    return f.value = fn.apply(this, arguments)
	  };
	  f.called = false;
	  return f
	}

	function onceStrict (fn) {
	  var f = function () {
	    if (f.called)
	      throw new Error(f.onceError)
	    f.called = true;
	    return f.value = fn.apply(this, arguments)
	  };
	  var name = fn.name || 'Function wrapped with `once`';
	  f.onceError = name + " shouldn't be called more than once";
	  f.called = false;
	  return f
	}
	return once.exports;
}

var inflight_1;
var hasRequiredInflight;

function requireInflight () {
	if (hasRequiredInflight) return inflight_1;
	hasRequiredInflight = 1;
	var wrappy = requireWrappy();
	var reqs = Object.create(null);
	var once = requireOnce();

	inflight_1 = wrappy(inflight);

	function inflight (key, cb) {
	  if (reqs[key]) {
	    reqs[key].push(cb);
	    return null
	  } else {
	    reqs[key] = [cb];
	    return makeres(key)
	  }
	}

	function makeres (key) {
	  return once(function RES () {
	    var cbs = reqs[key];
	    var len = cbs.length;
	    var args = slice(arguments);

	    // XXX It's somewhat ambiguous whether a new callback added in this
	    // pass should be queued for later execution if something in the
	    // list of callbacks throws, or if it should just be discarded.
	    // However, it's such an edge case that it hardly matters, and either
	    // choice is likely as surprising as the other.
	    // As it happens, we do go ahead and schedule it for later execution.
	    try {
	      for (var i = 0; i < len; i++) {
	        cbs[i].apply(null, args);
	      }
	    } finally {
	      if (cbs.length > len) {
	        // added more in the interim.
	        // de-zalgo, just in case, but don't call again.
	        cbs.splice(0, len);
	        process.nextTick(function () {
	          RES.apply(null, args);
	        });
	      } else {
	        delete reqs[key];
	      }
	    }
	  })
	}

	function slice (args) {
	  var length = args.length;
	  var array = [];

	  for (var i = 0; i < length; i++) array[i] = args[i];
	  return array
	}
	return inflight_1;
}

var glob_1;
var hasRequiredGlob;

function requireGlob () {
	if (hasRequiredGlob) return glob_1;
	hasRequiredGlob = 1;
	// Approach:
	//
	// 1. Get the minimatch set
	// 2. For each pattern in the set, PROCESS(pattern, false)
	// 3. Store matches per-set, then uniq them
	//
	// PROCESS(pattern, inGlobStar)
	// Get the first [n] items from pattern that are all strings
	// Join these together.  This is PREFIX.
	//   If there is no more remaining, then stat(PREFIX) and
	//   add to matches if it succeeds.  END.
	//
	// If inGlobStar and PREFIX is symlink and points to dir
	//   set ENTRIES = []
	// else readdir(PREFIX) as ENTRIES
	//   If fail, END
	//
	// with ENTRIES
	//   If pattern[n] is GLOBSTAR
	//     // handle the case where the globstar match is empty
	//     // by pruning it out, and testing the resulting pattern
	//     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
	//     // handle other cases.
	//     for ENTRY in ENTRIES (not dotfiles)
	//       // attach globstar + tail onto the entry
	//       // Mark that this entry is a globstar match
	//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
	//
	//   else // not globstar
	//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
	//       Test ENTRY against pattern[n]
	//       If fails, continue
	//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
	//
	// Caveat:
	//   Cache all stats and readdirs results to minimize syscall.  Since all
	//   we ever care about is existence and directory-ness, we can just keep
	//   `true` for files, and [children,...] for directories, or `false` for
	//   things that don't exist.

	glob_1 = glob;

	var rp = requireFs_realpath();
	var minimatch = requireMinimatch();
	minimatch.Minimatch;
	var inherits = requireInherits();
	var EE = require$$2__default$1["default"].EventEmitter;
	var path = require$$1__default["default"];
	var assert = require$$5__default["default"];
	var isAbsolute = requirePathIsAbsolute();
	var globSync = requireSync();
	var common = requireCommon();
	var setopts = common.setopts;
	var ownProp = common.ownProp;
	var inflight = requireInflight();
	var childrenIgnored = common.childrenIgnored;
	var isIgnored = common.isIgnored;

	var once = requireOnce();

	function glob (pattern, options, cb) {
	  if (typeof options === 'function') cb = options, options = {};
	  if (!options) options = {};

	  if (options.sync) {
	    if (cb)
	      throw new TypeError('callback provided to sync glob')
	    return globSync(pattern, options)
	  }

	  return new Glob(pattern, options, cb)
	}

	glob.sync = globSync;
	var GlobSync = glob.GlobSync = globSync.GlobSync;

	// old api surface
	glob.glob = glob;

	function extend (origin, add) {
	  if (add === null || typeof add !== 'object') {
	    return origin
	  }

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin
	}

	glob.hasMagic = function (pattern, options_) {
	  var options = extend({}, options_);
	  options.noprocess = true;

	  var g = new Glob(pattern, options);
	  var set = g.minimatch.set;

	  if (!pattern)
	    return false

	  if (set.length > 1)
	    return true

	  for (var j = 0; j < set[0].length; j++) {
	    if (typeof set[0][j] !== 'string')
	      return true
	  }

	  return false
	};

	glob.Glob = Glob;
	inherits(Glob, EE);
	function Glob (pattern, options, cb) {
	  if (typeof options === 'function') {
	    cb = options;
	    options = null;
	  }

	  if (options && options.sync) {
	    if (cb)
	      throw new TypeError('callback provided to sync glob')
	    return new GlobSync(pattern, options)
	  }

	  if (!(this instanceof Glob))
	    return new Glob(pattern, options, cb)

	  setopts(this, pattern, options);
	  this._didRealPath = false;

	  // process each pattern in the minimatch set
	  var n = this.minimatch.set.length;

	  // The matches are stored as {<filename>: true,...} so that
	  // duplicates are automagically pruned.
	  // Later, we do an Object.keys() on these.
	  // Keep them as a list so we can fill in when nonull is set.
	  this.matches = new Array(n);

	  if (typeof cb === 'function') {
	    cb = once(cb);
	    this.on('error', cb);
	    this.on('end', function (matches) {
	      cb(null, matches);
	    });
	  }

	  var self = this;
	  this._processing = 0;

	  this._emitQueue = [];
	  this._processQueue = [];
	  this.paused = false;

	  if (this.noprocess)
	    return this

	  if (n === 0)
	    return done()

	  var sync = true;
	  for (var i = 0; i < n; i ++) {
	    this._process(this.minimatch.set[i], i, false, done);
	  }
	  sync = false;

	  function done () {
	    --self._processing;
	    if (self._processing <= 0) {
	      if (sync) {
	        process.nextTick(function () {
	          self._finish();
	        });
	      } else {
	        self._finish();
	      }
	    }
	  }
	}

	Glob.prototype._finish = function () {
	  assert(this instanceof Glob);
	  if (this.aborted)
	    return

	  if (this.realpath && !this._didRealpath)
	    return this._realpath()

	  common.finish(this);
	  this.emit('end', this.found);
	};

	Glob.prototype._realpath = function () {
	  if (this._didRealpath)
	    return

	  this._didRealpath = true;

	  var n = this.matches.length;
	  if (n === 0)
	    return this._finish()

	  var self = this;
	  for (var i = 0; i < this.matches.length; i++)
	    this._realpathSet(i, next);

	  function next () {
	    if (--n === 0)
	      self._finish();
	  }
	};

	Glob.prototype._realpathSet = function (index, cb) {
	  var matchset = this.matches[index];
	  if (!matchset)
	    return cb()

	  var found = Object.keys(matchset);
	  var self = this;
	  var n = found.length;

	  if (n === 0)
	    return cb()

	  var set = this.matches[index] = Object.create(null);
	  found.forEach(function (p, i) {
	    // If there's a problem with the stat, then it means that
	    // one or more of the links in the realpath couldn't be
	    // resolved.  just return the abs value in that case.
	    p = self._makeAbs(p);
	    rp.realpath(p, self.realpathCache, function (er, real) {
	      if (!er)
	        set[real] = true;
	      else if (er.syscall === 'stat')
	        set[p] = true;
	      else
	        self.emit('error', er); // srsly wtf right here

	      if (--n === 0) {
	        self.matches[index] = set;
	        cb();
	      }
	    });
	  });
	};

	Glob.prototype._mark = function (p) {
	  return common.mark(this, p)
	};

	Glob.prototype._makeAbs = function (f) {
	  return common.makeAbs(this, f)
	};

	Glob.prototype.abort = function () {
	  this.aborted = true;
	  this.emit('abort');
	};

	Glob.prototype.pause = function () {
	  if (!this.paused) {
	    this.paused = true;
	    this.emit('pause');
	  }
	};

	Glob.prototype.resume = function () {
	  if (this.paused) {
	    this.emit('resume');
	    this.paused = false;
	    if (this._emitQueue.length) {
	      var eq = this._emitQueue.slice(0);
	      this._emitQueue.length = 0;
	      for (var i = 0; i < eq.length; i ++) {
	        var e = eq[i];
	        this._emitMatch(e[0], e[1]);
	      }
	    }
	    if (this._processQueue.length) {
	      var pq = this._processQueue.slice(0);
	      this._processQueue.length = 0;
	      for (var i = 0; i < pq.length; i ++) {
	        var p = pq[i];
	        this._processing--;
	        this._process(p[0], p[1], p[2], p[3]);
	      }
	    }
	  }
	};

	Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
	  assert(this instanceof Glob);
	  assert(typeof cb === 'function');

	  if (this.aborted)
	    return

	  this._processing++;
	  if (this.paused) {
	    this._processQueue.push([pattern, index, inGlobStar, cb]);
	    return
	  }

	  //console.error('PROCESS %d', this._processing, pattern)

	  // Get the first [n] parts of pattern that are all strings.
	  var n = 0;
	  while (typeof pattern[n] === 'string') {
	    n ++;
	  }
	  // now n is the index of the first one that is *not* a string.

	  // see if there's anything else
	  var prefix;
	  switch (n) {
	    // if not, then this is rather simple
	    case pattern.length:
	      this._processSimple(pattern.join('/'), index, cb);
	      return

	    case 0:
	      // pattern *starts* with some non-trivial item.
	      // going to readdir(cwd), but not include the prefix in matches.
	      prefix = null;
	      break

	    default:
	      // pattern has some string bits in the front.
	      // whatever it starts with, whether that's 'absolute' like /foo/bar,
	      // or 'relative' like '../baz'
	      prefix = pattern.slice(0, n).join('/');
	      break
	  }

	  var remain = pattern.slice(n);

	  // get the list of entries.
	  var read;
	  if (prefix === null)
	    read = '.';
	  else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
	    if (!prefix || !isAbsolute(prefix))
	      prefix = '/' + prefix;
	    read = prefix;
	  } else
	    read = prefix;

	  var abs = this._makeAbs(read);

	  //if ignored, skip _processing
	  if (childrenIgnored(this, read))
	    return cb()

	  var isGlobStar = remain[0] === minimatch.GLOBSTAR;
	  if (isGlobStar)
	    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb);
	  else
	    this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb);
	};

	Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
	  var self = this;
	  this._readdir(abs, inGlobStar, function (er, entries) {
	    return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
	  });
	};

	Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {

	  // if the abs isn't a dir, then nothing can match!
	  if (!entries)
	    return cb()

	  // It will only match dot entries if it starts with a dot, or if
	  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
	  var pn = remain[0];
	  var negate = !!this.minimatch.negate;
	  var rawGlob = pn._glob;
	  var dotOk = this.dot || rawGlob.charAt(0) === '.';

	  var matchedEntries = [];
	  for (var i = 0; i < entries.length; i++) {
	    var e = entries[i];
	    if (e.charAt(0) !== '.' || dotOk) {
	      var m;
	      if (negate && !prefix) {
	        m = !e.match(pn);
	      } else {
	        m = e.match(pn);
	      }
	      if (m)
	        matchedEntries.push(e);
	    }
	  }

	  //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)

	  var len = matchedEntries.length;
	  // If there are no matched entries, then nothing matches.
	  if (len === 0)
	    return cb()

	  // if this is the last remaining pattern bit, then no need for
	  // an additional stat *unless* the user has specified mark or
	  // stat explicitly.  We know they exist, since readdir returned
	  // them.

	  if (remain.length === 1 && !this.mark && !this.stat) {
	    if (!this.matches[index])
	      this.matches[index] = Object.create(null);

	    for (var i = 0; i < len; i ++) {
	      var e = matchedEntries[i];
	      if (prefix) {
	        if (prefix !== '/')
	          e = prefix + '/' + e;
	        else
	          e = prefix + e;
	      }

	      if (e.charAt(0) === '/' && !this.nomount) {
	        e = path.join(this.root, e);
	      }
	      this._emitMatch(index, e);
	    }
	    // This was the last one, and no stats were needed
	    return cb()
	  }

	  // now test all matched entries as stand-ins for that part
	  // of the pattern.
	  remain.shift();
	  for (var i = 0; i < len; i ++) {
	    var e = matchedEntries[i];
	    if (prefix) {
	      if (prefix !== '/')
	        e = prefix + '/' + e;
	      else
	        e = prefix + e;
	    }
	    this._process([e].concat(remain), index, inGlobStar, cb);
	  }
	  cb();
	};

	Glob.prototype._emitMatch = function (index, e) {
	  if (this.aborted)
	    return

	  if (isIgnored(this, e))
	    return

	  if (this.paused) {
	    this._emitQueue.push([index, e]);
	    return
	  }

	  var abs = isAbsolute(e) ? e : this._makeAbs(e);

	  if (this.mark)
	    e = this._mark(e);

	  if (this.absolute)
	    e = abs;

	  if (this.matches[index][e])
	    return

	  if (this.nodir) {
	    var c = this.cache[abs];
	    if (c === 'DIR' || Array.isArray(c))
	      return
	  }

	  this.matches[index][e] = true;

	  var st = this.statCache[abs];
	  if (st)
	    this.emit('stat', e, st);

	  this.emit('match', e);
	};

	Glob.prototype._readdirInGlobStar = function (abs, cb) {
	  if (this.aborted)
	    return

	  // follow all symlinked directories forever
	  // just proceed as if this is a non-globstar situation
	  if (this.follow)
	    return this._readdir(abs, false, cb)

	  var lstatkey = 'lstat\0' + abs;
	  var self = this;
	  var lstatcb = inflight(lstatkey, lstatcb_);

	  if (lstatcb)
	    self.fs.lstat(abs, lstatcb);

	  function lstatcb_ (er, lstat) {
	    if (er && er.code === 'ENOENT')
	      return cb()

	    var isSym = lstat && lstat.isSymbolicLink();
	    self.symlinks[abs] = isSym;

	    // If it's not a symlink or a dir, then it's definitely a regular file.
	    // don't bother doing a readdir in that case.
	    if (!isSym && lstat && !lstat.isDirectory()) {
	      self.cache[abs] = 'FILE';
	      cb();
	    } else
	      self._readdir(abs, false, cb);
	  }
	};

	Glob.prototype._readdir = function (abs, inGlobStar, cb) {
	  if (this.aborted)
	    return

	  cb = inflight('readdir\0'+abs+'\0'+inGlobStar, cb);
	  if (!cb)
	    return

	  //console.error('RD %j %j', +inGlobStar, abs)
	  if (inGlobStar && !ownProp(this.symlinks, abs))
	    return this._readdirInGlobStar(abs, cb)

	  if (ownProp(this.cache, abs)) {
	    var c = this.cache[abs];
	    if (!c || c === 'FILE')
	      return cb()

	    if (Array.isArray(c))
	      return cb(null, c)
	  }

	  var self = this;
	  self.fs.readdir(abs, readdirCb(this, abs, cb));
	};

	function readdirCb (self, abs, cb) {
	  return function (er, entries) {
	    if (er)
	      self._readdirError(abs, er, cb);
	    else
	      self._readdirEntries(abs, entries, cb);
	  }
	}

	Glob.prototype._readdirEntries = function (abs, entries, cb) {
	  if (this.aborted)
	    return

	  // if we haven't asked to stat everything, then just
	  // assume that everything in there exists, so we can avoid
	  // having to stat it a second time.
	  if (!this.mark && !this.stat) {
	    for (var i = 0; i < entries.length; i ++) {
	      var e = entries[i];
	      if (abs === '/')
	        e = abs + e;
	      else
	        e = abs + '/' + e;
	      this.cache[e] = true;
	    }
	  }

	  this.cache[abs] = entries;
	  return cb(null, entries)
	};

	Glob.prototype._readdirError = function (f, er, cb) {
	  if (this.aborted)
	    return

	  // handle errors, and cache the information
	  switch (er.code) {
	    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
	    case 'ENOTDIR': // totally normal. means it *does* exist.
	      var abs = this._makeAbs(f);
	      this.cache[abs] = 'FILE';
	      if (abs === this.cwdAbs) {
	        var error = new Error(er.code + ' invalid cwd ' + this.cwd);
	        error.path = this.cwd;
	        error.code = er.code;
	        this.emit('error', error);
	        this.abort();
	      }
	      break

	    case 'ENOENT': // not terribly unusual
	    case 'ELOOP':
	    case 'ENAMETOOLONG':
	    case 'UNKNOWN':
	      this.cache[this._makeAbs(f)] = false;
	      break

	    default: // some unusual error.  Treat as failure.
	      this.cache[this._makeAbs(f)] = false;
	      if (this.strict) {
	        this.emit('error', er);
	        // If the error is handled, then we abort
	        // if not, we threw out of here
	        this.abort();
	      }
	      if (!this.silent)
	        console.error('glob error', er);
	      break
	  }

	  return cb()
	};

	Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
	  var self = this;
	  this._readdir(abs, inGlobStar, function (er, entries) {
	    self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
	  });
	};


	Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
	  //console.error('pgs2', prefix, remain[0], entries)

	  // no entries means not a dir, so it can never have matches
	  // foo.txt/** doesn't match foo.txt
	  if (!entries)
	    return cb()

	  // test without the globstar, and with every child both below
	  // and replacing the globstar.
	  var remainWithoutGlobStar = remain.slice(1);
	  var gspref = prefix ? [ prefix ] : [];
	  var noGlobStar = gspref.concat(remainWithoutGlobStar);

	  // the noGlobStar pattern exits the inGlobStar state
	  this._process(noGlobStar, index, false, cb);

	  var isSym = this.symlinks[abs];
	  var len = entries.length;

	  // If it's a symlink, and we're in a globstar, then stop
	  if (isSym && inGlobStar)
	    return cb()

	  for (var i = 0; i < len; i++) {
	    var e = entries[i];
	    if (e.charAt(0) === '.' && !this.dot)
	      continue

	    // these two cases enter the inGlobStar state
	    var instead = gspref.concat(entries[i], remainWithoutGlobStar);
	    this._process(instead, index, true, cb);

	    var below = gspref.concat(entries[i], remain);
	    this._process(below, index, true, cb);
	  }

	  cb();
	};

	Glob.prototype._processSimple = function (prefix, index, cb) {
	  // XXX review this.  Shouldn't it be doing the mounting etc
	  // before doing stat?  kinda weird?
	  var self = this;
	  this._stat(prefix, function (er, exists) {
	    self._processSimple2(prefix, index, er, exists, cb);
	  });
	};
	Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {

	  //console.error('ps2', prefix, exists)

	  if (!this.matches[index])
	    this.matches[index] = Object.create(null);

	  // If it doesn't exist, then just mark the lack of results
	  if (!exists)
	    return cb()

	  if (prefix && isAbsolute(prefix) && !this.nomount) {
	    var trail = /[\/\\]$/.test(prefix);
	    if (prefix.charAt(0) === '/') {
	      prefix = path.join(this.root, prefix);
	    } else {
	      prefix = path.resolve(this.root, prefix);
	      if (trail)
	        prefix += '/';
	    }
	  }

	  if (process.platform === 'win32')
	    prefix = prefix.replace(/\\/g, '/');

	  // Mark this as a match
	  this._emitMatch(index, prefix);
	  cb();
	};

	// Returns either 'DIR', 'FILE', or false
	Glob.prototype._stat = function (f, cb) {
	  var abs = this._makeAbs(f);
	  var needDir = f.slice(-1) === '/';

	  if (f.length > this.maxLength)
	    return cb()

	  if (!this.stat && ownProp(this.cache, abs)) {
	    var c = this.cache[abs];

	    if (Array.isArray(c))
	      c = 'DIR';

	    // It exists, but maybe not how we need it
	    if (!needDir || c === 'DIR')
	      return cb(null, c)

	    if (needDir && c === 'FILE')
	      return cb()

	    // otherwise we have to stat, because maybe c=true
	    // if we know it exists, but not what it is.
	  }
	  var stat = this.statCache[abs];
	  if (stat !== undefined) {
	    if (stat === false)
	      return cb(null, stat)
	    else {
	      var type = stat.isDirectory() ? 'DIR' : 'FILE';
	      if (needDir && type === 'FILE')
	        return cb()
	      else
	        return cb(null, type, stat)
	    }
	  }

	  var self = this;
	  var statcb = inflight('stat\0' + abs, lstatcb_);
	  if (statcb)
	    self.fs.lstat(abs, statcb);

	  function lstatcb_ (er, lstat) {
	    if (lstat && lstat.isSymbolicLink()) {
	      // If it's a symlink, then treat it as the target, unless
	      // the target does not exist, then treat it as a file.
	      return self.fs.stat(abs, function (er, stat) {
	        if (er)
	          self._stat2(f, abs, null, lstat, cb);
	        else
	          self._stat2(f, abs, er, stat, cb);
	      })
	    } else {
	      self._stat2(f, abs, er, lstat, cb);
	    }
	  }
	};

	Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
	  if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
	    this.statCache[abs] = false;
	    return cb()
	  }

	  var needDir = f.slice(-1) === '/';
	  this.statCache[abs] = stat;

	  if (abs.slice(-1) === '/' && stat && !stat.isDirectory())
	    return cb(null, false, stat)

	  var c = true;
	  if (stat)
	    c = stat.isDirectory() ? 'DIR' : 'FILE';
	  this.cache[abs] = this.cache[abs] || c;

	  if (needDir && c === 'FILE')
	    return cb()

	  return cb(null, c, stat)
	};
	return glob_1;
}

var rimraf_1;
var hasRequiredRimraf;

function requireRimraf () {
	if (hasRequiredRimraf) return rimraf_1;
	hasRequiredRimraf = 1;
	const assert = require$$5__default["default"];
	const path = require$$1__default["default"];
	const fs = require$$0__default["default"];
	let glob = undefined;
	try {
	  glob = requireGlob();
	} catch (_err) {
	  // treat glob as optional.
	}

	const defaultGlobOpts = {
	  nosort: true,
	  silent: true
	};

	// for EMFILE handling
	let timeout = 0;

	const isWindows = (process.platform === "win32");

	const defaults = options => {
	  const methods = [
	    'unlink',
	    'chmod',
	    'stat',
	    'lstat',
	    'rmdir',
	    'readdir'
	  ];
	  methods.forEach(m => {
	    options[m] = options[m] || fs[m];
	    m = m + 'Sync';
	    options[m] = options[m] || fs[m];
	  });

	  options.maxBusyTries = options.maxBusyTries || 3;
	  options.emfileWait = options.emfileWait || 1000;
	  if (options.glob === false) {
	    options.disableGlob = true;
	  }
	  if (options.disableGlob !== true && glob === undefined) {
	    throw Error('glob dependency not found, set `options.disableGlob = true` if intentional')
	  }
	  options.disableGlob = options.disableGlob || false;
	  options.glob = options.glob || defaultGlobOpts;
	};

	const rimraf = (p, options, cb) => {
	  if (typeof options === 'function') {
	    cb = options;
	    options = {};
	  }

	  assert(p, 'rimraf: missing path');
	  assert.equal(typeof p, 'string', 'rimraf: path should be a string');
	  assert.equal(typeof cb, 'function', 'rimraf: callback function required');
	  assert(options, 'rimraf: invalid options argument provided');
	  assert.equal(typeof options, 'object', 'rimraf: options should be object');

	  defaults(options);

	  let busyTries = 0;
	  let errState = null;
	  let n = 0;

	  const next = (er) => {
	    errState = errState || er;
	    if (--n === 0)
	      cb(errState);
	  };

	  const afterGlob = (er, results) => {
	    if (er)
	      return cb(er)

	    n = results.length;
	    if (n === 0)
	      return cb()

	    results.forEach(p => {
	      const CB = (er) => {
	        if (er) {
	          if ((er.code === "EBUSY" || er.code === "ENOTEMPTY" || er.code === "EPERM") &&
	              busyTries < options.maxBusyTries) {
	            busyTries ++;
	            // try again, with the same exact callback as this one.
	            return setTimeout(() => rimraf_(p, options, CB), busyTries * 100)
	          }

	          // this one won't happen if graceful-fs is used.
	          if (er.code === "EMFILE" && timeout < options.emfileWait) {
	            return setTimeout(() => rimraf_(p, options, CB), timeout ++)
	          }

	          // already gone
	          if (er.code === "ENOENT") er = null;
	        }

	        timeout = 0;
	        next(er);
	      };
	      rimraf_(p, options, CB);
	    });
	  };

	  if (options.disableGlob || !glob.hasMagic(p))
	    return afterGlob(null, [p])

	  options.lstat(p, (er, stat) => {
	    if (!er)
	      return afterGlob(null, [p])

	    glob(p, options.glob, afterGlob);
	  });

	};

	// Two possible strategies.
	// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
	// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
	//
	// Both result in an extra syscall when you guess wrong.  However, there
	// are likely far more normal files in the world than directories.  This
	// is based on the assumption that a the average number of files per
	// directory is >= 1.
	//
	// If anyone ever complains about this, then I guess the strategy could
	// be made configurable somehow.  But until then, YAGNI.
	const rimraf_ = (p, options, cb) => {
	  assert(p);
	  assert(options);
	  assert(typeof cb === 'function');

	  // sunos lets the root user unlink directories, which is... weird.
	  // so we have to lstat here and make sure it's not a dir.
	  options.lstat(p, (er, st) => {
	    if (er && er.code === "ENOENT")
	      return cb(null)

	    // Windows can EPERM on stat.  Life is suffering.
	    if (er && er.code === "EPERM" && isWindows)
	      fixWinEPERM(p, options, er, cb);

	    if (st && st.isDirectory())
	      return rmdir(p, options, er, cb)

	    options.unlink(p, er => {
	      if (er) {
	        if (er.code === "ENOENT")
	          return cb(null)
	        if (er.code === "EPERM")
	          return (isWindows)
	            ? fixWinEPERM(p, options, er, cb)
	            : rmdir(p, options, er, cb)
	        if (er.code === "EISDIR")
	          return rmdir(p, options, er, cb)
	      }
	      return cb(er)
	    });
	  });
	};

	const fixWinEPERM = (p, options, er, cb) => {
	  assert(p);
	  assert(options);
	  assert(typeof cb === 'function');

	  options.chmod(p, 0o666, er2 => {
	    if (er2)
	      cb(er2.code === "ENOENT" ? null : er);
	    else
	      options.stat(p, (er3, stats) => {
	        if (er3)
	          cb(er3.code === "ENOENT" ? null : er);
	        else if (stats.isDirectory())
	          rmdir(p, options, er, cb);
	        else
	          options.unlink(p, cb);
	      });
	  });
	};

	const fixWinEPERMSync = (p, options, er) => {
	  assert(p);
	  assert(options);

	  try {
	    options.chmodSync(p, 0o666);
	  } catch (er2) {
	    if (er2.code === "ENOENT")
	      return
	    else
	      throw er
	  }

	  let stats;
	  try {
	    stats = options.statSync(p);
	  } catch (er3) {
	    if (er3.code === "ENOENT")
	      return
	    else
	      throw er
	  }

	  if (stats.isDirectory())
	    rmdirSync(p, options, er);
	  else
	    options.unlinkSync(p);
	};

	const rmdir = (p, options, originalEr, cb) => {
	  assert(p);
	  assert(options);
	  assert(typeof cb === 'function');

	  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
	  // if we guessed wrong, and it's not a directory, then
	  // raise the original error.
	  options.rmdir(p, er => {
	    if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM"))
	      rmkids(p, options, cb);
	    else if (er && er.code === "ENOTDIR")
	      cb(originalEr);
	    else
	      cb(er);
	  });
	};

	const rmkids = (p, options, cb) => {
	  assert(p);
	  assert(options);
	  assert(typeof cb === 'function');

	  options.readdir(p, (er, files) => {
	    if (er)
	      return cb(er)
	    let n = files.length;
	    if (n === 0)
	      return options.rmdir(p, cb)
	    let errState;
	    files.forEach(f => {
	      rimraf(path.join(p, f), options, er => {
	        if (errState)
	          return
	        if (er)
	          return cb(errState = er)
	        if (--n === 0)
	          options.rmdir(p, cb);
	      });
	    });
	  });
	};

	// this looks simpler, and is strictly *faster*, but will
	// tie up the JavaScript thread and fail on excessively
	// deep directory trees.
	const rimrafSync = (p, options) => {
	  options = options || {};
	  defaults(options);

	  assert(p, 'rimraf: missing path');
	  assert.equal(typeof p, 'string', 'rimraf: path should be a string');
	  assert(options, 'rimraf: missing options');
	  assert.equal(typeof options, 'object', 'rimraf: options should be object');

	  let results;

	  if (options.disableGlob || !glob.hasMagic(p)) {
	    results = [p];
	  } else {
	    try {
	      options.lstatSync(p);
	      results = [p];
	    } catch (er) {
	      results = glob.sync(p, options.glob);
	    }
	  }

	  if (!results.length)
	    return

	  for (let i = 0; i < results.length; i++) {
	    const p = results[i];

	    let st;
	    try {
	      st = options.lstatSync(p);
	    } catch (er) {
	      if (er.code === "ENOENT")
	        return

	      // Windows can EPERM on stat.  Life is suffering.
	      if (er.code === "EPERM" && isWindows)
	        fixWinEPERMSync(p, options, er);
	    }

	    try {
	      // sunos lets the root user unlink directories, which is... weird.
	      if (st && st.isDirectory())
	        rmdirSync(p, options, null);
	      else
	        options.unlinkSync(p);
	    } catch (er) {
	      if (er.code === "ENOENT")
	        return
	      if (er.code === "EPERM")
	        return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
	      if (er.code !== "EISDIR")
	        throw er

	      rmdirSync(p, options, er);
	    }
	  }
	};

	const rmdirSync = (p, options, originalEr) => {
	  assert(p);
	  assert(options);

	  try {
	    options.rmdirSync(p);
	  } catch (er) {
	    if (er.code === "ENOENT")
	      return
	    if (er.code === "ENOTDIR")
	      throw originalEr
	    if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
	      rmkidsSync(p, options);
	  }
	};

	const rmkidsSync = (p, options) => {
	  assert(p);
	  assert(options);
	  options.readdirSync(p).forEach(f => rimrafSync(path.join(p, f), options));

	  // We only end up here once we got ENOTEMPTY at least once, and
	  // at this point, we are guaranteed to have removed all the kids.
	  // So, we know that it won't be ENOENT or ENOTDIR or anything else.
	  // try really hard to delete stuff on windows, because it has a
	  // PROFOUNDLY annoying habit of not closing handles promptly when
	  // files are deleted, resulting in spurious ENOTEMPTY errors.
	  const retries = isWindows ? 100 : 1;
	  let i = 0;
	  do {
	    let threw = true;
	    try {
	      const ret = options.rmdirSync(p, options);
	      threw = false;
	      return ret
	    } finally {
	      if (++i < retries && threw)
	        continue
	    }
	  } while (true)
	};

	rimraf_1 = rimraf;
	rimraf.sync = rimrafSync;
	return rimraf_1;
}

var linkGently_1;
var hasRequiredLinkGently;

function requireLinkGently () {
	if (hasRequiredLinkGently) return linkGently_1;
	hasRequiredLinkGently = 1;
	// if the thing isn't there, skip it
	// if there's a non-symlink there already, eexist
	// if there's a symlink already, pointing somewhere else, eexist
	// if there's a symlink already, pointing into our pkg, remove it first
	// then create the symlink

	const { promisify } = require$$0__default$1["default"];
	const { resolve, dirname } = require$$1__default["default"];
	const mkdirp = requireMkdirpInferOwner();
	const fs = require$$0__default["default"];
	const symlink = promisify(fs.symlink);
	const readlink = promisify(fs.readlink);
	const lstat = promisify(fs.lstat);
	const throwNonEnoent = er => {
	  if (er.code !== 'ENOENT') {
	    throw er
	  }
	};

	// even in --force mode, we never create a link over a link we've
	// already created.  you can have multiple packages in a tree trying
	// to contend for the same bin, or the same manpage listed multiple times,
	// which creates a race condition and nondeterminism.
	const seen = new Set();

	// disable glob in our rimraf calls
	const rimraf = promisify(requireRimraf());
	const rm = path => rimraf(path, { glob: false });

	const SKIP = Symbol('skip - missing or already installed');
	const CLOBBER = Symbol('clobber - ours or in forceful mode');

	const linkGently = async ({ path, to, from, absFrom, force }) => {
	  if (seen.has(to)) {
	    return true
	  }
	  seen.add(to);

	  // if the script or manpage isn't there, just ignore it.
	  // this arguably *should* be an install error of some sort,
	  // or at least a warning, but npm has always behaved this
	  // way in the past, so it'd be a breaking change
	  return Promise.all([
	    lstat(absFrom).catch(throwNonEnoent),
	    lstat(to).catch(throwNonEnoent),
	  ]).then(([stFrom, stTo]) => {
	    // not present in package, skip it
	    if (!stFrom) {
	      return SKIP
	    }

	    // exists! maybe clobber if we can
	    if (stTo) {
	      if (!stTo.isSymbolicLink()) {
	        return force && rm(to).then(() => CLOBBER)
	      }

	      return readlink(to).then(target => {
	        if (target === from) {
	          return SKIP
	        } // skip it, already set up like we want it.

	        target = resolve(dirname(to), target);
	        if (target.indexOf(path) === 0 || force) {
	          return rm(to).then(() => CLOBBER)
	        }
	      })
	    } else {
	      // doesn't exist, dir might not either
	      return mkdirp(dirname(to))
	    }
	  })
	    .then(skipOrClobber => {
	      if (skipOrClobber === SKIP) {
	        return false
	      }
	      return symlink(from, to, 'file').catch(er => {
	        if (skipOrClobber === CLOBBER || force) {
	          return rm(to).then(() => symlink(from, to, 'file'))
	        }
	        throw er
	      }).then(() => true)
	    })
	};

	const resetSeen = () => {
	  for (const p of seen) {
	    seen.delete(p);
	  }
	};

	linkGently_1 = Object.assign(linkGently, { resetSeen });
	return linkGently_1;
}

var linkBin_1;
var hasRequiredLinkBin;

function requireLinkBin () {
	if (hasRequiredLinkBin) return linkBin_1;
	hasRequiredLinkBin = 1;
	const linkGently = requireLinkGently();
	const fixBin = requireFixBin();

	// linking bins is simple.  just symlink, and if we linked it, fix the bin up
	const linkBin = ({ path, to, from, absFrom, force }) =>
	  linkGently({ path, to, from, absFrom, force })
	    .then(linked => linked && fixBin(absFrom));

	linkBin_1 = linkBin;
	return linkBin_1;
}

var npmNormalizePackageBin;
var hasRequiredNpmNormalizePackageBin;

function requireNpmNormalizePackageBin () {
	if (hasRequiredNpmNormalizePackageBin) return npmNormalizePackageBin;
	hasRequiredNpmNormalizePackageBin = 1;
	// pass in a manifest with a 'bin' field here, and it'll turn it
	// into a properly santized bin object
	const {join, basename} = require$$1__default["default"];

	const normalize = pkg =>
	  !pkg.bin ? removeBin(pkg)
	  : typeof pkg.bin === 'string' ? normalizeString(pkg)
	  : Array.isArray(pkg.bin) ? normalizeArray(pkg)
	  : typeof pkg.bin === 'object' ? normalizeObject(pkg)
	  : removeBin(pkg);

	const normalizeString = pkg => {
	  if (!pkg.name)
	    return removeBin(pkg)
	  pkg.bin = { [pkg.name]: pkg.bin };
	  return normalizeObject(pkg)
	};

	const normalizeArray = pkg => {
	  pkg.bin = pkg.bin.reduce((acc, k) => {
	    acc[basename(k)] = k;
	    return acc
	  }, {});
	  return normalizeObject(pkg)
	};

	const removeBin = pkg => {
	  delete pkg.bin;
	  return pkg
	};

	const normalizeObject = pkg => {
	  const orig = pkg.bin;
	  const clean = {};
	  let hasBins = false;
	  Object.keys(orig).forEach(binKey => {
	    const base = join('/', basename(binKey.replace(/\\|:/g, '/'))).substr(1);

	    if (typeof orig[binKey] !== 'string' || !base)
	      return

	    const binTarget = join('/', orig[binKey])
	      .replace(/\\/g, '/').substr(1);

	    if (!binTarget)
	      return

	    clean[base] = binTarget;
	    hasBins = true;
	  });

	  if (hasBins)
	    pkg.bin = clean;
	  else
	    delete pkg.bin;

	  return pkg
	};

	npmNormalizePackageBin = normalize;
	return npmNormalizePackageBin;
}

var linkBins_1;
var hasRequiredLinkBins;

function requireLinkBins () {
	if (hasRequiredLinkBins) return linkBins_1;
	hasRequiredLinkBins = 1;
	const isWindows = requireIsWindows();
	const binTarget = requireBinTarget();
	const { dirname, resolve, relative } = require$$1__default["default"];
	const linkBin = isWindows ? requireShimBin() : requireLinkBin();
	const normalize = requireNpmNormalizePackageBin();

	const linkBins = ({ path, pkg, top, force }) => {
	  pkg = normalize(pkg);
	  if (!pkg.bin) {
	    return Promise.resolve([])
	  }
	  const promises = [];
	  const target = binTarget({ path, top });
	  for (const [key, val] of Object.entries(pkg.bin)) {
	    const to = resolve(target, key);
	    const absFrom = resolve(path, val);
	    const from = relative(dirname(to), absFrom);
	    promises.push(linkBin({ path, from, to, absFrom, force }));
	  }
	  return Promise.all(promises)
	};

	linkBins_1 = linkBins;
	return linkBins_1;
}

var manTarget;
var hasRequiredManTarget;

function requireManTarget () {
	if (hasRequiredManTarget) return manTarget;
	hasRequiredManTarget = 1;
	const isWindows = requireIsWindows();
	const getPrefix = requireGetPrefix();
	const { dirname } = require$$1__default["default"];

	manTarget = ({ top, path }) => !top || isWindows ? null
	  : dirname(getPrefix(path)) + '/share/man';
	return manTarget;
}

var linkMans_1;
var hasRequiredLinkMans;

function requireLinkMans () {
	if (hasRequiredLinkMans) return linkMans_1;
	hasRequiredLinkMans = 1;
	const { dirname, relative, join, resolve, basename } = require$$1__default["default"];
	const linkGently = requireLinkGently();
	const manTarget = requireManTarget();

	const linkMans = ({ path, pkg, top, force }) => {
	  const target = manTarget({ path, top });
	  if (!target || !pkg.man || !Array.isArray(pkg.man) || !pkg.man.length) {
	    return Promise.resolve([])
	  }

	  // break any links to c:\\blah or /foo/blah or ../blah
	  // and filter out duplicates
	  const set = [...new Set(pkg.man.map(man =>
	    man ? join('/', man).replace(/\\|:/g, '/').slice(1) : null)
	    .filter(man => typeof man === 'string'))];

	  return Promise.all(set.map(man => {
	    const parseMan = man.match(/(.*\.([0-9]+)(\.gz)?)$/);
	    if (!parseMan) {
	      return Promise.reject(Object.assign(new Error('invalid man entry name\n' +
	        'Man files must end with a number, ' +
	        'and optionally a .gz suffix if they are compressed.'
	      ), {
	        code: 'EBADMAN',
	        path,
	        pkgid: pkg._id,
	        man,
	      }))
	    }

	    const stem = parseMan[1];
	    const sxn = parseMan[2];
	    const base = basename(stem);
	    const absFrom = resolve(path, man);
	    /* istanbul ignore if - that unpossible */
	    if (absFrom.indexOf(path) !== 0) {
	      return Promise.reject(Object.assign(new Error('invalid man entry'), {
	        code: 'EBADMAN',
	        path,
	        pkgid: pkg._id,
	        man,
	      }))
	    }

	    const to = resolve(target, 'man' + sxn, base);
	    const from = relative(dirname(to), absFrom);

	    return linkGently({ from, to, path, absFrom, force })
	  }))
	};

	linkMans_1 = linkMans;
	return linkMans_1;
}

var checkBin_1;
var hasRequiredCheckBin;

function requireCheckBin () {
	if (hasRequiredCheckBin) return checkBin_1;
	hasRequiredCheckBin = 1;
	// check to see if a bin is allowed to be overwritten
	// either rejects or resolves to nothing.  return value not relevant.
	const isWindows = requireIsWindows();
	const binTarget = requireBinTarget();
	const { resolve, dirname } = require$$1__default["default"];
	const readCmdShim = requireLib$2();
	const fs = require$$0__default["default"];
	const { promisify } = require$$0__default$1["default"];
	const readlink = promisify(fs.readlink);

	const checkBin = async ({ bin, path, top, global, force }) => {
	  // always ok to clobber when forced
	  // always ok to clobber local bins, or when forced
	  if (force || !global || !top) {
	    return
	  }

	  // ok, need to make sure, then
	  const target = resolve(binTarget({ path, top }), bin);
	  path = resolve(path);
	  return isWindows ? checkShim({ target, path }) : checkLink({ target, path })
	};

	// only enoent is allowed.  anything else is a problem.
	const handleReadLinkError = async ({ er, target }) =>
	  er.code === 'ENOENT' ? null
	  : failEEXIST({ target });

	const checkLink = async ({ target, path }) => {
	  const current = await readlink(target)
	    .catch(er => handleReadLinkError({ er, target }));

	  if (!current) {
	    return
	  }

	  const resolved = resolve(dirname(target), current);

	  if (resolved.toLowerCase().indexOf(path.toLowerCase()) !== 0) {
	    return failEEXIST({ target })
	  }
	};

	const handleReadCmdShimError = ({ er, target }) =>
	  er.code === 'ENOENT' ? null
	  : failEEXIST({ target });

	const failEEXIST = ({ target }) =>
	  Promise.reject(Object.assign(new Error('EEXIST: file already exists'), {
	    path: target,
	    code: 'EEXIST',
	  }));

	const checkShim = async ({ target, path }) => {
	  const shims = [
	    target,
	    target + '.cmd',
	    target + '.ps1',
	  ];
	  await Promise.all(shims.map(async shim => {
	    const current = await readCmdShim(shim)
	      .catch(er => handleReadCmdShimError({ er, target: shim }));

	    if (!current) {
	      return
	    }

	    const resolved = resolve(dirname(shim), current.replace(/\\/g, '/'));

	    if (resolved.toLowerCase().indexOf(path.toLowerCase()) !== 0) {
	      return failEEXIST({ target: shim })
	    }
	  }));
	};

	checkBin_1 = checkBin;
	return checkBin_1;
}

var checkBins_1;
var hasRequiredCheckBins;

function requireCheckBins () {
	if (hasRequiredCheckBins) return checkBins_1;
	hasRequiredCheckBins = 1;
	const checkBin = requireCheckBin();
	const normalize = requireNpmNormalizePackageBin();
	const checkBins = async ({ pkg, path, top, global, force }) => {
	  // always ok to clobber when forced
	  // always ok to clobber local bins, or when forced
	  if (force || !global || !top) {
	    return
	  }

	  pkg = normalize(pkg);
	  if (!pkg.bin) {
	    return
	  }

	  await Promise.all(Object.keys(pkg.bin)
	    .map(bin => checkBin({ bin, path, top, global, force })));
	};
	checkBins_1 = checkBins;
	return checkBins_1;
}

var getPaths;
var hasRequiredGetPaths;

function requireGetPaths () {
	if (hasRequiredGetPaths) return getPaths;
	hasRequiredGetPaths = 1;
	// get all the paths that are (or might be) installed for a given pkg
	// There's no guarantee that all of these will be installed, but if they
	// are present, then we can assume that they're associated.
	const binTarget = requireBinTarget();
	const manTarget = requireManTarget();
	const { resolve, basename, extname } = require$$1__default["default"];
	const isWindows = requireIsWindows();
	getPaths = ({ path, pkg, global, top }) => {
	  if (top && !global) {
	    return []
	  }

	  const binSet = [];
	  const binTarg = binTarget({ path, top });
	  if (pkg.bin) {
	    for (const bin of Object.keys(pkg.bin)) {
	      const b = resolve(binTarg, bin);
	      binSet.push(b);
	      if (isWindows) {
	        binSet.push(b + '.cmd');
	        binSet.push(b + '.ps1');
	      }
	    }
	  }

	  const manTarg = manTarget({ path, top });
	  const manSet = [];
	  if (manTarg && pkg.man && Array.isArray(pkg.man) && pkg.man.length) {
	    for (const man of pkg.man) {
	      if (!/.\.[0-9]+(\.gz)?$/.test(man)) {
	        return binSet
	      }

	      const section = extname(basename(man, '.gz')).slice(1);
	      const base = basename(man);

	      manSet.push(resolve(manTarg, 'man' + section, base));
	    }
	  }

	  return manSet.length ? [...binSet, ...manSet] : binSet
	};
	return getPaths;
}

var lib;
var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;
	const linkBins = requireLinkBins();
	const linkMans = requireLinkMans();

	const binLinks = opts => {
	  const { path, pkg, force, global, top } = opts;
	  // global top pkgs on windows get bins installed in {prefix}, and no mans
	  //
	  // unix global top pkgs get their bins installed in {prefix}/bin,
	  // and mans in {prefix}/share/man
	  //
	  // non-top pkgs get their bins installed in {prefix}/node_modules/.bin,
	  // and do not install mans
	  //
	  // non-global top pkgs don't have any bins or mans linked.  From here on
	  // out, if it's top, we know that it's global, so no need to pass that
	  // option further down the stack.
	  if (top && !global) {
	    return Promise.resolve()
	  }

	  return Promise.all([
	    // allow clobbering within the local node_modules/.bin folder.
	    // only global bins are protected in this way, or else it is
	    // yet another vector for excessive dependency conflicts.
	    linkBins({ path, pkg, top, force: force || !top }),
	    linkMans({ path, pkg, top, force }),
	  ])
	};

	const shimBin = requireShimBin();
	const linkGently = requireLinkGently();
	const resetSeen = () => {
	  shimBin.resetSeen();
	  linkGently.resetSeen();
	};

	const checkBins = requireCheckBins();
	const getPaths = requireGetPaths();

	lib = Object.assign(binLinks, {
	  checkBins,
	  resetSeen,
	  getPaths,
	});
	return lib;
}

var hasRequiredPostInstall;

function requirePostInstall () {
	if (hasRequiredPostInstall) return postInstall;
	hasRequiredPostInstall = 1;
	Object.defineProperty(postInstall, "__esModule", { value: true });
	const tslib_1 = require$$0;
	const readJson_1 = tslib_1.__importDefault(requireReadJson());
	const path = tslib_1.__importStar(require$$1__default["default"]);
	const os = tslib_1.__importStar(require$$3__default$1["default"]);
	const fs = tslib_1.__importStar(require$$0__default["default"]);
	const isNodeModules_1 = tslib_1.__importDefault(requireIsNodeModules());
	const download_1 = tslib_1.__importStar(requireDownload());
	const bin_links_1 = tslib_1.__importDefault(requireLib());
	async function postInstall$1(pkgDir) {
	    const { packageJson, path: pkgPath } = (0, readJson_1.default)(pkgDir);
	    const pkgRoot = path.dirname(pkgPath);
	    const { "scatter-bin": { downloadUrl, private: _private, bin }, version, name, } = packageJson;
	    // 0. Compute install parameters
	    const inNodeModules = (0, isNodeModules_1.default)(name);
	    const global = !!process.env.npm_config_global;
	    // const devInstall = !global && !inNodeModules;
	    // if (devInstall) {
	    //   throw new Error(
	    //     `${name}:binary-install: development mode installation. Skipping postinstall`
	    //   );
	    // }
	    if (_private && !process.env.GITHUB_TOKEN) {
	        throw new Error(`${name}:binary-install: missing env variable GITHUB_TOKEN, required for private modules`);
	    }
	    const { platform } = process;
	    // nodejs platforms: https://nodejs.org/api/os.html#osplatform
	    // 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.
	    // nodejs arch: https://nodejs.org/api/os.html#osarch
	    // 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', and 'x64'.
	    // CPU: https://nodejs.org/api/os.html#oscpus
	    const _os = platform === "darwin"
	        ? /Apple M1/.test(os.cpus()[0].model)
	            ? "mac"
	            : "mac_x86"
	        : platform === "win32"
	            ? "win"
	            : "nix";
	    // 1. download platform specific binary
	    const tgzUrl = `${downloadUrl}/releases/download/${version}/${name
	        .split("/")
	        .pop()}.${_os}.tar.gz`;
	    await (0, download_1.default)(tgzUrl, pkgRoot, _private);
	    (0, download_1.trace)(`${name}:post-install: downloaded ${tgzUrl}`);
	    // for deno packages, it's possible that we don't need to "install" the binary.
	    // just position it so a javascript function can invoke it.
	    // We can control for this be looking for the "bin" property in scatter-bin config.
	    if (packageJson["scatter-bin"].bin) {
	        // 2. fix package.json:bin to have the new binaries
	        packageJson.bin =
	            platform !== "win32"
	                ? packageJson["scatter-bin"].bin
	                : Object.entries(packageJson["scatter-bin"].bin).reduce((acc, [key, val]) => {
	                    // on windows, binLinks lstats for the bin targets before linking.
	                    // this fails because extensions are not considered.
	                    // Manually add the exe extension before invoking binLinks
	                    if (!path.extname(val) &&
	                        fs.statSync(`${path.dirname(pkgPath)}/${val}.exe`)) {
	                        acc[key] = `${val}.exe`;
	                    }
	                    else {
	                        acc[key] = val;
	                    }
	                    return acc;
	                }, {});
	        fs.writeFileSync(pkgPath, JSON.stringify(packageJson, null, 2), "utf8");
	        // 3. compute link parameters
	        const linkParams = {
	            path: pkgRoot,
	            pkg: packageJson,
	            // true if it's a global install, false for local.  default: false
	            global,
	            // This is what the official example states:
	            // true if it's the top level package being installed, false otherwise
	            // in reality, there are four cases to unpack:
	            // global, top => windows ? `${node-dir}` : `${node-dir}/bin`
	            // !global, !top => should not install (at least, we subvert this by returning early)
	            // global, top => ${node-dir}/node_modules/.bin` - not something we want.
	            // !global, !top => ${pkg_root}/node_modules/.bin
	            // so our choices for { global, top } that are accepctable,
	            // boil down to
	            // # global install
	            //  {
	            //    global: process.env.npm_config.global
	            //    top: true,
	            //  }
	            // # local dependency install
	            //  {
	            //    global: !process.env.npm_config.global
	            //    top: false,
	            //  }
	            //
	            // Which can be simplified to
	            //  {
	            //    global: !process.env.npm_config.global
	            //    top: !process.env.npm_config.global
	            //  }
	            top: global,
	            // true if you'd like to recklessly overwrite files.
	            force: false,
	        };
	        (0, download_1.debug)(JSON.stringify({
	            pkgRoot,
	            global,
	            packageJson,
	            inNodeModules,
	            linkParams,
	            // getPaths: [
	            //   {
	            //     global: true,
	            //     top: false,
	            //     ...getPaths({ ...linkParams, global: true, top: false }),
	            //   },
	            //   {
	            //     global: true,
	            //     top: true,
	            //     ...getPaths({ ...linkParams, global: true, top: true }),
	            //   },
	            //   {
	            //     global: false,
	            //     top: false,
	            //     ...getPaths({ ...linkParams, global: false, top: false }),
	            //   },
	            //   {
	            //     global: false,
	            //     top: true,
	            //     ...getPaths({ ...linkParams, global: false, top: true }),
	            //   },
	            // ],
	        }, null, 2));
	        // 4. link binaries, this is exactly how npm does it.
	        await (0, bin_links_1.default)(linkParams);
	        (0, download_1.trace)(`${name}: post-install: ${tgzUrl.replace(/.*download\//, "")}`);
	    }
	}
	postInstall.default = postInstall$1;
	return postInstall;
}

(function (module) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = require$$0;
	const postInstall_1 = tslib_1.__importDefault(requirePostInstall());
	// import { realpathSync } from "fs";
	// import { pathToFileURL } from "url";
	// function wasCalledAsScript() {
	//     // We use realpathSync to resolve symlinks, as cli scripts will often
	//     // be executed from symlinks in the `node_modules/.bin`-folder
	//     const realPath = realpathSync(process.argv[1]);
	//     // Convert the file-path to a file-url before comparing it
	//     const realPathAsUrl = pathToFileURL(realPath).href;
	//     return import.meta.url === realPathAsUrl;
	// }
	if (!module.parent) {
	    // if (!process.env['npm_config_argv']) {
	    //   console.log('This is meant to be run from within npm script.');
	    // } else {
	    (0, postInstall_1.default)(process.cwd()).catch(console.error);
	    // }
	}
} (build));

var index = /*@__PURE__*/getDefaultExportFromCjs(build.exports);

module.exports = index;
