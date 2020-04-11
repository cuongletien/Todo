const express = require('express');
const router = express.Router();

const { 
    createTodo,
    updateTodo,
    getTodoList,
    deleteTodo,
    clearCompleted 
} = require('../controllers/todoController');

router.post("/createTodo", createTodo);
router.post("/updateTodo", updateTodo);
router.post("/todos", getTodoList);
router.post("/deleteTodo", deleteTodo);
router.post("/clearCompleted", clearCompleted);

module.exports = router;