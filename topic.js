/**
 * 01-判断是否是回文
 * 知识点：reverse()颠倒数组中元素的顺序
 * @param str
 * @returns {boolean}
 */
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

/**
 * 02-去掉数组中重复的值
 * 知识点：push()末尾添加一个或者多个元素
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
 * 知识点 concat 用户连接两个或者多个数组
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
 * 06-选择排序
 * @param arr
 * @returns {*}
 */
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

/**
 * 07-不借助临时变量，进行两个整数的交换
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
 * 08-实现clone 五种数据类型Object Array Boolean Number String
 * 知识点： instanceof判断一个变量是否是对象的实例 typeof 用以获取一个变量或者表达式的类型
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

/**
 * 09-生成指定长度随机字符串
 * 知识点：charAt指定位置的字符 Math.round四舍五入去整 Math.floor就近取整（x是正数舍小数，x是负数入小数） Math.ceil就近去整（x是正数入小数，x是负数舍小数）Math.random 0~1之间的随机数
 * @param n
 * @returns {string}
 */
function randomStr(n) {
    var str = 'abcdefghyijklmnopqrstuvwxyz0123456789';
    var temp = '';
    for(var i=0;i<n;i++){
        temp += str.charAt(Math.round(Math.random()*str.length));
    }
    return temp;
}