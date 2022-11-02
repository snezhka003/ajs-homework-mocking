import fetchData from '../http';
import getLevel from '../level';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call fetchData', () => {
  fetchData.mockReturnValue(JSON.stringify({}));

  getLevel(3);
  expect(fetchData).toBeCalledWith('https://server/user/3');
});
