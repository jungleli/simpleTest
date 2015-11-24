function calculate_median(arr) {
    var tempArr = [];

    for(var i=0; i<arr.length; i++){
        if(i%2==1){
            tempArr.push(arr[i]);
        }
    }

    var len = tempArr.length;

    if(len%2 ==1){
        return tempArr[(len-1)/2];
    }
    else{
        return (tempArr[len/2-1] + tempArr[len/2])/2;
    }
}
