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

function update(req, res) {
  Car.findById(req.params.id)
  .then(car => {
    if (car.owner.equals(req.user.profile._id)) {
      car.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/cars/${car._id}`)
      })
    } else {
      throw new Error ('Not authorized, only owner of the car can edit this car.')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/tacos`)
  })
}

function deleteCar(req, res) {
  Car.findById(req.params.id)
  .then(car => {
    if (car.owner.equals(req.user.profile._id)) {
      car.delete()
      .then(() => {
        res.redirect('/cars')
      })
    } else {
      throw new Error ('Not authorized, only owner of the car can delete this car.')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/cars')
  })
}

function addMod(req, res) {

}

export {
  index,
  newCar as new,
  create,
  show,
  edit,
  update,
  deleteCar as delete,
  addMod,
}