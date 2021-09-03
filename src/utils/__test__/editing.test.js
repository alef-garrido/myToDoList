/**
 * @jest-environment jsdom
 */


import EditTask from '../editing'
import Storage from '../storage'

const list = Storage.getFromStorage()


describe('Add and Delete task', () => {
  test('Should add a new item to the list', () => {
    const text = 'my task';
    EditTask.add(list, text);
    expect(list.length).toBe(1);
  });

  test('Should remove an item from the list', () => {
    EditTask.deleteTask(list, 0);

    expect(list.length).toBe(0);
  })
});
