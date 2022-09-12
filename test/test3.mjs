// test3mjs
import assert from 'assert';

it('does not match from an es module', () => {
    assert.doesNotMatch('I will fail', /fails/);
});
