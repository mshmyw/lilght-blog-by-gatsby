---
title: Hello World
date: '2019-05-25'
published: true
layout: post
tags: ['markdown', 'hello', 'world']
category: example
path: /hello-world
---

# netlify 使用
- https://blog.angelxiang.com/
- https://ximenchuixue.netlify.com
-
Hello, this is an exciting post with three main points:

1. You can format your content using _markdown_
2. You can refer to images
3. You can include syntax highlighted code

![Furby](../assets/furby.png)

```js
console.log(`Hello world, 1 + 1 = ${1 + 1}`)
```
![Ele](../assets/404.gif)

# Look at this Video:

`video: https://www.youtube.com/embed/2Xc9gXyf2G4`
`youtube: https://www.youtube.com/watch?v=2Xc9gXyf2G4`
`youtube: 2Xc9gXyf2G4`

<!-- Begin -->
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="86" src="http://music.163.com/song/media/outer/url?id=27759600.mp3"></iframe>
<!-- End -->

## 音乐外链实现
网易云音乐提供单曲、专辑、歌单、电台节目的外链播放器，将外链播放器放在论坛、网站上，都可以免费播放。

如何使用外链播放器？

在网页版（music.163.com）进入单曲、歌单、专辑、电台节目页面后，点击 “生成外链播放器” 链接。
歌单和专辑外链播放器可以选择大中小三种尺寸，单曲和电台节目可以选择中小两种尺寸。你可以选择最适合你网站设计的尺寸。
还可以选择是否要自动播放，打上勾后，别人访问网站时播放器会自动开始播放。
最后将播放器的代码黏贴到你的网站上，大功告成！
其实就在你的网页上插入一个iframe…

Markdown 可以直接内联HTML代码，只要博客系统支持iframe调用即可。
比如本文的测试用例：

...

<!-- Spirits - KOKIA -->
<!-- Begin -->
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="86" src="//music.163.com/outchain/player?type=2&id=32069326&auto=0&height=66"></iframe>
<!-- End -->

...
相关参数:

参数	含义
width	宽度
height	高度
type	歌曲(1), 歌单(2), 电台(3)
id	歌曲ID号
auto	自动播放(1), 0手动播放(0)

# 视频
<iframe width="854" height="480" src="https://www.youtube.com/embed/xqf2DJgucsU" frameborder="0" allowfullscreen></iframe>

<iframe width="854" height="480" src="https://video.dtube.top/ipfs/QmZgXJwFNRAyUEuU36jReXtyjESeTWEGZpcJGuWSnbRTf1" frameborder="0" allowfullscreen></iframe>
