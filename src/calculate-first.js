function single_element(arr) {
    return arr
            .filter((val, key) => key % 2 == 1)
            .filter((val, key, newArr) => newArr.indexOf(val) == newArr.lastIndexOf(val));
}