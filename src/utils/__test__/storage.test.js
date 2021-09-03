import Storage from '../storage.js'
import EditTask from '../editing';

jest.mock('../storage.js')

describe('Test local storage module', () => {
  beforeAll(() => {
    Storage.mock(() => ({
      localItem: [],
      getFromStorage() {
        return this.localItem
      },
      saveToStorage(arr) {
        this.localItem.push(arr);
      },
    }));
  });
});

it('')

