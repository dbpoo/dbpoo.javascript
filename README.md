## JS基础算法
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

## jquery替代教程
- 提供选择不同浏览器内核的支持方法 [You Might Not Need jQuery ](http://youmightnotneedjquery.com/) 

- IE10以上浏览器的jQuery替代文档 [You Don't Need jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README.zh-CN.md) 