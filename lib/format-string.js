module.exports = function formatString() {
    var instance = {};

    instance.dotNetStyle = function dotNetStyle() {
        var args = arguments;

        return args[0].replace(/{(\d+)}/g, function (match, number) {
            var argIndex = parseInt(number, 10) + 1;
            return typeof args[argIndex] != 'undefined' ? args[argIndex] : match;
        });
    };

    return instance;
}();

