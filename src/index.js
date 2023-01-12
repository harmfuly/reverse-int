module.exports = function reverse (n) {
    let result = 0;
    result = Number(String(n).split('').reverse().join(''));
    return result;

}
