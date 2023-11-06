function CheckString(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    var array1 = str1.split("");
    var array2 = str2.split("");
    var _loop_1 = function (index) {
        var requiredIndex = array2.findIndex(function (val) { return val === array1[index]; });
        if (requiredIndex === -1) {
            return { value: false };
        }
        array2.splice(requiredIndex, 0);
    };
    for (var index = 0; index < array1.length; index++) {
        var state_1 = _loop_1(index);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return true;
}
console.log(CheckString('', ''));
