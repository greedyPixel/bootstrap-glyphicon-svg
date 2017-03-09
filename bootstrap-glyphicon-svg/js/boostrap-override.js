/**
 * This is used to detect if Twitter Bootstrap Glyphicons can be loaded.
 * It is based on code developed by Matt Smith at https://gist.github.com/AllThingsSmitty/716e8b64f04fbf4d21c3c63e54d4a487
 * and also on loading an alternative CSS at http://www.angulartutorial.net/2015/06/dynamically-load-css-and-javascript.html
 * 
 */
//JavaScript way
function cssCheck(element, property) {
	return window.getComputedStyle(element, null).getPropertyValue(property);
}
// JavaScript Way
window.onload = function () {
	var span = document.createElement('span');
  
	span.className = 'glyphicon';
	span.style.display = 'none';
	document.body.insertBefore(span, document.body.firstChild);
  
	if ((cssCheck(span, 'font-family')) !== 'Glyphicons Halflings') {
	  // Grab base64 SVG CSS file for Glyphicons
		var ls = document.createElement('link');
		ls.rel="stylesheet';
		ls.href= '../css/bootstrap-override.css";
		document.getElementsByTagName('head')[0].appendChild(ls);
	}
	document.body.removeChild(span);
};

//JQuery way
function cssExists(element, property) {
	return $(element).css(property);
}
//Jquery Way
var checkGlyphicon = $(window).load(function() {
    // Create a span to test if the font was loaded
    var testGlyphicons = '<span id="testGlyphicons" class="glyphicon" style="display:none;">';
    // Append test span to body
    $('body').append(testGlyphicons);
    //Check to see if font downlaoded
    if ((cssExists('#testGlyphicons', 'font-family')) !== 'Glyphicons Halflings') {
    	// match path to that of where you store this library
    	var glyphiconReplace = '<link href="../css/bootstrap-override.css" rel="stylesheet" type="text/css" />';
    	$('head').append(glyphiconReplace);
    }
    // remove the test span
    $('#testGlyphicons').remove();
});