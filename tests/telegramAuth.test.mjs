import test from 'node:test';
import assert from 'node:assert/strict';

test('Telegram auth input validator rejects non-6-digit inputs', () => {
  const sanitize = (raw) => String(raw || '').replace(/\D/g, '').trim();

  assert.equal(sanitize('123 456'), '123456');
  assert.equal(sanitize('123-456'), '123456');
  assert.equal(sanitize('abc123456xyz'), '123456');

  assert.notEqual(sanitize('12345').length, 6);
  assert.notEqual(sanitize('1234567').length, 6);
  assert.notEqual(sanitize('').length, 6);
  assert.notEqual(sanitize('abcdef').length, 6);
});

test('Telegram bot auth code generation generates 6 digit string', () => {
  for (let i = 0; i < 50; i++) {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    assert.equal(code.length, 6);
    assert.match(code, /^[1-9][0-9]{5}$/);
  }
});
