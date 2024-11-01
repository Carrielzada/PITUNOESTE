const express = require('express');
const { login, updateRole, register, getUsers } = require('../controller/authController');
const { verifyToken, authorizeRole } = require('../middlewares/authMiddleware');

const router = express.Router();

// Rota de login
router.post('/login', login);

router.get('/users', verifyToken, authorizeRole(['admin']), getUsers);

router.put('/update-role', updateRole);

// Rota para atualizar role
router.post('/update-role', verifyToken, authorizeRole(['admin']), updateRole);

router.post('/register', register);

module.exports = router;