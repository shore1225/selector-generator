# selector-generator

Generate a unique and shortest HTML element path.

- 简体中文[zh_CN](README.zh_CN.md)
- English[en_US](README.md)

If your project needs to take element nodes and do something with them (say you want to configure user guidance for an element, but you don't want to couple this code in the project code), But there are concerns that the nodes in the path will change. This dependency may help you.

## Getting Started

You can use it according to the instructions below

### Installation

```
npm i dom-selector-generator
```

### Usage

```
import { selectorGenerator } from 'dom-selector-generator';

const element = document.querySelector('#root > div.card > p > code');
selectorGenerator(element);     // ---> 'p > .target'
```
