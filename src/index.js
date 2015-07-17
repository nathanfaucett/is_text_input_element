var indexOf = require("index_of"),
    isNullOrUndefined = require("is_null_or_undefined");


var supportedInputTypes = [
    "color", "date", "datetime", "datetime-local", "email", "month", "number",
    "password", "range", "search", "tel", "text", "time", "url", "week"
];


module.exports = isTextInputElement;


function isTextInputElement(value) {
    return !isNullOrUndefined(value) && (
        (value.nodeName === "INPUT" && indexOf(supportedInputTypes, value.type) !== -1) ||
        value.nodeName === "TEXTAREA"
    );
}
