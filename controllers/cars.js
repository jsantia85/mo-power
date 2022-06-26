import { Car } from '../models/car.js'

function index(req, res) {
  Car.find({})
  .then(cars => {
    res.render('cars/index', {
      cars,
      title: "All Cars"
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

function show(req, res) {
  Car.findById(req.params.id)
  .populate("owner")
  .then(car => {
    res.render('cars/show', {
      car,
      title: "Car Show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/cars')
  })
}

function edit(req, res) {
  Car.findById(req.params.id)
  .then(car => {
    res.render('cars/edit', {
      car,
      title: "Edit Car"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tacos')
  })
}

export {
  index,
  newCar as new,
  create,
  show,
  edit,
}