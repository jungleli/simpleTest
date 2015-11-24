function single_element(arr) {
    var tempArr = [];

    for(var i=0; i<arr.length; i++){
        if(i%2==1){
            tempArr.push(arr[i]);
        }
    }
    var result = [];
    for(var j=0; j<tempArr.length;j++){
        var index = result.indexOf(tempArr[j]);
        if(index == -1){
            result.push(tempArr[j]);
        }
        else {
            result.splice(index, 1);
        }
        }
    if(result.length==1){
        result.shift();
    }
    console.log(result);
    return result;
}
