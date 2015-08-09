var tape = require("tape"),
    isTextInputElement = require("../src/index");


tape("isTextInputElement(value) should return true when the value is a text input element", function(assert) {
    assert.equal(isTextInputElement({
        nodeName: "INPUT",
        type: "color"
    }), true);
    assert.end();
});
