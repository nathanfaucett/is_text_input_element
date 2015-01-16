var supportedInputTypes = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
};

module.exports = function isTextInputElement(obj) {
    return obj != null && (
        (obj.nodeName === "INPUT" && supportedInputTypes[obj.type]) ||
        obj.nodeName === "TEXTAREA"
    );
};
