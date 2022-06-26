import { Router } from 'express'
import * as carsCtrl from '../controllers/cars.js'

const router = Router()

//GET localhost:3000/cars
router.get('/', carsCtrl.index)

export {
  router
}