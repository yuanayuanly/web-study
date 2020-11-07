//数组可以理解为一个列表
var myList=['apples','oranges','bananas'];
//加载网页后打开控制台，分别输入myList，myList[0],myList[1]看看效果
//数组中添加元素：
myList[3]='pineapples';
//数组中修改元素：(字符串，数字，函数，甚至其他数组都可以放入数组中)
myList[0]='watermelon';
//注意：下面的go函数放入数组中后的效果与变量名字一样，因为在JS中函数就是一中变量，试下在控制台中执行myList[1]与myList[1]（）的区别
function go(){
    alert('hi');
}
myList[1]=go;
//数组中包含数组情况：
var myList2=['hi',['hello','bye']];
//在控制台中输入数组名.shift()，它的作用是删除并返回数组的第一项,也可以再定义一个新变量储存删掉的项
//在控制台中输入数组名.pop(),它的作用是删除并返回数组的最后一项
/*在forEach()方法中(注意下面代码中括号的用法)我们可以使用函数，函数中自带value和index两个参数
value显示值，index显示索引位置,调用以后会在函数中依次遍历数组中的每一项，每一次遍历，value，index都会被赋值，
然后我们可以输出这些值，通过console.log()方法可以输出value和index的值，也可以将console.log()换成alert方法
更直观的输出(运行后会弹窗三次分别调用数组中的每个项):
alert('I have'+value+'in my shopping bag') */

var myList3=['aaa','bbb','ccc'];
myList3.forEach(function(value,index){
    console.log(value,index);
});

//老式浏览器可能会不支持forEach的方法，然后出现报错，提示forEach is not defined,老式的解决办法就是手动写一个循环来遍历数组
//常见有：while循环，do while 循环，for循环
//(times=times+1也可以写成times++的形式)
var times=0;
while(times<10){
    console.log('tried it',times);
    times=times+1;
}
/*do while循环（这次的案例中与while循环的执行结果相同，唯一区别是do while循环会先执行一次，然后再执行条件判断，而在while循环中
会先执行判断，如果一开始就不符合条件，那么程序立马结束）
do{
    console.log('tried it',times);
    times=times+1;
}while(times<10)
*/ 
/*for循环 
for(var i=0;i<10;i++){
    console.log('i is',i);
}
*/ 
var list1=['a','b','c'];
for(var i=0;i<list1.length;i++){
    console.log(list1[i]);
}