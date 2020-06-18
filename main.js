 //Single Element Selectors
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));
//// Multiple Element Selectors
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByTagName('li'));
//console.log(document.getElementsByClassName('item'));
//
//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));
//
//
//// MANIPULATING THE DOM
//const ul = document.querySelector('.items');
//// ul.remove();
//// ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
//
//const btn = document.querySelector('.btn');
 
//
//
//// EVENTS
//
//// Mouse Event

//btn.addEventListener('click', e => {
//  e.preventDefault();
// console.log(e.target.className);
//    btn.style.background = 'red';
// document.getElementById('my-form').style.background = 'red';
//  document.querySelector('body').classList.add('bg-dark');
//  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//});

////
//// Keyboard Event
//const nameInput = document.querySelector('#name');
//nameInput.addEventListener('input', e => {
//  document.querySelector('.container').append(nameInput.value);
//});


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const btn = document.querySelector('.btn');
let z=1;
// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
    
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
      
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
   // btn.style.background = 'red';
      console.log(z++);
      
  

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
      
      //btn.style.backgroundColor='black';
  } else {
    // Create new list item with user
    const li = document.createElement('li');
      userList.classList.add('fine');
    // Add text node with input values
    li.appendChild(document.createTextNode(` ${nameInput.value}, your favourite Super Hero is:    ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

