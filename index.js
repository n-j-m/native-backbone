"use strict";

var Backbone = require("exoskeleton");
var NativeAjax = require("backbone.nativeajax");

Backbone.ajax = NativeAjax;

module.exports = Backbone;