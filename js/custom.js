$(document).ready(function() {
	
	
	$(document).mousedown(function(event){
		switch (event.which) {
			case 1:
				//pull the handle
				$("#beer-tap-top, beer-tap-top-shadow").addClass("active")
				//move mug left under spout
				$("#beer-mug").addClass("in-action")
				//change background
				$('#background-container').toggleClass("bg-1 bg-2");
				//wait, then start pouring from spout
				setTimeout(function(){
				  $("#beer-pouring-from-tap").addClass("beer-pouring-active").removeClass("beer-pouring");
				}, 00);
				//fill up mug
				$("#liquid").css("height","275px");
				$("#liquid").css("background-position","top left");
				
				
		}
	});
	
	$(document).mouseup(function(event){
		switch (event.which) {
			case 1:
				//release the handle
				$("#beer-tap-top, beer-tap-top-shadow").removeClass("active")
				//stop pouring from spout
				$("#beer-pouring-from-tap").addClass("beer-pouring").removeClass("beer-pouring-active")
				//move mug back to original spot
				$("#beer-mug").removeClass("in-action")
				//change background
				$('#background-container').toggleClass("bg-1 bg-2");
				$("#liquid").css("height","235px");
				$("#liquid").css("background-position","18% 3%");
				$("#liquid").css("transition","all 2s ease-out");
			
		}
	});
	

});