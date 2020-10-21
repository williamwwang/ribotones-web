$(document).ready(function (){
	var currentInstrument= 'all';
	var showCurrentMembers = true;
	var $instrumentTags = $('#show-all, #show-piano, #show-strings, #show-winds, #show-triangle');
	var $memberTags = $('#show-current, #show-alumni');

	$instrumentTags.click(function(e) {
		var elementName = e.target.id.substr(5);
		if (currentInstrument !== elementName) {

			// Toggle button fill
			$(e.target).toggleClass("primary");
			$("#show-"+currentInstrument).toggleClass("primary");

			var fadeOutSelector = "."+currentInstrument;
			var fadeInSelector = "."+elementName;

			if (currentInstrument == "all") {
				fadeOutSelector = ".members > div";
			} else if (elementName == "all") {
				fadeInSelector = ".members > div";
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
	})
})