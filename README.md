## JS基础算法 
#### [topic.js](https://github.com/dbpoo/dbpoo.javascript/blob/master/topic.js)

- 判断是否是回文
- 去掉数组中重复的值
- 统计一个字符串出现最多的字母
- 冒泡排序
- 快速排序
- 选择排序
- 不借助临时变量，进行两个整数的交换
- 实现clone 
- 生成指定长度随机字符串
- 闭包

## 正则表达式
#### [regexp.js](https://github.com/dbpoo/dbpoo.javascript/blob/master/regexp.js)

```
//正整数
/^[0-9]*[1-9][0-9]*$/;
//负整数
/^-[0-9]*[1-9][0-9]*$/;
//正浮点数
/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;   
//负浮点数
/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;  
//浮点数
/^(-?\d+)(\.\d+)?$/;
//email地址
/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
//url地址
/^[a-zA-z]+://(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/;
或：^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$ 
//年/月/日（年-月-日、年.月.日）
/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
//匹配中文字符
/[\u4e00-\u9fa5]/;
//匹配帐号是否合法(字母开头，允许5-10字节，允许字母数字下划线)
/^[a-zA-Z][a-zA-Z0-9_]{4,9}$/;
//匹配空白行的正则表达式
/\n\s*\r/;
//匹配中国邮政编码
/[1-9]\d{5}(?!\d)/;
//匹配身份证
/\d{15}|\d{18}/;
//匹配国内电话号码
/(\d{3}-|\d{4}-)?(\d{8}|\d{7})?/;
//匹配IP地址
/((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/;
//匹配首尾空白字符的正则表达式
/^\s*|\s*$/;
//匹配HTML标记的正则表达式
< (\S*?)[^>]*>.*?|< .*? />;
//sql 语句
^(select|drop|delete|create|update|insert).*$
//提取信息中的网络链接
(h|H)(r|R)(e|E)(f|F) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)? 
//提取信息中的邮件地址
\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)* 
//提取信息中的图片链接
(s|S)(r|R)(c|C) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)? 
//提取信息中的 IP 地址
(\d+)\.(\d+)\.(\d+)\.(\d+)
//取信息中的中国手机号码
(86)*0*13\d{9} 
//提取信息中的中国邮政编码
[1-9]{1}(\d+){5} 
//提取信息中的浮点数（即小数）
(-?\d*)\.?\d+ 
//提取信息中的任何数字
(-?\d*)(\.\d+)?
//电话区号
^0\d{2,3}$
//腾讯 QQ 号
^[1-9]*[1-9][0-9]*$ 
//帐号（字母开头，允许 5-16 字节，允许字母数字下划线）
^[a-zA-Z][a-zA-Z0-9_]{4,15}$ 
//中文、英文、数字及下划线
^[\u4e00-\u9fa5_a-zA-Z0-9]+$
```

## 常用js
#### [function.js](https://github.com/dbpoo/dbpoo.javascript/blob/master/function.js)

## 事件工具集
#### [event.js](https://github.com/dbpoo/dbpoo.javascript/blob/master/event.js)

## jQuery => ES6
- 提供选择不同浏览器内核的支持方法 [You Might Not Need jQuery ](http://youmightnotneedjquery.com/) 

- IE10以上浏览器的jQuery替代文档 [You Don't Need jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README.zh-CN.md) 

## 输入URL到页面加载完成的过程
- 输入地址
- 浏览器查找域名的 IP 地址
- 这一步包括 DNS 具体的查找过程，包括：浏览器缓存->系统缓存->路由器缓存...
- 浏览器向 web 服务器发送一个 HTTP 请求
- 服务器的永久重定向响应（从 http://example.com 到 http://www.example.com）
- 浏览器跟踪重定向地址
- 服务器处理请求
- 服务器返回一个 HTTP 响应
- 浏览器显示 HTML
- 浏览器发送请求获取嵌入在 HTML 中的资源（如图片、音频、视频、CSS、JS等等）
- 浏览器发送异步请求

## window.onload与$(document).ready() 区别
- 主要区别 window.onload 必须等到页面所有元素加载完成后执行，$(document).ready() 只需要DOM结构加载完毕后就会执行。
- 次要区别 window.onload 唯一性，只会执行定义的最后一个，$(document).ready() 可以有多个，并且每个在DOM加载完毕后都会执行。

## cookies，sessionStorage 和 localStorage 的区别
- 存储大小区别
1. cookie数据大小不能超过4k
2. sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大

- 有效时间区别
1. localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
2. sessionStorage 数据在当前浏览器窗口关闭后自动删除
3. cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

## 哪些前端性能优化的方法
1. 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器
2. 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数
3. 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能
4. 当需要设置的样式很多时设置className而不是直接操作style
5. 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作
6. 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)
7. 图片预加载，将样式表放在顶部，将脚本放在底部加上时间戳
8. 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢

## HTML5的离线储存
- 页面头部像下面一样加入一个manifest的属性
- 在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。离线的情况下，浏览器就直接使用离线存储的资源
    
## DOM操作
```
createDocumentFragment() //创建一个DOM片段
createElement() //创建一个元素
createTextNode() //创建一个文本节点

appendChild() //添加
removeChild() //删除
replaceChild() //替换
insertBefore() //插入

getElementByID() //ID查找
getElementsByName() //Name查找
getElementsByTagName() //标签查找
```

## null，undefined 的区别
- null 表示一个对象是“没有值”的值，也就是值为“空”，null的类型(typeof)是object
- undefined 表示一个变量声明了没有初始化(赋值)，undefined的类型(typeof)是undefined

## 垂直居中问题
- 方法1 position:relative实现
```css
body.html{
    width:100%;
    height:100%;
}
.box{
    width:300px;
    height:300px;
    position: relative;
    top:50%;
    margin-top:-150px;
    margin:0 auto;
}
```
- 方法2 flex实现
```css
body.html{
    width:100%;
    height:100%;
}
body{
    display: flex;
    align-items: center;
    justify-content: center;
}
.box{
    width:300px;
    height:300px;
}
```

## mobile web retina 1px边框解决方案
```css
div{
    border-width:1px;
}
@media (-webkit-device-pixel-ratio: 2) {
    div{
        border-width:0.5px;
    }
}
```
## 移动浏览器适配问题
- 移动设备尺寸大全
[Devices Size](https://material.io/devices/)
- 淘宝解决方案
[flexible](https://github.com/amfe/lib-flexible)
[使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)