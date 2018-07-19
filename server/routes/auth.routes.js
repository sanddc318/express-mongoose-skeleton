import express from 'express'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

// prettier-ignore
router.route('/api/signin')
  .post(authCtrl.signin)

// prettier-ignore
router.route('/api/sigout')
  .get(authCtrl.signout)

export default router
