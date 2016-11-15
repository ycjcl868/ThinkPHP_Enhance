# 全栈自动化配置 [![ThinkPHP](http://shields.hust.cc/ThinkPHP-3.2-blue.svg)]() [![npm](http://shields.hust.cc/npm-3.10.8-brightgreen.svg)]() [![node](http://shields.hust.cc/node-4.4.3-green.svg)]() [![npm](http://shields.hust.cc/npm-3.10.8-brightgreen.svg)]() [![bower](http://shields.hust.cc/bower-1.7.9-yellow.svg)]()  [![gulp](http://shields.hust.cc/gulp-3.9.1-blue.svg)]()


> 前端采用Less + Gulp，后端采用ThinkPHP，后台配置composer，前端配置好bower、gulp、node。项目主要目的是快速进行前后端的开发，不必为一些前端公共库(jQuery、AngularJS、VueJS等)，后台PHP扩展到处找，以及不用担心静态文件(CSS、JS、Image)的压缩。修改了ThinkPHP的配置，避免了一些小错误和重复性工作。


## 使用方法

> 根目录下的Public目录里放有bower，公共前端库放在Public/plugins里。如果需要修改，`vi /Public/.bowerrc`改`directory`路径。

### 前端公用库安装

进入到Public目录下，命令行`bower install 公用库 --save`。(以jQuery为例)

![](http://7xi72v.com1.z0.glb.clouddn.com/16-11-3/7778301.jpg)

### 后台的安装
在根目录下，直接`composer install  xxx`

### 好用的脚本
根目录下有`Action.js`脚本，用来**添加/删除控制器**。

![](http://7xi72v.com1.z0.glb.clouddn.com/public/16-11-16/63195246.jpg)

使用方法：

```
***********Action控制器*************
usage(用法)：node Action/Action.js [-a/--add 添加控制器] [-d/--del 删除控制器] 控制器名
例如：添加一个名为UserAction.class.php的控制器，node Action -a User
且自动首字母大写
```

例如：
添加一个User控制器：

![](http://7xi72v.com1.z0.glb.clouddn.com/public/16-11-16/78330601.jpg)

要删除一个User控制器：

![](http://7xi72v.com1.z0.glb.clouddn.com/public/16-11-16/76383981.jpg)


### 静态文件的压缩

>  开发和部署分两个文件夹，开发时就用的`Apps/Home/View/[css,js,images]`，部署就用`Apps/Home/min`里面的[css,js,images]，这样就比较方便。**我只是压缩了Home目录的**

根目录下，打开终端，先`npm install`一下，然后直接`gulp`。

![](http://7xi72v.com1.z0.glb.clouddn.com/16-11-3/68288071.jpg)

如果要加目录(比如整个后台Admin)，得在根目录下的`gulpfile.js`进行修改：

![](http://7xi72v.com1.z0.glb.clouddn.com/16-11-3/91474908.jpg)



> 第一次写，大牛勿喷。有更好的建议，欢迎fork！



