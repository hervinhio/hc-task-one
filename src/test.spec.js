const assert = require("assert");
const circleSurface = require('./index');

describe('Circle Maths tests', () => {
  it('should throw an exception when string radius is passed', () => {
    assert.throws(() => circleSurface(''), Error);
  });

  it('should throw an exception when null radius is passed', () => {
    assert.throws(() => circleSurface(null), Error);
  })

  it('should throw an exception when undefined radius is passed', () =>  {
    assert.throws(() => circleSurface(), Error);
  });

  it('should return correct radius when valid radius is passed', () => {
    assert.strictEqual(circleSurface(73), (73^2 * Math.PI))
  });
});
