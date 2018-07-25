##  electron-ui是什么

electron-ui是基于electron和electron-vue扩展出来的一套基础的应用框架，目的是为了快速的搭建炫酷的桌面应用，其实也算不上框架只是一种解决方案而已，让electron后来的开发者在少采坑的情况下搭建出相对漂亮而快速的应用

## 为什么要做这个

公司的有个项目使用electron搭建的，最开始只是套了个网页，后来随着应用的上线，发现这种套网页的样式比较丑陋，页面加载很不流畅，网上看了大部分的electron应用也没有找到几个比较好看的，所以自己业余时间写了这么一个东西，一来可以应用到公司产品上，而来方便以后的开发，可以直接拿来当做基础框架使用

## electron-ui有哪些特点或者解决了哪些问题

1.采用electron-vue框架，并且把依赖升级到最新版本，例如webpack4等，直接写vue还是比较舒服的
2.优化了多窗口的加载速率，以往打开一个窗口要加载html，css，js文件后还要解析vue渲染数据等等，所以弹窗打开速度很慢，现在采用路由跳转的方式，弹窗直接变为路由跳转，所以弹窗速度秒开
3.实现了vuex的多窗口的数据同步问题，多个窗口同步store数据
4.封装了窗口间的通讯，发送和接收信息简单方便
5.制作了窗口转换的部分动画，效果上还可以
6.页面框架已经搭建好，包括header，body，footer，可以按需引入
7.制作了背景样式可以更换图片和背景色甚至字体颜色

## 演示效果如何（gif不能录制太大的效果不好）

![GIF.gif](https://upload-images.jianshu.io/upload_images/13048954-8edb3f68a8d2ea43.gif?imageMogr2/auto-orient/strip)



![6788.gif](https://upload-images.jianshu.io/upload_images/13048954-052e7109b0460b65.gif?imageMogr2/auto-orient/strip)

![9F.gif](https://upload-images.jianshu.io/upload_images/13048954-ae64fd9bca2caad7.gif?imageMogr2/auto-orient/strip)

![888F.gif](https://upload-images.jianshu.io/upload_images/13048954-08b5bcd404f4e165.gif?imageMogr2/auto-orient/strip)

![Gen.gif](https://upload-images.jianshu.io/upload_images/13048954-5ac484095065a54e.gif?imageMogr2/auto-orient/strip)

![x.gif](https://upload-images.jianshu.io/upload_images/13048954-d26c14eb2c3bf87a.gif?imageMogr2/auto-orient/strip)

![y.gif](https://upload-images.jianshu.io/upload_images/13048954-6d9d8bf954a7e6b9.gif?imageMogr2/auto-orient/strip)

## 补充
后续功能还在开发中。。。。
