const Todo = require('../models/Todo');


/**
 * list all todo in decending order
 */
listTodo = async (req, res) => {
  try {
    const todoItems = await Todo.find().sort({_id: -1});
    res.render('todos.ejs', { todos: todoItems});
  } catch (err) {
    console.log(err);
  }
},

/**
 * create todo
 */
createTodo = async (req, res) => {
  try {
    await Todo.create({ name: req.body.name});
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
},

/**
 * delete todo
 */
deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    await Todo.findOneAndDelete({ _id: id});
   
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
 
  listTodo,
  createTodo,
  deleteTodo
};