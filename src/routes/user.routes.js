import { Router } from 'express'
import { homeController } from '../controllers/user.controller'

const router = Router()

router
  .route('/')
  .get(homeController)

export default router
