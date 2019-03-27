const router = require('express').Router();
const Todo = require('../models/todo');
const ejs = require('ejs');

router.get('/', (req, res) => {
  Todo.find({}).then((results) => {
    res.render('index', {todos: results})
  })
  res.render('index', {});
});

router.post('/todos', (req, res) => {
  let newTodo = new Todo({description: req.body.description});

  newTodo
    .save()
    .then((result) => {
      console.log(result);
      res.redirect('/')
    })
})

module.exports = router;