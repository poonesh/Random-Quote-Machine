document.addEventListener("DOMContentLoaded", function(event) { 
	document.querySelector(".button").addEventListener("click", function(){
		document.querySelector(".new_quote").innerHTML = "this is your new quote";
	});

	let newQuoteRequest = new XMLHttpRequest();
	newQuoteRequest.open('GET', 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=5');
	newQuoteRequest.onload = function(){
		console.log(newQuoteRequest.responseText);
	};

	newQuoteRequest.send();
});

