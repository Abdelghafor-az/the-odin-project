const container = document.querySelector(".container");

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = "Hey I'm red!"

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

const childContainer = document.createElement('div');
childContainer.style.border = "2px solid black";
childContainer.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const p2 = document.createElement('p');
p2.textContent = "ME TOO!";

childContainer.appendChild(h1);
childContainer.appendChild(p2);

container.appendChild(p);
container.appendChild(h3);
container.appendChild(childContainer);
