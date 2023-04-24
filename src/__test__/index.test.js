import fetchData from '../http';
import getLevel from '../function';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('calling fetchData with response status is OK', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 7,
  });

  const received = getLevel(3);
  const expected = 'Ваш текущий уровень: 7';

  expect(received).toMatch(expected);
});

test('calling fetchData with response status is not OK', () => {
  fetchData.mockReturnValue({
    status: 'not found',
  });

  const received = getLevel(3);
  const expected = 'Информация об уровне временно недоступна';

  expect(received).toMatch(expected);
});
