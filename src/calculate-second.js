function calculate_median(arr) {
    var tempArr = arr
            .filter((val, key) => key % 2 == 1)
            .sort((a, b) => a - b);

    var len = tempArr.length;

    if (len % 2 == 1) {
        return tempArr[(len - 1) / 2];
    }
    else {
        return (tempArr[len / 2 - 1] + tempArr[len / 2]) / 2;
    }
}
