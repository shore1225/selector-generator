# selector-generator

生成唯一且最短的 HTML 元素路径

- English[en_US](README.md)
- 简体中文[zh_CN](README.zh_CN.md)

如果您的项目需要获取元素节点并对它们做一些事情（比如您想要为一个元素配置用户指南，但是您不想将此代码与项目代码相结合），但是路径中的节点可能会发生变化。这个依赖项可能会对您有所帮助。

## 如何开始

您可以按照下面的说明使用它

### 安装

```
npm i dom-selector-generator
```

### 用法

```
import { selectorGenerator } from 'dom-selector-generator';

const element = document.querySelector('#root > div.card > p > code');
selectorGenerator(element);     // ---> 'p > .target'
```
