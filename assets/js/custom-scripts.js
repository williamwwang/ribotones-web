$(document).ready(function (){

	var MEMBER_DISPLAY = "flex";

	var currentInstrument= 'all';
	// current, exec, alumni
	var memberSet = 'current';
	var instrumentTagsStr = '#show-all, #show-piano, #show-strings, #show-winds, #show-triangle, #show-voice';
	var $instrumentTags = $('#show-all, #show-piano, #show-strings, #show-winds, #show-triangle, #show-voice');
	var $memberTags = $('#show-current, #show-alumni');

	$instrumentTags.click(function(e) {
		var elementName = e.target.id.substr(5);
		if (currentInstrument !== elementName) {

			// Toggle button fill
			$(e.target).toggleClass("primary");
			$("#show-"+currentInstrument).toggleClass("primary");

			var fadeOutSelector = "."+currentInstrument+":not(.alum)";
			var fadeInSelector = "."+elementName+":not(.alum)";

			if (currentInstrument == "all") {
				fadeOutSelector = ".members > div:not(.alum)";
			} else if (elementName == "all") {
				fadeInSelector = ".members > div:not(.alum)";
			}

			// Fade old instrument out and new instrument in
			$.when($(fadeOutSelector).fadeTo("fast", 0)).then(function() {
				  $(fadeOutSelector).css("display", "none");
				  $(fadeInSelector).fadeTo('fast', 1);
				  currentInstrument = elementName;
				});
			}
	});

	$memberTags.click(function(e) {
		var elementName = e.target.id.substr(5);
		if (memberSet !== elementName) {

			// Toggle button fill
			$(e.target).toggleClass("primary");
			$("#show-"+memberSet).toggleClass("primary");
			$("#show-"+currentInstrument).toggleClass("primary");

			// Toggle fadeout
			var fadeOutButtons = "";
			var fadeInButtons = "";
			if (memberSet == "current") {
				fadeOutButtons = "#show-piano, #show-strings, #show-winds, #show-triangle, #show-voice, #show-all";
			} else if (elementName == "current") {
				fadeInButtons = "#show-piano, #show-strings, #show-winds, #show-triangle, #show-voice, #show-all";
			}

			var fadeOutSelector = "";
			var fadeInSelector = "";

			if (elementName == "current") {
				fadeInSelector = ".members > div:not(.alum)";
			} else if (elementName == "alumni") {
				fadeInSelector = ".members > .alum";
			}

			if (memberSet == "current") {
				fadeOutSelector = ".members > div:not(.alum)";
			} else if (memberSet == "alumni") {
				fadeOutSelector = ".members > .alum";
			}

			if (fadeOutButtons != "") {
				fadeOutSelector = fadeOutButtons + "," + fadeOutSelector;
			}
			if (fadeInButtons != "") {
				fadeInSelector = fadeInButtons + "," + fadeInSelector;
			}

			$.when($(fadeOutSelector).fadeTo("fast", 0)).then(function() {
				  $(fadeOutSelector).css("display", "none");
				  // Set alumni display style to flex
				  if (elementName == "alumni") {
				  	$(".members > .alum").css("display", MEMBER_DISPLAY);
				  }
				  $(fadeInSelector).fadeTo('fast', 1);
				  currentInstrument = "all";
				  memberSet = elementName;
				  if (memberSet == "current") {
				  	$("#show-all").addClass("primary");
				  }
				});
			}
	})
})