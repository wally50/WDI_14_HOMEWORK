console.log('ready');

var i = 0;

var gifInput = function() {
  i = 0;
  var string = [];
  var strInput = document.querySelector('input').value;
    // var strInput = "John Wayne";
  string = strInput.trim().split(" ");
  if(string.lenght==1){
    strQuery = strInput.toLowerCase();
  }else{
    strQuery = strInput.toLowerCase().replace(/[^a-z]+/g,'+');
  }

  obtainGifs(strQuery);
};

function obtainGifs(searchString) {
  xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchString + "&api_key=cURkLL2H87SAtCT5u1P5do297WCf23UV&limit=50");
  xhr.done(function(data) { console.log("success got data", data); });
 i = 0;

  displayGifs(xhr,i);
}

function displayGifs(response , n) {
  response.done(function(res) {
    var container = document.querySelector(".container");
    $(container).empty();
    console.log(n);
    if( n >= res.data.length) {
      n = 0;
      return;
    }
      var dataTen=res.data.slice(n,n+10);
      dataTen.forEach(function(gif) {
      var newDivElem = document.createElement("div");
      newDivElem.textContent = n;
      var newImg = document.createElement("img");
      newImg.setAttribute('src', gif.images.fixed_width.url);
      console.log(newImg);
      newDivElem.append( newImg);
      container.append( newDivElem );
    });
  });
}

// load new page on bottoming
$(window).load(function() {
// $(document).ready(function() {
  var win = $(window);
  i = 0;
  win.scroll(function() {
    console.log(' testing');
  	if (win.scrollTop() >= $(document).height()*0.99 - win.height() ) {
      i = i + 10;
      console.log(' floored  ' + i);
      displayGifs(xhr, i);
    }
  });
// });
});


var bttn = document.querySelector('button');
bttn.addEventListener('click', gifInput);

$(document).keyup(function(event) {
    if ($("input").is(":focus") && event.key == "Enter") {
      gifInput();
    }
});


// endLine
// cURkLL2H87SAtCT5u1P5do297WCf23UV
