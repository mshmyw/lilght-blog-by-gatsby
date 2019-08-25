const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

const postName = process.argv[2];
const postPath = path.resolve(__dirname, 'content/posts', `${postName}.md`);

const writeStream = fs.createWriteStream(postPath);
writeStream.write(`---
draft: false
author: ximenchuixue
title: ${postName}
date: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}
tags: []
---
`);
