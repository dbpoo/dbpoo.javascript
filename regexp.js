/**
 * /d 匹配任意数字，等价于[0-9]
 * /D 匹配任意非数字，等价于[^0-9]
 * /w 匹配包括下划线的任意字符，等价于[A-Za-z0-9_]
 * /W 匹配任何非单词字符，等价于[^A-Za-z0-9_]
 * /s 匹配任何空白字符，包括空格、制表符、换页符等
 * /S 匹配任何非空白字符
 * /g 表示该表达式将用来在输入字符串中查找所有可能的匹配，返回的结果可以是多个。如果不加/g最多只会匹配一个
 * /i 匹配的时候不区分大小写 /test/i 匹配到test TEST tEsT
 * /m 表示多行匹配，什么是多行匹配呢？就是匹配换行符两端的潜在匹配。影响正则中的^$符号
 * \ 代表转义  \. 转义就是.
 * ^ 排除[^abc] 除了a b c任何字符
 * - 区间[a-z] 匹配a到z之剑的字符
 * /^$/ /^匹配开始 $/匹配结束
 * ？ 字符可选 /t?est/ test est
 * + 字符出现一次或多次 /t+est/ ttest tttest 不能匹配est
 * * 字符出现零次或多次 /t*est/ ttest tttest est
 * {num} 字符重复次数 /a{4}/ aaaa
 * {num,num} 字符重复次数区间 /a{4-10}/ aaaa aaaaa
 * | 表示或
 * match() 根据pattern进行正则匹配,如果匹配到,返回匹配结果,如匹配不到返回null
 * exec() 对string进行正则处理,并返回匹配结果.array[0]为原字符串,array[i]为匹配在整个被搜索字符串中的位置
 * replace() 根据pattern进行正则匹配,把匹配结果替换为replacement
 * test() 测试string是否包含有匹配结果，包含返回true，不包含返回false
 */
var emailExp = /^[\w-]+(\.[w-]+)*@[\w-]+[\.[\w-]+]+$/;
var ipExp = /^(\d+)\.(\d+)\.(\d+)\.(\d+)\$/g;
var phoneExp = /^0?1[3|4|5|7|8][0-9]\d{8}$/;

/**
 * 删除字符串前后空格
 * @param str
 * @returns {string}
 */
function trim(str){
    var str = (str || '').replace(/^\s+|\s+$/g,'');
    return str;
}