---
draft: false
author: ximenchuixue
title: test
date: 2019-08-21 00:02:14
tags: []
---

# test
https://github.com/zhangzhengyi12/zhangzhengyi12.github.io
# hit counter

<img src="http://39.108.57.183:8020/api/v1/count/tag.svg?url=http%3A%2F%2Fblog.angelxiang.com" alt="Hits"/>

```javascript{1-2,22}{numberLines: true}
// In your gatsby-config.js
// Let's make this line very long so that our container has to scroll its overflow…hhhhhhhhhhhhhhhhhhhhhhhhhhhhh234
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 756,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```
