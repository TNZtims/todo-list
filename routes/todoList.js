const express = require('express');
const router = express.Router();
const todoList = require('../services/todoList');

/* GET programming languages. */
router.get('/getAllTasks', async function(req, res, next) {
  try {
    res.json(await todoList.getMultiple());
    //console.log(todoList.getMultiple());
  } catch (err) {
    console.error(`Error while getting todos `, err.message);
    next(err);
  }
});

router.post('/addTask', async function(req, res, next) {
    try {
      res.json(await todoList.create(req.body));
    } catch (err) {
      console.error(`Error while creating todo`, err.message);
      next(err);
    }
});

router.put('/completeTask/:id', async function(req, res, next) {
    try {
      res.json(await todoList.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating todo`, err.message);
      next(err);
    }
});

router.delete('/deleteTasks/:id', async function(req, res, next) {
    try {
      res.json(await todoList.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting todo`, err.message);
      next(err);
    }
});

module.exports = router;