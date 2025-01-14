// alert("目前的時間")
// const currentDate= new Date();
// const currentHours=currentDate.getHours();
// const currentMinutes=currentDate.getMinutes();
// const currentSeconds=currentDate.getSeconds();
// alert(`現在是 ${currentHours} 時 ${currentMinutes}分 ${currentSeconds}秒` );

// let data=prompt("說明文字","Hi")
// alert(`prompt`)

// function addNumbers(a,b){const result=a+b; return result}
//
// const num1 = 10;
// const num2 = 20;
// const sum= addNumbers(num1,num2)
// console.log("總和", sum)

// function time(){
// const currentDate= new Date();
// const currentHours=currentDate.getHours();
// const currentMinutes=currentDate.getMinutes();
// const currentSeconds=currentDate.getSeconds();
// alert(`現在是 ${currentHours} 時 ${currentMinutes}分 ${currentSeconds}秒` );}

// let myName=prompt("請輸入姓名")
// function greet(name){let result="Hello" + name; alert(result)}
// greet(myName);


//  let myDay=prompt("今天星期幾");
// switch (myDay) {
//     case "Monday":alert("workout")
//         break;
//
//     case "Tuesday":alert("eat")
//         break;
//        default:
//            alert("wrong");
//            break;}


// let myscore= prompt("輸入分數")
// if (myscore>=90){alert("A")}
// else if (myscore>=80){alert("B")}
// else {alert("E")}

//12小時制
// function time() {
//     const currentDate = new Date();
//     let currentHours = currentDate.getHours();
//     const currentMinutes = currentDate.getMinutes();
//     const currentSeconds = currentDate.getSeconds();
//     let format = "上午";
//
//     if (currentHours >= 12) {
//         format = "下午";
//         currentHours = currentHours - 12;
//     }
//     alert(`現在是 ${(format)} ${currentHours} 時 ${currentMinutes}分 ${currentSeconds}秒`);
// }
//   time();


// 迴圈for
// for (let i=1; i<=10;i=i+1){document.write(i+"<br>");}


// 還沒好
// let sum=0;
// for (let i=1; i<=100; i=i+1){sum=sum+i;}

//do while
// let myPassword="";
// let answer="12345"
// do{myPassword=prompt("請輸入密碼")}while(myPassword !== answer);
// alert("密碼正確")

//猜數字遊戲 R()
// let ans= Math.random()*10
// ans=Math.floor(ans);
// let guess=0;
// while(true){guess=prompt("傾輸入0-9");
// if (guess==ans){alert("恭喜答對了")
//     break;}
// alert("再給你一次機會")}

//陣列
// var num=[12,13,14,15,16];
// console.log(num);
//
// num.push(17);
// console.log(num);
//
// num.shift()
// console.log(num)
//
// num.unshift(11)
// console.log(num)
//
// num.pop()
// console.log(num)

//foreach
// let myArray=[1,4,2,3,5,8];
// let max= getMax(myArray);
// console.log(max);
//
// function getMax(arr){
//     let max=Number.MIN_SAFE_INTEGER;
//     arr.forEach(v=>{if(v>max){max=v;}})
// return max;}

//DOM
// var d1=document.getElementById('{d1}');
// d1.classList.add('red');

//addEventLinster 還沒
// var d1=document.getElementById('d1');
// var d2=document.getElementById('d2');
// d1.addEventListener('click',function (){console.log('onD1Click')});
// d2.addEventListener()



