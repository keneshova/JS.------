let example1 = document.querySelector("article");
console.log(example1);

let example2 = document.querySelector("p");
example2.textContent = "Hello world";
example2.style.color  = "tomato";
example2.style.fontSize = "60px";
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
