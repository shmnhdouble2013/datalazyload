/*! datalazyload - v1.1 - 2014-05-14 9:38:44 AM
* Copyright (c) 2014 kissy-team; Licensed  */
KISSY.add("gallery/datalazyload/1.1/plugin/webp",function(a){function b(a){var b=window.localStorage&&window.localStorage.getItem("webpsupport");return null!==b?void a("true"===b):void c(function(b){window.localStorage&&window.localStorage.setItem("webpsupport",b),a(b)})}function c(b){var c=new Image;c.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",c.onload=c.onerror=function(){a.log("webp is supported!"),b(2===c.width&&2===c.height)}}var d=window.WebP={};return d.isSupport=function(a){return a?void 0===d._isSupport?void b(function(b){a(d._isSupport=b)}):void a(d._isSupport):void 0},d},{attach:!1});