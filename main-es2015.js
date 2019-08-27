(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n<app-ezstayheader></app-ezstayheader>\n<!-- <app-ezstayhome></app-ezstayhome> -->\n<router-outlet></router-outlet>\n<app-ezstayfooter></app-ezstayfooter>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ezlogin/ezlogin.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ezlogin/ezlogin.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-4 mx-auto\">\n      <h2>LOGIN</h2>\n      <div *ngIf=\"status\" class=\"alert\" [ngClass]=\"status.class\">\n        {{status.message}}\n      </div>\n      <form [formGroup]=\"form\" (submit)=\"login()\">\n        \n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"text\" name=\"email\" class=\"form-control\" formControlName=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" name=\"password\" class=\"form-control\" formControlName=\"password\">\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" name=\"submit\" class=\"btn btn-warning\"> Login</button>\n        </div>\n      </form>\n    </div>\n  \n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ezregister/ezregister.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ezregister/ezregister.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-4 mx-auto\">\n      <h2>REGISTER</h2>\n      <div *ngIf=\"status\" class=\"alert\" [ngClass]=\"status.class\">\n        {{status.message}}\n      </div>\n      <form [formGroup]=\"form\" (submit)=\"register()\">\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\" name=\"firstName\" class=\"form-control\" formControlName=\"firstName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name</label>\n          <input type=\"text\" name=\"lastName\" class=\"form-control\" formControlName=\"lastName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"text\" name=\"email\" class=\"form-control\" formControlName=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" name=\"password\" class=\"form-control\" formControlName=\"password\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"contactNumber\">Contact Number</label>\n          <input type=\"number\" name=\"contactNumber\" class=\"form-control\" formControlName=\"contactNumber\">\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" name=\"submit\" class=\"btn btn-warning\"> Register</button>\n        </div>\n      </form>\n    </div>\n  \n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ezstaybookings/ezstaybookings.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ezstaybookings/ezstaybookings.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"container\">\n        <!-- <p>{{hotels | json}}</p> -->\n        <div class=\"card\">\n            <article>\n                <!-- <div class=\"row\" *ngFor=\"let hotel of hotels\"> -->\n                <div class=\"col-sm-4\">\n                    <img [src]=\"hotel.hotelPhotoUrl\" alt=\"No image found\" style=\"\n                            height: 50;\n                            height: 170px;\n                            padding: 20px;\n                            width: 170px;\n                        \">\n                    <!--\"../../assets/ezstayemptylogo.png\"-->\n                </div>\n                <div class=\"col-sm-6\">\n                    <h4>{{hotel.name}}</h4>\n                    <h6>Ratings : {{hotel.rating}}</h6>\n                    <h6>City : {{hotel.city}}</h6>\n                    <h6>Address : {{hotel.address}}</h6>\n                    <h6>Contact : {{hotel.phone}}</h6>\n                </div>\n                <div class=\"col-sm-2\">\n                    <h6>Check-in : {{hotel.checkIn}}</h6>\n                    <h6>Check-out : {{hotel.checkOut}}</h6>\n                    <h6>Guests : {{hotel.guests}}</h6>\n                    <h6>Guests : {{hotel.noOfRooms}}</h6>\n                </div>\n                <!-- </div> -->\n            </article>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ezstayfooter/ezstayfooter.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ezstayfooter/ezstayfooter.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ezstayheader/ezstayheader.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ezstayheader/ezstayheader.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"../../assets/ezstaylogo.png\" width=\"30\" height=\"30\"\n      class=\"d-inline-block align-top\" alt=\"\">\n    EZStay</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n    aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse float-right\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">HOME<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/bookings']\">BOOKINGS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">PAYMENTS</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav ml-auto\">\n      <li class=\"nav-item dropdown\">\n        <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\"></a>\n        <div class=\"dropdown-menu dropdown-menu-right\">\n          <a [routerLink]=\"['/register']\" class=\"dropdown-item\">REGISTER</a>\n          <a [routerLink]=\"['/login']\" class=\"dropdown-item\">LOG-IN</a>\n          <div class=\"dropdown-divider\"></div>\n          <a [routerLink]=\"['/']\" class=\"dropdown-item\" (click)=\"logOut()\">LOG-OUT</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ezstayhome/ezstayhome.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ezstayhome/ezstayhome.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"\r\nmin-height: -webkit-fill-available;\r\n\">\r\n    <div class=\"container\">\r\n        <form [formGroup]=\"form\" (submit)=\"searchHotels()\" class=\"col-sm-12\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-sm-2\" style=\"background-color:#aeafb1;\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"city\">CITY</label>\r\n                        <select class=\"form-control\" name=\"city\" formControlName=\"city\">\r\n                            <option>Pune</option>\r\n                            <option>Mumbai</option>\r\n                            <option>Hyderabad</option>\r\n                            <option>Delhi</option>\r\n                            <option>Goa</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" style=\"background-color:#aeafb1;\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"checkIn\">CHECK-IN</label>\r\n                        <input class=\"form-control\" type=\"date\" name=\"checkIn\" formControlName=\"checkIn\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" style=\"background-color:#aeafb1;\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"checkOut\">CHECK-OUT</label>\r\n                        <input class=\"form-control\" type=\"date\" name=\"checkOut\" formControlName=\"checkOut\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"background-color:#aeafb1;\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"rooms\">ROOMS</label>\r\n                        <input class=\"form-control\" id=\"ezStayGuests\" type=\"number\" name=\"rooms\"\r\n                            formControlName=\"rooms\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"background-color:#aeafb1;\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"guests\">GUESTS</label>\r\n                        <input class=\"form-control\" id=\"ezStayRooms\" type=\"number\" name=\"guests\"\r\n                            formControlName=\"guests\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-2\" style=\"background-color:#aeafb1;\">\r\n                    <button type=\"submit\" name=\"search\" style=\"margin-top: 29px;\" class=\"btn btn-warning\">\r\n                        SEARCH</button>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n        <div class=\"row\">\r\n            <div class=\"container\">\r\n                <!-- <p>{{hotels | json}}</p> -->\r\n                <div class=\"card\">\r\n                    <article>\r\n                        <div class=\"row\" *ngFor=\"let hotel of hotels\">\r\n                            <div class=\"col-sm-4\">\r\n                                <img [src]=\"hotel.hotelPhotoUrl\" alt=\"No image found\" style=\"\r\n                                height: 50;\r\n                                height: 170px;\r\n                                padding: 20px;\r\n                                width: 170px;\r\n                            \">\r\n                                <!--\"../../assets/ezstayemptylogo.png\"-->\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>{{hotel.name}}</h4>\r\n                                <h6>Ratings : {{hotel.rating}}</h6>\r\n                                <h6>City : {{hotel.city}}</h6>\r\n                                <h6>Address : {{hotel.address}}</h6>\r\n                                <h6>Contact : {{hotel.phone}}</h6>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <button class=\"btn btn-danger\" style=\"margin-top: 29px;\" type=\"button\" (click)=\"bookHotel(hotel)\">BOOK</button>\r\n                            </div>\r\n                        </div>\r\n                    </article>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
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
    }
    return __assign.apply(this, arguments);
}

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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

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
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ezlogin_ezlogin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ezlogin/ezlogin.component */ "./src/app/ezlogin/ezlogin.component.ts");
/* harmony import */ var _ezregister_ezregister_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ezregister/ezregister.component */ "./src/app/ezregister/ezregister.component.ts");
/* harmony import */ var _ezstayhome_ezstayhome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ezstayhome/ezstayhome.component */ "./src/app/ezstayhome/ezstayhome.component.ts");
/* harmony import */ var _ezstaybookings_ezstaybookings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ezstaybookings/ezstaybookings.component */ "./src/app/ezstaybookings/ezstaybookings.component.ts");







const routes = [
    { path: '', component: _ezstayhome_ezstayhome_component__WEBPACK_IMPORTED_MODULE_5__["EzstayhomeComponent"] },
    { path: 'login', component: _ezlogin_ezlogin_component__WEBPACK_IMPORTED_MODULE_3__["EzloginComponent"] },
    { path: 'register', component: _ezregister_ezregister_component__WEBPACK_IMPORTED_MODULE_4__["EzregisterComponent"] },
    { path: 'bookings', component: _ezstaybookings_ezstaybookings_component__WEBPACK_IMPORTED_MODULE_6__["EzstaybookingsComponent"] }
    // { path: '*', redirectTo:"/home", pathMatch:'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ezstay';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ezstayheader_ezstayheader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ezstayheader/ezstayheader.component */ "./src/app/ezstayheader/ezstayheader.component.ts");
/* harmony import */ var _ezstayfooter_ezstayfooter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ezstayfooter/ezstayfooter.component */ "./src/app/ezstayfooter/ezstayfooter.component.ts");
/* harmony import */ var _ezstayhome_ezstayhome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ezstayhome/ezstayhome.component */ "./src/app/ezstayhome/ezstayhome.component.ts");
/* harmony import */ var _ezlogin_ezlogin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ezlogin/ezlogin.component */ "./src/app/ezlogin/ezlogin.component.ts");
/* harmony import */ var _ezregister_ezregister_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ezregister/ezregister.component */ "./src/app/ezregister/ezregister.component.ts");
/* harmony import */ var _ezstaybookings_ezstaybookings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ezstaybookings/ezstaybookings.component */ "./src/app/ezstaybookings/ezstaybookings.component.ts");




// import {FormsModule} from '@angular/forms';









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _ezstayheader_ezstayheader_component__WEBPACK_IMPORTED_MODULE_7__["EzstayheaderComponent"],
            _ezstayfooter_ezstayfooter_component__WEBPACK_IMPORTED_MODULE_8__["EzstayfooterComponent"],
            _ezstayhome_ezstayhome_component__WEBPACK_IMPORTED_MODULE_9__["EzstayhomeComponent"],
            _ezlogin_ezlogin_component__WEBPACK_IMPORTED_MODULE_10__["EzloginComponent"],
            _ezregister_ezregister_component__WEBPACK_IMPORTED_MODULE_11__["EzregisterComponent"],
            _ezstaybookings_ezstaybookings_component__WEBPACK_IMPORTED_MODULE_12__["EzstaybookingsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            // FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/ezlogin/ezlogin.component.css":
/*!***********************************************!*\
  !*** ./src/app/ezlogin/ezlogin.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V6bG9naW4vZXpsb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ezlogin/ezlogin.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ezlogin/ezlogin.component.ts ***!
  \**********************************************/
/*! exports provided: EzloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EzloginComponent", function() { return EzloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





let EzloginComponent = class EzloginComponent {
    constructor(fb, router, userSvc) {
        this.fb = fb;
        this.router = router;
        this.userSvc = userSvc;
        this.status = undefined;
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])]
        });
    }
    login() {
        if (this.form.valid) {
            this.userSvc.getToken(this.form.value)
                .subscribe(result => {
                localStorage.setItem("auth-token", JSON.stringify(result));
                this.router.navigate(['/']);
            }, err => {
                this.status = { class: "alert-danger", message: "Login failed:invalid user credentials" };
            });
        }
        else {
            this.status = { class: "alert-danger", message: "invalid user data" };
        }
    }
};
EzloginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
EzloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ezlogin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ezlogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ezlogin/ezlogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ezlogin.component.css */ "./src/app/ezlogin/ezlogin.component.css")).default]
    })
], EzloginComponent);



/***/ }),

/***/ "./src/app/ezregister/ezregister.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ezregister/ezregister.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V6cmVnaXN0ZXIvZXpyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ezregister/ezregister.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ezregister/ezregister.component.ts ***!
  \****************************************************/
/*! exports provided: EzregisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EzregisterComponent", function() { return EzregisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let EzregisterComponent = class EzregisterComponent {
    constructor(fb, userSvc) {
        this.fb = fb;
        this.userSvc = userSvc;
        this.status = undefined;
    }
    ngOnInit() {
        this.form = this.fb.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)])],
            contactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)])]
        });
    }
    register() {
        this.status = undefined;
        if (this.form.valid) {
            this.userSvc.addUser(this.form.value)
                .subscribe(result => {
                console.log(result);
                this.status = { success: true, class: "alert-success", message: "User registered successfully" };
            }, err => {
                console.log(err);
                this.status = { success: false, class: "alert-danger", message: "User registration failed" };
            });
        }
        else {
            this.status = { success: false, class: "alert-danger", message: "Invalid user details" };
        }
    }
};
EzregisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
EzregisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ezregister',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ezregister.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ezregister/ezregister.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ezregister.component.css */ "./src/app/ezregister/ezregister.component.css")).default]
    })
], EzregisterComponent);



/***/ }),

/***/ "./src/app/ezstaybookings/ezstaybookings.component.css":
/*!*************************************************************!*\
  !*** ./src/app/ezstaybookings/ezstaybookings.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V6c3RheWJvb2tpbmdzL2V6c3RheWJvb2tpbmdzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ezstaybookings/ezstaybookings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ezstaybookings/ezstaybookings.component.ts ***!
  \************************************************************/
/*! exports provided: EzstaybookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EzstaybookingsComponent", function() { return EzstaybookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EzstaybookingsComponent = class EzstaybookingsComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.hotel = JSON.parse(this.route.snapshot.paramMap.get("hotel"));
    }
};
EzstaybookingsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
EzstaybookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ezstaybookings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ezstaybookings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ezstaybookings/ezstaybookings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ezstaybookings.component.css */ "./src/app/ezstaybookings/ezstaybookings.component.css")).default]
    })
], EzstaybookingsComponent);



/***/ }),

/***/ "./src/app/ezstayfooter/ezstayfooter.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ezstayfooter/ezstayfooter.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V6c3RheWZvb3Rlci9lenN0YXlmb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ezstayfooter/ezstayfooter.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ezstayfooter/ezstayfooter.component.ts ***!
  \********************************************************/
/*! exports provided: EzstayfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EzstayfooterComponent", function() { return EzstayfooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EzstayfooterComponent = class EzstayfooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
EzstayfooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ezstayfooter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ezstayfooter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ezstayfooter/ezstayfooter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ezstayfooter.component.css */ "./src/app/ezstayfooter/ezstayfooter.component.css")).default]
    })
], EzstayfooterComponent);



/***/ }),

/***/ "./src/app/ezstayheader/ezstayheader.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ezstayheader/ezstayheader.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V6c3RheWhlYWRlci9lenN0YXloZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ezstayheader/ezstayheader.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ezstayheader/ezstayheader.component.ts ***!
  \********************************************************/
/*! exports provided: EzstayheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EzstayheaderComponent", function() { return EzstayheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EzstayheaderComponent = class EzstayheaderComponent {
    constructor() { }
    ngOnInit() {
    }
    logOut() {
        localStorage.removeItem("auth-token");
    }
};
EzstayheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ezstayheader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ezstayheader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ezstayheader/ezstayheader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ezstayheader.component.css */ "./src/app/ezstayheader/ezstayheader.component.css")).default]
    })
], EzstayheaderComponent);



/***/ }),

/***/ "./src/app/ezstayhome/ezstayhome.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ezstayhome/ezstayhome.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .card:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  }\r\n  \r\n  .container {\r\n    padding: 2px 16px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXpzdGF5aG9tZS9lenN0YXlob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lenN0YXlob21lL2V6c3RheWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/ezstayhome/ezstayhome.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ezstayhome/ezstayhome.component.ts ***!
  \****************************************************/
/*! exports provided: EzstayhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EzstayhomeComponent", function() { return EzstayhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_ezstayhotels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ezstayhotels.service */ "./src/app/services/ezstayhotels.service.ts");
/* harmony import */ var _services_ezstaybookings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ezstaybookings.service */ "./src/app/services/ezstaybookings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let EzstayhomeComponent = class EzstayhomeComponent {
    constructor(router, fb, ezstayhotelsService, ezstaybookingsService) {
        this.router = router;
        this.fb = fb;
        this.ezstayhotelsService = ezstayhotelsService;
        this.ezstaybookingsService = ezstaybookingsService;
        this.status = undefined;
        this.hotels = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            checkIn: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            checkOut: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rooms: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            guests: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        document.getElementById("ezStayGuests")["defaultValue"] = "0";
        document.getElementById("ezStayRooms")["defaultValue"] = "0";
        this.getHotels(this.hotelSearchParam);
    }
    getHotels(hotelSearchParam) {
        const hotelsObservable = this.ezstayhotelsService.getHotelsByParam(hotelSearchParam);
        hotelsObservable.subscribe((hotelsData) => {
            hotelsData[0]['hotelPhotoUrl'] = "https://ezstaystoragegroup.blob.core.windows.net/ezstayhotels/baglioni-hotel-london.jpg";
            this.hotels = hotelsData;
        });
    }
    searchHotels() {
        this.getHotels(this.form.value);
    }
    bookHotel(hotel) {
        this.ezstaybookingsService.bookHotel(hotel);
        this.router.navigate(['/bookings', { hotel: JSON.stringify(hotel) }]);
    }
};
EzstayhomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_ezstayhotels_service__WEBPACK_IMPORTED_MODULE_3__["EzstayhotelsService"] },
    { type: _services_ezstaybookings_service__WEBPACK_IMPORTED_MODULE_4__["EzstaybookingsService"] }
];
EzstayhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ezstayhome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ezstayhome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ezstayhome/ezstayhome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ezstayhome.component.css */ "./src/app/ezstayhome/ezstayhome.component.css")).default]
    })
], EzstayhomeComponent);



/***/ }),

/***/ "./src/app/services/ezstaybookings.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/ezstaybookings.service.ts ***!
  \****************************************************/
/*! exports provided: EzstaybookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EzstaybookingsService", function() { return EzstaybookingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EzstaybookingsService = class EzstaybookingsService {
    constructor(http) {
        this.http = http;
        this._url = "http://13.76.222.107/api/hotel";
    }
    bookHotel(hotel) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('hotelData', JSON.stringify(hotel));
        return this.http.get(this._url, { params: params });
    }
};
EzstaybookingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EzstaybookingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EzstaybookingsService);



/***/ }),

/***/ "./src/app/services/ezstayhotels.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/ezstayhotels.service.ts ***!
  \**************************************************/
/*! exports provided: EzstayhotelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EzstayhotelsService", function() { return EzstayhotelsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EzstayhotelsService = class EzstayhotelsService {
    constructor(http) {
        this.http = http;
        this._url = "http://23.97.49.174/api/hotel";
    }
    getHotelsByParam(hotelSearch) {
        let cityFilter = hotelSearch ? hotelSearch['city'] : null;
        //let params = new HttpParams().set('hotelSearchParams', JSON.stringify(hotelSearch));
        //return this.http.get<Hotel[]>(this._url,{params: params});
        return this.http.get(cityFilter ? this._url + "/" + cityFilter : this._url);
    }
};
EzstayhotelsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EzstayhotelsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EzstayhotelsService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.API_URL = "http://207.46.230.126/api/Identity";
    }
    addUser(user) {
        let options = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        user.contactNumber = parseInt(user.contactNumber);
        return this.http.post(`${this.API_URL}/auth/register`, user, options);
    }
    getToken(user) {
        let options = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        return this.http.post(`${this.API_URL}/auth/token`, user, options);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\sagar kul\ezstay\ezstay\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map