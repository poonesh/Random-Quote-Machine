document.addEventListener("DOMContentLoaded", function(event) { 

	// let count = 0;
	// document.querySelector(".newQuoteButton").addEventListener("click", function(){
	// 	let newQuoteRequest = new XMLHttpRequest();
	// 	// To avoid caching we add a variable called count at the end of url
	// 	newQuoteRequest.open('GET', 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1'+count);
	// 	count++;
	// 	newQuoteRequest.onload = function(){
	// 		let newQuote = JSON.parse(newQuoteRequest.responseText);
	// 		document.querySelector(".newQuote").innerHTML = newQuote[0].content;
	// 		document.querySelector(".author").innerHTML = newQuote[0].title;
	// 		console.log(newQuote[0].content);
	// 		document.querySelector(".tweetShareLink").setAttribute("href", `https://twitter.com/share?text=${newQuote[0].content}`);
	// 	};
	// 	newQuoteRequest.send();
	// });

	document.querySelector(".newQuoteButton").addEventListener("click", function(){
		$.ajax({
			url : 'https://andruxnet-random-famous-quotes.p.mashape.com/',
			type : 'GET',
			success: function(data){
				document.querySelector(".newQuote").innerHTML = data[0].quote;
				document.querySelector(".author").innerHTML = data[0].author;
				document.querySelector(".tweetShareLink").setAttribute("href", `https://twitter.com/share?text=${data[0].quote}`);
			},

			error: function(err){
				console.log("errorrrrr!");
			},

			beforeSend: function(xhr){
				xhr.setRequestHeader("X-Mashape-Key", "9VCED1Ft9Emshn5a3MPZeOUqWoEHp1noq21jsnDd6OYzyLV4jn")
			}
		});
	});
});

