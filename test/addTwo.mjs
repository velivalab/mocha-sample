// app.mjs
import { addTwo } from '../app/addTwo.mjs';
import assert from 'assert';

it('should add to numbers from an es module', () => {
    assert.strictEqual(addTwo(3), 5);
});

it('should add to numbers from an es module', () => {
    assert.equal(addTwo(4), 6);
});
