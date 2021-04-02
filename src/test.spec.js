const assert = require("assert");
const { CircleMath } = require(".");

describe('Circle Maths tests', () => {
  it('should throw an exception when string radius is passed', () => {
    assert.throws(() => CircleMath.surface(''), Error);
  });

  it('should throw an exception when null radius is passed', () => {
    assert.throws(() => CircleMath.surface(null), Error);
  })

  it('should throw an exception when undefined radius is passed', () =>  {
    assert.throws(() => CircleMath.surface(), Error);
  });

  it('should return correct radius when valid radius is passed', () => {
    assert.strictEqual(CircleMath.surface(73), (73^2 * Math.PI))
  });
});
