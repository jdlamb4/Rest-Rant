//
const router = require("express").Router();
const places = require("../models/places.js");

// Index Route
router.get("/", function (req, res) {
  // let places = [{
  //     name: 'H-Thai-ML',
  //     city: 'Seattle',
  //     state: 'WA',
  //     cuisines: 'Thai, Pan-Asian',
  //     pic: '/images/HThaiML.jpeg'
  //   }, {
  //     name: 'Coding Cat Cafe',
  //     city: 'Phoenix',
  //     state: 'AZ',
  //     cuisines: 'Coffee, Bakery',
  //     pic: '/images/cafe.jpeg'
  //   }]
  res.render("places/index", { places });
});

//  Post /places route
router.post("/", (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  } 
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body)
  res.redirect("/places");
});

// GET / places/new Route
router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

module.exports = router;
