import Storage from '../storage.js'
import { EditTask, Task}  from '../editing.js';


jest.mock('../storage.js')

describe('Test Clear completed function using mock', () => {
  beforeAll(() => {
    Storage.mockImplementation(() => ({
      localItem: [],
      getFromStorage() {
        return this.localItem
      },
      saveToStorage(arr) {
        this.localItem.push(arr);
      },
    }));
  });

  it("Should remove 3 (completed) out of 5 tasks", () => {
    const storage = new Storage
    let list = storage.getFromStorage()

    const task1 = new Task(list, 'task 1', true)
    const task2 = new Task(list, 'task 2', true)
    const task3 = new Task(list, 'task 3', true)
    const task4 = new Task(list, 'task 4')
    const task5 = new Task(list, 'task 5')

    storage.saveToStorage(task1)
    storage.saveToStorage(task2)
    storage.saveToStorage(task3)
    storage.saveToStorage(task4)
    storage.saveToStorage(task5)


    list = EditTask.clearCompleted(list)
    
    expect(list.length).toBe(2)
    expect(list[0].completed).toBeFalsy()
    expect(list[1].completed).toBeFalsy()
  })

});

