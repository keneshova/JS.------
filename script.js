let example1 = document.querySelector("article");
console.log(example1);

let example2 = document.querySelector("p");
example2.textContent = "Hello world";
example2.style.color  = "tomato";
example2.style.fontSize = "60px";
example2.style.textAlign = "center";
example2.style.backgroundColor = "pink";
console.log(example2);

let example3 = document.querySelector(".example-3");
console.log(example3);

let example4 = document.querySelector("#example-4");
console.log(example4);


let example5 = document.querySelector("p:nth-child(4");
console.log(example5);

let example6 = document.querySelectorAll("article p");
for (let i = 0; i < example6.length; i++) {
  let paragraph = example6[i];
  paragraph.textContent += " 🌹";
}

let example7 = document.createElement("p");//соз пусьой параг 
example7.textContent = "Lorem ispun";//доб лорем
//document.body.prepend(example7);//прив-м к боди доб-т в конце этого эл

example1.append(example7);

//сщз код кот хранит пустой тег ul

let example8 = document.createElement("ul");
example8.className = "example-8";
document.body.append(example8);
for( let i = 1; i <= 10; i++){
  let listItem = document.createElement("li");
  listItem.textContent = "Example " + i;
  listItem.style.color = "green";
  example8.append(listItem);
}

let fruits = ["Apple", "Pear", "peach", "Orange", "Banana"];



