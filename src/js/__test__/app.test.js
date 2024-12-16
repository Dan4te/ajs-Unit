import showHealth from '../app.js';

test('should healthy', () => {
  const received = showHealth({ name: 'Маг', health: 90 });
  expect(received).toBe('healthy');
});

test('should wounded', () => {
  const received = showHealth({ name: 'Маг', health: 40 });
  expect(received).toBe('wounded');
});

test('should critical', () => {
  const received = showHealth({ name: 'Маг', health: 10 });
  expect(received).toBe('critical');
});
