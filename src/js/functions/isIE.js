export function isIE() {
    // Internet Explorer 6-11
    return /*@cc_on!@*/ false || !!document.documentMode;
}
