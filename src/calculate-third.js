function even_group_calculate_average(arr) {
    var result = [];
    var tempArr = arr
            .filter((val, key) => key % 2 == 1)
            .filter(val => val%2 ==0);
    var newArr = tempArr.reduce(function(a, b) {
        var len = b.toString().length;
        a[len] = a[len] || [];
        a[len].push(b);
        return a;
    }, {});

    for(var i in newArr) {
        var avg = arr_calculate_average(newArr[i]);
        result.push(avg);
    }
    return result.length ? result : [0];

    function arr_calculate_average(newArr) {
        //var newArr2 = newArr[i];
        return newArr.reduce(function (a, b) {
                return a + b;
            }) / newArr.length;
    }
}
