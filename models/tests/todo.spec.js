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
});