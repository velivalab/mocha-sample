// test3mjs
import assert from 'assert';

it('fail from an es module', () => {
    assert.fail('boom');
});

it('does not match from an es module', () => {
    assert.doesNotMatch('I will fail', /fail/);
});
