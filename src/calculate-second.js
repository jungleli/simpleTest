function calculate_median(arr) {
    var tempArr = arr
            .filter((val, key) => key % 2 == 1)
            .sort((a, b) => a - b);

    var len = tempArr.length;

    return len % 2 == 1 ? tempArr[(len-1)/2] :(tempArr[len / 2 - 1] + tempArr[len / 2]) / 2;

}
