<!--
 * @Descripttion: 
 * @version: 
 * @Author: Yunjie Ge
 * @Date: 2020-11-12 09:16:13
 * @LastEditors: Yunjie Ge
 * @LastEditTime: 2020-11-12 09:56:31
-->
## 一、文本折行的工作原理是怎样的?

> 与计算机科学中的很多事情类似，文本折行听起来简单易行，但实际上并非如此。这方面的算法有很多， 最流行的方案主要是贪婪算法和 Knuth-Plass 算法(我目前也不太懂，书上是这么说的，以后有时间再做研究)。贪婪算法的工作原理是每次分析一行，把尽可能多的 单词(当连字符可用时则以音节为单位)填充进该行;当遇到第一个装不下的单词或音节时，就移至下一 行继续处理。
Knuth-Plass 算法(得名于开发它的工程师)的工作方式就要高级很多。它会把整段文本纳入考虑的范 畴，从而产生出美学上更令人愉悦的结果，但其计算性能要明显差一些。
绝大多数桌面文字处理程序采用 Knuth-Plass 算法。不过出于性能考虑，浏览器目前采用的是贪婪算法， 因此它们的两端对齐效果往往不尽如人意。

## 二、解决方案

> 使用hyphens: auto;text-align: justify；这两个属性解决
具体使用方式，请看案例
<a herf="./index.html">文本折行案例</a>
需要注意的是在使用**hyphens: auto;** 的时候应该指定html使用的是那种语言

## 三、关于未来

> 在未来，我们可以更细粒度地控制连字符的行为，因为 CSS 文本(第四版)(http://dev.w3.org/csswg/css-text-4)计划引入一些相关的新属性，比如:
+ hyphenate-limit-lines
+ hyphenate-limit-chars
+ hyphenate-limit-zone
+ hyphenate-limit-last 
+ hyphenate-character