var utils = {
    randomInt: function (start, end) {
        var num = start + (end - start) * Math.random();
        num = Math.floor(num);
        return num;
    }, 
};
console.log('load util')
module.exports = utils;