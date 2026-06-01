import { move, img } from './app';

test('move should place img in a different cell', () => {
  const initialCell = img.parentNode;
  move();
  expect(img.parentNode).not.toBe(initialCell);
});