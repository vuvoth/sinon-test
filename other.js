const { add, _add } = require("./add");

function add2() {
    return _add(3, 4);
}


module.exports = {
    add2
}