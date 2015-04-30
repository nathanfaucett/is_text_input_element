var assert = require("assert"),
    isTextInputElement = require("../src/index");


describe("isTextInputElement", function() {
    it("should return true when the value is a text input element", function() {
        assert.equal(isTextInputElement({
            nodeName: "INPUT",
            type: "color"
        }), true);
    });
});
