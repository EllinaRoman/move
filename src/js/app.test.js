import { move } from './app';

test('move should place img in a different cell', () => {
  const cells = document.querySelectorAll('.cell');
  const initialCell = img.parentNode;
  move();
  expect(img.parentNode).not.toBe(initialCell);
});