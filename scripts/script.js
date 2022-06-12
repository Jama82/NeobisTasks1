//!!!!! #1

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//       console.log(i);
//     })
//   };

// What will the console display and why?


//? # Answer 1
// setTimeout()является методом объекта окна.
// setTimeout()устанавливает таймер и выполняет функцию обратного вызова, когда таймер истекает.
// В консоли выведется 10 раз число 10,  условие выполняется в функции setTimeout


// !!!!#2
// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : 
// Today is: Friday. 
// Current time is: 4PM:50:22

// program to display the date
// get local machine date time


//???  Answer2
// const date = new Date();
// const n = date.toDateString();
// const time = date.toLocaleTimeString();
// console.log('Today is: ' + n);
// console.log('Current time is: ' + time);



// !!!#3
// Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223


////?? Answer3
// function check(n){
//     n = n + "";
//     return n.split("").reverse().join("");
// }
// console.log(check(32243))


// !!!#4
// Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 	

////??? Answer 4
// function fact(num){
//     if(num < 0){
//         return -1;
//     }else if(num == 0){
//         return 1;
//     }else{
//         return(num * fact(num -1));
//     }
// }
// console.log(fact(5))





// !!!!#5
//  Write a JavaScript program that accepts two integers in prompt() and alert the larger one.

//??? Answer 5

// let num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10))  { 
//   alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else if(parseInt(num2, 10) > parseInt(num1, 10))  {
//   alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else{
//    alert("The values "+ num1+ " and "+num2+ " are equal.");
//   }



// !!!#6
// Write a simple JavaScript program to join all elements of the following array into a string. 
// Sample array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output : 
// "Red,Green,White,Black"
// "Red+Green+White+Black"

///? Answer 6
// let myColor =  ["Red", "Green", "White", "Black"];
// console.log(myColor.join());
// console.log(myColor.join('+'));



// !!!!#7
// Write a JavaScript function to get the month name from a particular date. 
// Test Data :
// console.log(month_name(new Date("10/11/2009"))); 
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October" 
// "November" 


//???? Answer 7
// let monthName = function(data){
//     months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//       return months[data.getMonth()];
//     };
//     console.log(monthName(new Date("10/11/2009")));
//     console.log(monthName(new Date("11/13/2014")));





// !!!#8
// Write a JavaScript program to test the first character of a string is uppercase or not

//?? Answer 8
// function char(str){
//     return str.charAt(0) === str.charAt(0).toUpperCase()
// }
// console.log(char("Uppercase"));
// console.log(char("uppercase")) ;


//!!! #9
// Write a JavaScript program to draw a smile	

//?? Answer #9
// var w=document.getElementById('q');
// var c=w.getContext('2d');

// c.fillStyle="#ffec42";
// c.beginPath();
// c.arc(100, 100, 50, 0, Math.PI*2);
// c.fill();

// c.fillStyle="#FEB139";
// c.beginPath();
// c.arc(84, 90, 8, 0, Math.PI*2);
// c.fill();

// c.fillStyle="#FEB139";
// c.beginPath();
// c.arc(116, 90, 8, 0, Math.PI*2);
// c.fill();

// c.beginPath();
// c.moveTo(70,115);
// c.quadraticCurveTo(100,130,130,115);
// c.quadraticCurveTo(100,150,70,115);
// c.fill();




//??? PART 2
//!!! #1
	
// Необходимо поочередно обратиться к каждому тэгу в нужном порядке, и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.

// Вывод в консоли:
// В недрах тундры, выдры в гетрах
// Тырят в вёдра ядра кедров!
// Выдрав с выдры в тундре гетры
// Вытру выдрой ядра кедров
// Вытру гетрой выдре морду
// Ядра в вёдра, выдру в тундру!


///??? Answer #1

// console.log(document.getElementById('string-3').innerHTML);
// console.log(document.getElementById('string-5').innerHTML);
// console.log(document.getElementById('string-2').innerHTML);
// console.log(document.getElementById('string-6').innerHTML);
// console.log(document.getElementById('string-4').innerHTML);
// console.log(document.getElementById('string-1').innerHTML);



//!!!! #2

// С помощью JS необходимо первым трем  элементам задать красный цвет текста, а остальным трем - зеленый.

//? Answer #2
// const elem = document.getElementsByClassName('element');
// elem[0].style.backgroundColor = 'red';
// elem[1].style.backgroundColor = 'red';
// elem[2].style.backgroundColor = 'red';
// elem[3].style.backgroundColor = 'green';
// elem[4].style.backgroundColor = 'green';
// elem[5].style.backgroundColor = 'green';


///!!! #3

// На странице есть контейнер <ol id="todo-list"></ol>,
// необходимо с помощью цикла добавить в него пять задач (элементов <li>) с классом task и текстом,
// взятым из массива задач из пяти элементов: 
// Ожидаемый результат в инспекторе после выполнения скрипта:
//  <ol id="todo-list">
//   <li class="task">Buy lemonade</li>
//   <li class="task">Make toasts</li>
//   <li class="task">Repair car</li>
//   <li class="task">Play games</li>
//   <li class="task">Pet a cat</li>
// </ol> 

//???? Answer # 3

// const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
// for (i = 0; i < tasks.length; i++) {
//   let li = document.createElement("li");
//   let text = document.createTextNode(tasks[i]);
//   li.appendChild(text);
//   document.getElementById("todo-list").appendChild(li);
// }




// !!!!#4
// Вам необходимо с помощью JavaScript вставить после каждого тега <p> тег <hr>,
// для визуального отделения абзацев друг от друга.
	
// Указания:
// Подразумевается, что вышеуказанная разметка находится внутри тега <body>.
// Нельзя модифицировать указанную разметку.
// За использование цикла дополнительные баллы.

//? Answer #4
// document.querySelectorAll('p').forEach((elem) => {
//     elem.insertAdjacentHTML('afterend', '<hr/>');
// });

// //?? 2-answer #4
// for(let p of document.querySelectorAll("p"))
// p.after(document.createElement("hr"));


// !!!!!#5

// Необходимо с помощью JavaScript удалить элемент "Cola 1.5 l" и заменить товар 
// "Chocolate bar" на "Canned Fish", количеством 4 штуки.

// Указания:
//  Для удаления использовать .remove()
// Для замены использовать .replaceChild()
// Подразумевается, что вышеуказанная разметка находится внутри тега <body>.


//??? Answer #5
// const cartItems = document.querySelector("#cart-items");
// const listItems = document.querySelectorAll(".item");

// listItems[1].remove(); 

// const itemDiv = document.createElement("div"); 
// const itemClassName = itemDiv.setAttribute("class", "item"); 
// const itemContent = document.createTextNode("Canned Fish");

// itemDiv.appendChild(itemContent); 

// const itemSpan = document.createElement("span");
 
// itemSpan.innerText = " x 4";
// itemDiv.appendChild(itemSpan); 
// cartItems.replaceChild(itemDiv, listItems[4]); 






// !!!!#6
// Напишите программу для создания списка, которые будет вводить пользователь.
// Для каждого пункта:
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте пункт и добавляйте его к <ul>.
// Процесс прерывается, когда пользователь нажимает "Отмена" или вводит пустую строку.


// ? Answer #6

// const todo = document.getElementById("todo-list");
//         let task;
//         while (task = prompt("Введите пункт списка:"))
//             todo.insertAdjacentHTML("beforeend", `<li>${task}</li>`);
           

