const { Router } = require('express');
const {getAllUsers, createUser, updateUser, getUserById, deleteUser} = require('../controllers/users.controllers')
const { postRequestValidations,
        putRequestValidations,
        getRequestValidations,
        deleteRequestValidations
        } = require('../middlewares/users/users.middlewares')


const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getRequestValidations,  getUserById);
router.post('/', postRequestValidations, createUser);
router.put('/:id', putRequestValidations, updateUser);
router.delete('/:id', deleteRequestValidations, deleteUser);

module.exports = router;