#### let 和 const
1. 不会变量提升
2. 块级作用域
3. 允许重复声明

#### 解构赋值
let [x,y,...z] = ['a']
1. 默认赋值
2. 已有值 默认赋值不会执行
* 对象解构赋值
let {x,y} = {x:"haha",y:"xixi"}
* 如果变量名与属性名不一致
let {x:baz} = {x:"haha",y:"xixi"}

#### 模板字符串
var a = `this is a ${x+y} 's value`