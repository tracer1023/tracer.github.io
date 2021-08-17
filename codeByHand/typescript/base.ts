// 基础类型
//1.布尔值
let isDone:boolean = false;

//2.数字
let dec:number = 6;

//3.字符串
let name1: string = 'bob';

//4.数组
//第一种，可以在元素类型后面接上[]
let list:number[] = [1,2,3]
//第二种方式是使用数组泛型，Array<元素类型>
let list2:Array<number> = [1,2,3]

//5.元组---表示一个已知元素数量和类型的数组
let x:[string,number]
x = ['hello',3]
//访问一个已知索引的元素，会得到正确的类型
console.log(x[0].substr(1))

//5.枚举
enum Color {
    Red,
    Green,
    Blue
}

// 6.类型断言
//其一，尖括号写法
let someValue:any = "this is a string"
let stringLength:number = (<string>someValue).length
 //as语法
 let someValue1:any = "this is a string"
 let stringLength1:number = (someValue1 as string).length

 