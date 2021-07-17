# 贴合业务地聊下react diff

**前言**

目前我搜索到关于react diff的文章有两个问题：

1.不少文章直接讲diff算法，甚至还会和Vue2/Vue3的diff算法做对比。这样的角度太学术了，缺少从业务实际角度对diff可能造成的问题的阐述。

2.从实际业务角度的文章又比较老旧，都是class组件时代的，目前大家都在使用hooks了，但是缺少对diff会对函数式组件造成影响的阐述。

**Why（为什么要了解react的diff？）**

不了解diff的机制，随便乱设key值，你会遇到以下问题：

1.页面更新时的性能差，甚至出现明显的页面闪动

2.子组件的useEffect钩子的行为与预期不符（希望重新初始化但没有，或者希望不要重新初始化但是有）

3.组件的自身的状态没有被清除，甚至被转移到其他组件

这些都是我在实际项目开发中真实遇到的问题，对业务造成了不同程度的影响。

**What(我们要回答什么问题？)**

1.为什么不能用index作为key，会导致什么问题？

2.如果不用列表的index作为key，那你用什么作为key?

（1）如果用item的某一属性的值作为key

a.你怎么能确定是唯一的？

i.如果说值就是大概率是唯一的，那么是一个bad practice

ii.如果说服务端生成id的时候有唯一标识则问，如果没有标识怎么办？

（2）生成永远唯一的随机数作为key

（3）用idx++的方式生成key的值

这三个哪一个是最佳实践？

Examples
1.论用key作为index会对函数式组件造成的影响