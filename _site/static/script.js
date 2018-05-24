document.addEventListener("DOMContentLoaded", function(event) { 

	let count = 0;
	document.querySelector(".button").addEventListener("click", function(){
		let newQuoteRequest = new XMLHttpRequest();
		// To avoid caching we add a variable called count at the end of url
		newQuoteRequest.open('GET', 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&klosuerdbfnvjmhb='+count);
		count++;
		newQuoteRequest.onload = function(){
			let newQuote = JSON.parse(newQuoteRequest.responseText);
			document.querySelector(".new_quote").innerHTML = newQuote[0].content;
			document.querySelector(".author").innerHTML = newQuote[0].title;
		};
		newQuoteRequest.send();
	});	
});

