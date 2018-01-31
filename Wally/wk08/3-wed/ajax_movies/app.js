console.log('to the future');


// var options = {
//   url: 'http://www.omdbapi.com/?apikey=2f6435d9&t=jaws',
//   // method: 'get' //default
// };
//
// $.ajax(options).done(function(res) {
//   console.log('me me me'); //Inversion of control IOC, loss of control of program as waiting for response
//
// });
//
// console.log('look over here');

//using s=jaws to request a list of movies
// use javascript dom creation to show it in the page wrapped in paragraphs for each movie

var bttn = document.querySelector('button');

bttn.addEventListener('click', function() {
  var inputValue = document.querySelector('input').value;
  $(".container").empty();
  document.querySelector('input').value = '';

  var $container = $('.container');

  var options = {
    url: "http://www.omdbapi.com/?apikey=2f6435d9&s=" + inputValue,
  };

  // var options = {
  //   url: 'http://www.omdbapi.com/?apikey=2f6435d9&s=jaws'
  // };

  $.ajax(options).done(function(res) {
    res.Search.forEach(function(movie) {
      var newDivElem = $('<div>');
      var newH2Elem = $('<h2>');
      var newImg = $('<img>');

      newH2Elem.text(movie.Title);
      newImg.attr('src',movie.Poster);
      newDivElem.append( newH2Elem );
      newDivElem.append( newImg);

      $container.append( newDivElem );
    });
  });
});
