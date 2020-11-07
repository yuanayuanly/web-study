function go(){
    alert('hi');
    alert('hey,there');
}
function hi(name,age){
    alert(name);
    alert(age);
}
//1：仅仅创建go函数还不够，还需要下面的代码调用go函数,也可以调用多次
go();
go();
hi('will',34);
//2：也可以像下面这样写(先定义好全局变量，再调用,缺点是变量内容是固定的，没有参数可以改变)
var name='haha';
var age=100;
function hello(){
    alert(name);
    alert(age);
}
hello();

//3：return的作用
function add(num1,num2){
    return num1+num2;   
//执行return后的代码后程序就会跳出函数，比如这一行加上代码alert('hello'),返回结果中也不会出现hello 
}
var sum=add(1,2);
alert(sum);
//上面两行代码也可以简化为alert(add(1,2))
function xixi(name,age){
    if(age<20){
        return name+'!'; 
    }else{
        return name;
    }     
}
alert(xixi('小王',21));



