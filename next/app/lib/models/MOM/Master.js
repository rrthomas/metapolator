define([
    './_Node'
  , './Glyph'
], function(
    Parent
  , Glyph
) {
    "use strict";
    /**
     * This Element is the container of all glyphs of a master.
     * It will have some metadata and contain children of type MOM Glyph.
     */
    function Master() {
        Parent.call(this);
    }
    var _p = Master.prototype = Object.create(Parent.prototype);
    _p.constructor = Master;
    
    Object.defineProperty(_p, 'type', {
        get: function(){return 'MOM Master';}
    })
    
    _p._acceptedChildren = [Glyph];
    
    return Master;
})
