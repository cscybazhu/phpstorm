/*!
 * angular-translate-static - v2.15.2 - 2017-06-22
 * 
 * Copyright (c) 2017 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function (a, b) {
    "function" == typeof define && define.amd ? define([], function () {
        return b()
    }) : "object" == typeof module && module.exports ? module.exports = b() : b()
}(0, function () {
    function a(a, b) {
        "use strict";
        return function (c) {
            if (!(c && (angular.isArray(c.files) || angular.isString(c.prefix) && angular.isString(c.suffix))))throw new Error("Couldn't load static files, no files and prefix or suffix specified!");
            c.files || (c.files = [{prefix: c.prefix, suffix: c.suffix}]);
            for (var d = [], e = c.files.length, f = 0; f < e; f++)d.push(function (d) {
                if (!d || !angular.isString(d.prefix) || !angular.isString(d.suffix))throw new Error("Couldn't load static file, no prefix or suffix specified!");
                var e = [d.prefix, c.key, d.suffix].join("");
                return angular.isObject(c.fileMap) && c.fileMap[e] && (e = c.fileMap[e]), b(angular.extend({
                    url: e,
                    method: "GET"
                }, c.$http)).then(function (a) {
                    return a.data
                }, function () {
                    return a.reject(c.key)
                })
            }({prefix: c.files[f].prefix, key: c.key, suffix: c.files[f].suffix}));
            return a.all(d).then(function (a) {
                for (var b = a.length, c = {}, d = 0; d < b; d++)for (var e in a[d])c[e] = a[d][e];
                return c
            })
        }
    }

    return a.$inject = ["$q", "$http"], angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader", a), a.displayName = "$translateStaticFilesLoader", "pascalprecht.translate"
});

