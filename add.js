function _add(a, b) {
  return a + b;
}

function add(a, b) {
  return _add(a, b) + 100;
}


module.exports = {
    add, 
    _add
}
