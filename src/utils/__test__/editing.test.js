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

  test('Description of the last added task should match the input', () => {
    expect(list[0].description).toMatch(/my task/)
  })

  test("Index of task should represent it's place in the list ", () => {
    expect(list[0].id).toBe(1)
  })

  test('Default status should be false', () => {
    expect(list[0].completed).toBe(false)
  })

  test('Should remove just one item from the list', () => {
    const text = 'my 2nd task';
    EditTask.add(list, text);
    EditTask.deleteTask(list, 1);

    expect(list.length).toBe(1);
  })

  test('Should remove the last item of the list', () => {
    EditTask.deleteTask(list, 0);

    expect(list.length).toBe(0);
  })

});
