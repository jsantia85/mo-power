import { Router } from 'express'
import * as carsCtrl from '../controllers/cars.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET localhost:3000/cars
router.get('/', carsCtrl.index)

//GET localhost:3000/cars/new
router.get('/new', isLoggedIn, carsCtrl.new)

//GET localhost:3000/cars/:id
router.get('/:id', carsCtrl.show)

//GET localhost:3000/cars/:id/edit
router.get('/:id/edit', isLoggedIn, carsCtrl.edit)

//POST localhost:3000/cars
router.post('/', carsCtrl.create)

//PUT localhost:3000/cars/:id
router.put('/:id', isLoggedIn, carsCtrl.update)

export {
  router
}