Element.prototype.isHidden = function() {
    return this.offsetParent === null;
};
