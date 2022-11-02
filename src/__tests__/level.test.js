import fetchData from '../http';
import getLevel from '../level';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call fetchData for response OK', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 55,
  });

  const received = getLevel(3);
  const expected = 'Ваш текущий уровень: 55';

  expect(received).toMatch(expected);
});

test('should call fetchData for response not OK', () => {
  fetchData.mockReturnValue({
    status: 'not found',
  });

  const received = getLevel(3);
  const expected = 'Информация об уровне временно недоступна';

  expect(received).toMatch(expected);
});
