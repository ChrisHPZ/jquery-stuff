/* jQuery */
$(document).ready(function(){
	inputHover();
	// ids();
	//selectors();
	// paragraphFade();
	// imageLoad();
	// leavePage();
	// messageFadeIn();
	// documentReady();
});

function inputHover() {
	var input = $("input[type=text]");
	$(input).each(function(){
		$(this).hover(function(){
			$(this).css({"background":"linear-gradient(to bottom,  #dfdfdf 0%, #b5b5b5 100%)", "cursor": "pointer"});
		}, function() {
			$(this).css({"background":"linear-gradient(to bottom,  #b5b5b5 0%,#dfdfdf 100%)", "cursor": "pointer"});
		});
		$(this).click(function(){
			$(this).css({"background":"linear-gradient(to bottom,  #b5b5b5 0%,#dfdfdf 100%)"});
		});
	});
}

function ids() {
	var name = $("#firstname").val();
	$("#submit").click(function(){
		$(".debug .firstname-debug").text(name);
		return false;
	});
}

function selectors() {
	// Get the count of elements on the page
	var count = $('#header').find('*').length;
	// Display that count in a span tag within the .debug div
	$(".debug span").append(count);
	// Console this just for shits and giggles
	console.log(count);
}

function paragraphFade() {
	$("#two p").click(function(){
		$(this).fadeOut(1000);
		console.log(this);
	});	
}
function leavePage() {
	$(window).on('beforeunload', function(){
		var c = confirm("Are you sure you want to leave?");
		if(c) {
			return true;
		} else {
			return false;
		}
	});
}

function imageLoad() {
	$("#tumblr").load(function(){
		$(this).css({"border" : "3px solid red"});
	});
}

function messageFadeIn() {
	$("#message").fadeIn(750);
}

function documentReady() {
	alert(this);
}
