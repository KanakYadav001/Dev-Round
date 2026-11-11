import {auth} from '../controller/user.controller'
import express from 'express'
import { authMiddleware } from '../middleware/userAuth.middleware'
import {ratelimitMiddleware }from '../middleware/rateLimit.middleware'

const authRoutes = express.Router()


authRoutes.post('/auth/signIn', ratelimitMiddleware , auth.signIn)
authRoutes.post('/auth/signUp' , ratelimitMiddleware , auth.signUp)
authRoutes.post('/logout'  , auth.logout)

authRoutes.use(authMiddleware);

authRoutes.get('/profile' , auth.getProfile)
authRoutes.patch('/profile' , auth.updateProfile)
authRoutes.patch('/password' , auth.updatePassword)
authRoutes.post('/refresh' , auth.refreshToken)



export default authRoutes