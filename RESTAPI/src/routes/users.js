const express= require('express')
const router = express.Router()

const {
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users')

router.get('/users',getUser);

router.post('/users',createUser);

router.delete('/users/:id',deleteUser)

router.patch('/users/:id',updateUser)

module.exports = router;
