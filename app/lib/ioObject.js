/*
 * Use objects that readDir then defineProperty for each member. Reading
 * then works with normal o[k] or o.p syntax.
 * 
 * Make object non-extensible to avoid accidental assignment; instead, have
 * set method which calls defineProperty appropriately.
 */

define([
    'metapolator/errors'
], function (
    errors
) {
    "use strict";

    // An object which is bound to an io directory
    var ioObject = {}
      , Parent = Object
      ;

    function ioObject(io) {
        Parent.call(this);
        this._io = io;
    }

    var _p = ioObject.prototype = Object.create(Parent.prototype);

    /*
     * Bind an ioObject to the given root directory.
     */
    _p.bind = function(root) {
        
    };

    return ioObject;
})
