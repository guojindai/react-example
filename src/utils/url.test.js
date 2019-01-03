import { cutPath } from './url';

describe('cutPath', () => {
  test('/a/b => /a', () => {
    expect(cutPath('/a/b')).toBe('/a');
  });
  test('/a => /', () => {
    expect(cutPath('/a')).toBe('/');
  });
  test('/ => /', () => {
    expect(cutPath('/')).toBe('/');
  });
  test('null => null', () => {
    expect(cutPath(null)).toBe(null);
  });
  test('undefined => undefined', () => {
    expect(cutPath(undefined)).toBe(undefined);
  });
  test('\'\' => \'\'', () => {
    expect(cutPath('')).toBe('');
  });
});
