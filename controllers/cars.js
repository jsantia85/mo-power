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

export {
  index
}