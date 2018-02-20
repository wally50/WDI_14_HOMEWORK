
function index(req, res) {
  var places = [
    {name: 'ga'},
    {name: 'home'}
  ];
  res.json(places); //feature from express
    // res.send(JSON.stringify(places)); // manually
}

module.exports = {
  index: index
};
