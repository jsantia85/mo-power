import { Car } from '../models/car.js'

function index(req, res) {
  Car.find({})
  .then(cars => {
    res.render('cars/index', {
      cars,
      title: "All CARS"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function newCar(req, res) {
  res.render("cars/new", {
    title: "Add Car",
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Car.create(req.body)
  .then(car => {
    res.redirect('/cars')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/cars')
  })
}

export {
  index,
  newCar as new,
  create,
}