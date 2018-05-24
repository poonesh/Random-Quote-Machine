document.addEventListener("DOMContentLoaded", function(event) { 

	let newQuote;
	let newQuoteRequest = new XMLHttpRequest();
	newQuoteRequest.open('GET', 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1');
	newQuoteRequest.onload = function(){
		newQuote = JSON.parse(newQuoteRequest.responseText);	
	};

	newQuoteRequest.send();

	document.querySelector(".button").addEventListener("click", function(){
		document.querySelector(".new_quote").innerHTML = newQuote[0].content;
		document.querySelector(".author").innerHTML = newQuote[0].title;
	});
	
});

