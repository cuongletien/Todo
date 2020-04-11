const { insert, updateById, deleteById, findAll, todos } = require('../todo');

describe('Test todo model', () => {
  it('should create todo & return inserted to do', () => {
    const inserted = insert({ id: 1, title: 'First Todo' });
    expect.assertions(3);
    expect(inserted).toEqual({ id: 1, title: 'First Todo', completed: false });
    expect(todos.length).toBe(1);
    expect(todos[0]).toEqual({ id: 1, title: 'First Todo', completed: false });
  });

  it('Should update todo & return updated one', () => {
    const updated = updateById({ id: 1, title: 'First Todo updated' });
    const errTodo = updateById({ id: 0, title: 'Err Todo updated' });
    expect.assertions(5);
    expect(todos[0]).toEqual(updated);
    expect(updated.id).toBe(1);
    expect(updated.title).toBe('First Todo updated');
    expect(updated.completed).toBeFalsy();
    expect(errTodo).toBeFalsy();
  });

  it('should delete todo with id', () => {
    const result = deleteById(1);
    const errDelete = deleteById(0);
    expect.assertions(2);
    expect(result).toBeTruthy();
    expect(todos.length).toBe(0);
  });

  it('Should return false if could not found todo id', () => {
    insert({ id: 1, title: 'First Todo' });
    const errDelete = deleteById(0);
    expect.assertions(2);
    expect(errDelete).toBeFalsy();
    expect(todos.length).toBe(1);
  });

  it('Should return all todos', () => {
    insert({ id: 2, title: 'Second Todo'});
    let listTodo = findAll();
    expect(listTodo).toEqual(todos);
  });

  it('Should return all todo with completed true', () => {
    updateById({ id: 2, completed: true});
    let listTodo = findAll({completed: true});
    expect(listTodo.length).toBe(1);
  });

  it('Should return all todo with completed false', () => {
    insert({ id: 3, title: 'Third Todo' });
    insert({ id: 4, title: '4th Todo' });
    let listTodo = findAll({ completed: false });
    expect(listTodo.length).toBe(3);
  });

});