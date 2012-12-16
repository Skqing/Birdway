## 网站名称
[Birdway.org](http://birdway.org)

## 介绍
**Birdway.org**是基于[Node.js](http://nodejs.org)的定位系统，地图暂时采用百度的地图服务，将来有可能整合Google的地图服务

## 模块 
''   
	[async](https://github.com/caolan/async): 同步工具   
	[cluster](https://github.com/LearnBoost/cluster): Nodejs的多核服务器的管理   
	[connect-mongo](https://github.com/kcbanner/connect-mongo): MongoDB的session存储驱动    
	[connect-redis](https://github.com/visionmedia/connect-redis): Redis的session存储驱动  
	[ejs](https://github.com/visionmedia/ejs): 模板引擎   
	[eventproxy](https://github.com/JacksonTian/eventproxy): 任务或事件基于异步模式的实现   
	[express](http://expressjs.com): 基本框架
	[generic-pool](https://github.com/coopernurse/node-pool): Nodejs的通用资源池中间件   
	[gzippo](https://github.com/tomgco/gzippo): express的压缩静态文件的中间件   
	[http-proxy](https://github.com/nodejitsu/node-http-proxy):	Nodejs的一个全功能的HTTP代理中间件   
	[Nodemailer](https://github.com/andris9/Nodemailer): 邮件发送模块   
	[iconv-lite](https://github.com/ashtuchkin/iconv-lite): 文件格式转换       
	[imagemagick](): 图片处理工具   
	[mocha](): 函数测试工具   
	[moment](http://momentjs.com): 时间处理模块   
	[mongoose](https://github.com/learnboost/mongoose): MongoDB模型驱动    
	[mysql](https://github.com/felixge/node-mysql): mysql驱动   
	[nconf](https://github.com/flatiron/nconf): 配置文件处理类   
	[nib](): css代码混淆   
	[node-dev](https://github.com/fgnass/node-dev): 调试工具，监听文件改动，自动重启服务   
	[node-inspector](https://github.com/dannycoates/node-inspector): 调试工具   
	[nodemailer](https://github.com/andris9/nodemailer): 邮件处理模块  
	[node-uuid](https://github.com/broofa/node-uuid): UUID生成工具   
	[redis](): redis驱动   
	[request](http://github.com/mikeal/request): HTTP请求组件   
	[socket.io](http://socket.io): 像websocket一样实时的应用程序API   
	[socket.io-client](https://github.com/LearnBoost/socket.io-client): Socket.IO的客户端，支持Nodejs和浏览器   
	[socket.io-sessions](http://github.com/aviddiviner/Socket.IO-sessions): websocket的session存储工具      
	[supervisor](https://github.com/isaacs/node-supervisor): 监听文件改动，自动重启服务   
	[uglify-js](): JavaScript文件压缩工具   
	[validator](https://github.com/chriso/node-validator): Nodejs验证框架   
	[xss](): 防止xss攻击的组件
	[yaml-config](): 基于NODE_ENV来管理你的node.js应用程序的配置，所有的配置都定义在yaml中   
	[---]():xss
	[websocket-server](http://github.com/miksago/node-websocket-server): websocket服务
	[memcached](https://github.com/3rd-Eden/node-memcached): Nodejs的Memcached客户端    
	[mime](https://github.com/broofa/node-mime): 一个用于处理MIME类型的超级简单的实用工具库    
	[jqtpl](https://github.com/kof/node-jqtpl): jQuery的模板引擎   
	[jade](https://github.com/visionmedia/jade): 坚固耐用，美观大方，功能丰富的模板引擎   
''   
## 插件
``
    jQuery-1.7.2  
	artDialog-4.1.2
``
## 数据
acll.json：行政中心经纬度(Administrative center latitude and longitude) 数据来源：[阿里云](http://ditu.aliyun.com/jsdoc/map_api_city_lola.html)


## 关于pull request
所有提交都要严格遵循[Node编码规范](https://github.com/windyrobin/iFrame/blob/master/style.md)。
如果需要写C++的底层实现，那么请遵循[C++编码规范](http://google-styleguide.googlecode.com/svn/trunk/cppguide.xml)。

## 关于作者
Dolphin，屌丝JAVA程序员，致力于B/S开发，对PHP，javascript和前端开发一样有兴趣。
从2012年4月接触Node便对她产生了浓厚的兴趣，并且开始学校这种让OOP程序员看起来纠结，无从着手的语言，
但是Node给我个人带来的收获还是很大的她让我接触到了另一种不同的编程思想，她简洁，高效，迷人，所以有了这个**[Birdway](http://birdway.org)**，
希望Node大虾们多多指点，希望更多的开发者加入Node，也希望NodeJS能够发展的更完美。   
#### 联系方式   
邮箱={gmail:dolphinboyo@gmail.com, live:longxinanlan@msn.cn}   
QQ:569141948(非诚勿扰)   
个人主页:[DolphinBoy](http://dolphinboy.me)(可能您访问的时候还没搭建好呢！)

## 版本命名规范
**x.y.z**
y为奇数时表示当前版本为开发版，如：1.5.1、1.7.2；
y为偶数时表示当前版本为稳定版，如：1.6.3、1.8.2；

## License
( The LGPL License )
LGPL（GNU Lesser General Public License）

Copyright (c) 2012 dolphinboy and other birdway's contributors

GNU LESSER GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright © 2007 Free Software Foundation, Inc. <http://fsf.org/>

Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.

This version of the GNU Lesser General Public License incorporates the terms and conditions of version 3 of the GNU General Public License, supplemented by the additional permissions listed below.

0. Additional Definitions.
As used herein, “this License” refers to version 3 of the GNU Lesser General Public License, and the “GNU GPL” refers to version 3 of the GNU General Public License.

“The Library” refers to a covered work governed by this License, other than an Application or a Combined Work as defined below.

An “Application” is any work that makes use of an interface provided by the Library, but which is not otherwise based on the Library. Defining a subclass of a class defined by the Library is deemed a mode of using an interface provided by the Library.

A “Combined Work” is a work produced by combining or linking an Application with the Library. The particular version of the Library with which the Combined Work was made is also called the “Linked Version”.

The “Minimal Corresponding Source” for a Combined Work means the Corresponding Source for the Combined Work, excluding any source code for portions of the Combined Work that, considered in isolation, are based on the Application, and not on the Linked Version.

The “Corresponding Application Code” for a Combined Work means the object code and/or source code for the Application, including any data and utility programs needed for reproducing the Combined Work from the Application, but excluding the System Libraries of the Combined Work.

1. Exception to Section 3 of the GNU GPL.
You may convey a covered work under sections 3 and 4 of this License without being bound by section 3 of the GNU GPL.

2. Conveying Modified Versions.
If you modify a copy of the Library, and, in your modifications, a facility refers to a function or data to be supplied by an Application that uses the facility (other than as an argument passed when the facility is invoked), then you may convey a copy of the modified version:

a) under this License, provided that you make a good faith effort to ensure that, in the event an Application does not supply the function or data, the facility still operates, and performs whatever part of its purpose remains meaningful, or
b) under the GNU GPL, with none of the additional permissions of this License applicable to that copy.
3. Object Code Incorporating Material from Library Header Files.
The object code form of an Application may incorporate material from a header file that is part of the Library. You may convey such object code under terms of your choice, provided that, if the incorporated material is not limited to numerical parameters, data structure layouts and accessors, or small macros, inline functions and templates (ten or fewer lines in length), you do both of the following:

a) Give prominent notice with each copy of the object code that the Library is used in it and that the Library and its use are covered by this License.
b) Accompany the object code with a copy of the GNU GPL and this license document.
4. Combined Works.
You may convey a Combined Work under terms of your choice that, taken together, effectively do not restrict modification of the portions of the Library contained in the Combined Work and reverse engineering for debugging such modifications, if you also do each of the following:

a) Give prominent notice with each copy of the Combined Work that the Library is used in it and that the Library and its use are covered by this License.
b) Accompany the Combined Work with a copy of the GNU GPL and this license document.
c) For a Combined Work that displays copyright notices during execution, include the copyright notice for the Library among these notices, as well as a reference directing the user to the copies of the GNU GPL and this license document.
d) Do one of the following:
0) Convey the Minimal Corresponding Source under the terms of this License, and the Corresponding Application Code in a form suitable for, and under terms that permit, the user to recombine or relink the Application with a modified version of the Linked Version to produce a modified Combined Work, in the manner specified by section 6 of the GNU GPL for conveying Corresponding Source.
1) Use a suitable shared library mechanism for linking with the Library. A suitable mechanism is one that (a) uses at run time a copy of the Library already present on the user's computer system, and (b) will operate properly with a modified version of the Library that is interface-compatible with the Linked Version.
e) Provide Installation Information, but only if you would otherwise be required to provide such information under section 6 of the GNU GPL, and only to the extent that such information is necessary to install and execute a modified version of the Combined Work produced by recombining or relinking the Application with a modified version of the Linked Version. (If you use option 4d0, the Installation Information must accompany the Minimal Corresponding Source and Corresponding Application Code. If you use option 4d1, you must provide the Installation Information in the manner specified by section 6 of the GNU GPL for conveying Corresponding Source.)
5. Combined Libraries.
You may place library facilities that are a work based on the Library side by side in a single library together with other library facilities that are not Applications and are not covered by this License, and convey such a combined library under terms of your choice, if you do both of the following:

a) Accompany the combined library with a copy of the same work based on the Library, uncombined with any other library facilities, conveyed under the terms of this License.
b) Give prominent notice with the combined library that part of it is a work based on the Library, and explaining where to find the accompanying uncombined form of the same work.
6. Revised Versions of the GNU Lesser General Public License.
The Free Software Foundation may publish revised and/or new versions of the GNU Lesser General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.

Each version is given a distinguishing version number. If the Library as you received it specifies that a certain numbered version of the GNU Lesser General Public License “or any later version” applies to it, you have the option of following the terms and conditions either of that published version or of any later version published by the Free Software Foundation. If the Library as you received it does not specify a version number of the GNU Lesser General Public License, you may choose any version of the GNU Lesser General Public License ever published by the Free Software Foundation.

If the Library as you received it specifies that a proxy can decide whether future versions of the GNU Lesser General Public License shall apply, that proxy's public statement of acceptance of any version is permanent authorization for you to choose that version for the Library.

See the [LGPL](http://www.gnu.org/licenses/lgpl.html)
