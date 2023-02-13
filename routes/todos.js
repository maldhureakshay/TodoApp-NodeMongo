/**
 * Router 
 */

const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos');

router.get('/', todosController.listTodo);

router.post('/create', todosController.createTodo);

router.get('/delete/:id', todosController.deleteTodo);

module.exports = router;