import { Main } from './main';

describe('Main', () => {
  test('getValue should return the correct string without name', () => {
    const main = new Main('Hello world', undefined);
    const result = main.getValue();
    expect(result).toBe('Hello world!');
  });

  test('getValue should return the correct string with name', () => {
    const main = new Main('Hello world', 'John Doe');
    const result = main.getValue();
    expect(result).toBe('Hello world, John Doe!');
  });
});
