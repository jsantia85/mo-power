import { Router } from 'express'
import * as carsCtrl from '../controllers/cars.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET localhost:3000/cars
router.get('/', carsCtrl.index)

//POST localhost:3000/cars/new
router.get('/new', isLoggedIn, carsCtrl.new)

//POST localhost:3000/cars
router.post('/', carsCtrl.create)

export {
  router
}