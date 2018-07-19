import express from 'express'
import userCtrl from '../controllers/user.controller'

const router = express.Router()

// prettier-ignore
router.route('/api/users')
  .post(userCtrl.create)
  .get(userCtrl.list)

// prettier-ignore
router.route('/api/users/:userId')
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove)

router.param('userId', userCtrl.userById)

export default router
