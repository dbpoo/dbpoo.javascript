/**
 * 01-判断是否是回文
 * @param str
 * @returns {boolean}
 */
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

/**
 * 02-去掉数组中重复的值
 * @param arr
 * @returns {Array}
 */
function unique(arr) {
    var tempObj = {};
    var data = [];
    for(var i=0; i<arr.length;i++){
        if(!tempObj[arr[i]]) {
            tempObj[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data;
}

/**
 * 03-统计一个字符串出现最多的字母
 * @param str
 * @returns {String}
 */
function findMaxDuplicateChar(str){
    if(str.length <=1){
        return str;
    }
    var tempObj = {};
    for(var i=0;i<str.length;i++){
        if(!tempObj[str.charAt(i)]){
            tempObj[str.charAt(i)] = 1;
        } else {
            tempObj[str.charAt(i)] += 1;
        }
    }
    var maxChar = '',maxVal = 1;
    for(var k in tempObj) {
        if(tempObj[k] > maxVal) {
            maxChar = k;
            maxVal = tempObj[k];
        }
    }
    return maxChar;
}

/**
 * 04-冒泡排序
 * @param arr
 * @returns {Array}
 */
function bubbleSort(arr){
    for(var i=0,len=arr.length;i<len-1;i++) {
        for(var j=i+1;j<len;j++) {
            if(arr[i]>arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

/**
 * 05-快速排序
 * @param arr
 * @returns {*}
 */
function quickSort(arr){
    if(arr.length <= 1) {
        return arr;
    }

    var leftArr = [];
    var rightArr = [];
    var tempArr = arr[0];

    for(var i=1;i<arr.length;i++) {
        if(arr[i] > tempArr) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }
    return [].concat(leftArr,tempArr,rightArr);
}

/**
 * 06-不借助临时变量，进行两个整数的交换
 * @param a
 * @param b
 * @returns {Array}
 */
function numSwap(a,b){
    b = b-a;
    a = a+b;
    b = a-b;
    return [a,b];
}

/**
 * 07-实现clone 五种数据类型Object Array Boolean Number String
 * @param obj
 * @returns {*}
 */
function clone(obj) {
    var temp;
    if(obj instanceof Array){
        temp = [];
        var i = obj.length;
        while(i--) {
            temp[i] = clone(obj[i]);
        }
        return temp;
    } else if (obj instanceof Object){
        temp={};
        for(var k in obj) {
            temp[k] = clone(obj[k]);
        }
        return temp;
    } else {
        return obj;
    }
}