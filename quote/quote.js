document.getElementById('newQuote').onclick = function() {

  var quoteSource = "http://rainbowsheet.orgfree.com/freecodecamp/quotegen/quote.php?callback=?";
  
  var output;
  var tweetLink;
  $.getJSON(quoteSource, callBackFuncWithData);

  function callBackFuncWithData(json) {

    output = json.quote;
    var author = json.attr;
    document.getElementById("quote").innerHTML = output;
    document.getElementById("author").innerHTML = author;
 
    
    tweetLink = "http://twitter.com/home?status="+output;
  document.getElementById('twit').onclick = function() {
  document.getElementById("link").setAttribute("href",tweetLink);
  }
  }
}


