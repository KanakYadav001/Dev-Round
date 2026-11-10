import {auth} from '../controller/user.controller'
import express from 'express'
import { authMiddleware } from '../middleware/userAuth.middleware'

const authRoutes = express.Router()


authRoutes.post('/signIn', auth.signIn)
authRoutes.post('/signUp' , auth.signUp)

authRoutes.use(authMiddleware);

authRoutes.get('/profile' , auth.getProfile)
authRoutes.put('/profile' , auth.updateProfile)
authRoutes.post('/logout'  , auth.logout)
authRoutes.put('/password' , auth.updatePassword)
authRoutes.post('/refresh' , auth.refreshToken)



export default authRoutes