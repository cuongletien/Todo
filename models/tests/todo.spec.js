const { insert, updateById, deleteById, findAll, todos } = require('../todo');

describe('Test todo model', () => {
  it('should create todo & return inserted to do', () => {
    const inserted = insert({ id: 1, title: 'First Todo' });
    expect.assertions(3);
    expect(inserted).toEqual({ id: 1, title: 'First Todo', completed: false });
    expect(todos.length).toBe(1);
    expect(todos[0]).toEqual({ id: 1, title: 'First Todo', completed: false });
  });
});