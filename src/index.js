module.exports = function reverse (n) {
    let result = 0;
    result = parseInt(String(n).split('').reverse().join(''));
    return result;

}
