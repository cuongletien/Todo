const todos = [];

/**
 * Insert todo to database
 * @todo {id, title, completed}
 */
exports.insert = data => {
  let newData = {...data, completed: false }
  todos.push(newData);
  return newData
};

/**
 * update todo by Id
 * @param { todo: Todo }
 * @return { todo | false }
 */
exports.updateByid = todo => {
  let todoIndex = todos.findIndex(item => item.id === todo.id);
  todos[todoIndex] = [...todos[todoIndex], ...todos];
  if (todos[todoIndex] !== -1) {
    return todos[todoIndex]
  } else {
    return false
  }
}

/**
 * Delete todo by Id
 * @param { id: number }
 * @return { boolean }
 */
exports.deleteById = id => {
  let indexTodo = todos.findIndex( item => item.id === id);
  if (indexTodo !== -1) {
    return false
  }
  todos.splice(indexTodo, 1);
  return true;
};

/**
 * find all todos
 * @params {completed}
 * @return { list }
 */
exports.findAll = params => {
  if (!params) {
    return  todos;
  } else {
    let { completed } = params;
    return todos.filter( item => item.completed === completed );
  }
};

exports.todos = todos;