const db = require('./db');
const helper = require('../helper');

async function getMultiple(){
  const rows = await db.query(`SELECT * FROM todo_list`);
  const data = helper.emptyOrRows(rows);

  return { data };
}

async function create(todoList){
  const { task } = todoList;
  const result = await db.query(`INSERT INTO todo_list (task) VALUES (?)`, [task]);

  let message = 'Error in creating todo';
  if (result.affectedRows) {
    message = 'Todo created successfully';
  }

  return { message };
}

async function update(id, todoList){
  const { task, status } = todoList;
  const result = await db.query(`UPDATE todo_list SET task=?, status=?  WHERE id=?`,  [task, status, id]);
    
  let message = 'Error in updating todo';
  if (result.affectedRows) message = 'Todo updated successfully';

  return { message };
}

async function remove(ids){
  const result = await db.query(`DELETE FROM todo_list WHERE id IN (${ids})`);
  
  let message = 'Error in deleting todo';
  if (result.affectedRows) message = 'Todo deleted successfully';
  
  
    return { message };
}

  module.exports = {
    getMultiple,
    create,
    update,
    remove,
  };