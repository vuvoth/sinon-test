const { assert } = require('chai');
const number = require('./add');
const sinon = require('sinon');
const { add2 } = require('./other');
describe("Test", () => {
    it("Test", () => {
        sinon.stub(number, "_add").callsFake((a, b) => {
            return 10
        });
        console.log(number._add(1, 3));
        console.log(add2());
        assert.equal(100, number.add(0, 0));
    });
})