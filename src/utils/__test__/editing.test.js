/**
 * @jest-environment jsdom
 */

import EditTask from '../editing';
import Storage from '../storage';

const list = Storage.getFromStorage();

describe('Add and Delete task', () => {
  test('Should add a new item to the list', () => {
    const text = 'my task';
    EditTask.add(list, text);
    expect(list.length).toBe(1);
  });

  test('Description of the last added task should match the input', () => {
    expect(list[0].description).toMatch(/my task/);
  });

  test("Index of task should represent it's place in the list ", () => {
    expect(list[0].id).toBe(1);
  });

  test('Default status should be false', () => {
    expect(list[0].completed).toBe(false);
  });

  test('Should remove just one item from the list', () => {
    const text = 'my 2nd task';
    EditTask.add(list, text);
    EditTask.deleteTask(list, 1);

    expect(list.length).toBe(1);
  });

  test('Should remove the last item of the list', () => {
    EditTask.deleteTask(list, 0);

    expect(list.length).toBe(0);
  });
});


describe('Testing task-description editing function', () => {
  
  test("Should update second task's description", () => {
    EditTask.add(list, 'My task 1');
    EditTask.add(list, 'My task 2');

    EditTask.updateTask(list, 2, 'Updated')

    expect(list[1].description).toMatch(/Updated/)
    expect(list[0].description).toMatch(/My task 1/)
  })
})

describe('Testing status updating function', () => {
  test("Should update only first task's status", () => {
    EditTask.toggleBullet(list, 1)

    expect(list[0].completed).toBeTruthy()
    expect(list[1].completed).toBeFalsy()
  })
})

