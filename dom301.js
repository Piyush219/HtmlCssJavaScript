var headTitle = document.getElementById('header-title')
//headTitle.style.borderBottom='solid 3px #000'
headTitle.style.backgroundColor='green'
headTitle.style.color='white'

var itemList = document.querySelector('.items');
console.log(itemList.parentNode)

itemList.parentNode.style.backgroundColor='grey'

//console.log(itemList.parentNode.parentNode)

// parentNode and parentElement are the same

//console.log(itemList.childNodes) // Not suggest using childNodes as when we chnage line it also give text in cosnole

console.log(itemList.children)

itemList.children[1].style.backgroundColor = 'yellow'

console.log(itemList.firstChild) // Also Gives text when using different line

//console.log(itemList.firstElementChild)
//itemList.firstElementChild.textContent = 'I changed'

console.log(itemList.lastChild) // This will also give text
console.log(itemList.lastElementChild)

console.log(itemList.nextElementSibling)

console.log(itemList.previousElementSibling)

//Create Element

var newDiv = document.createElement('div')
//console.log(newDiv)

newDiv.className= 'hello'; // will create classname

newDiv.id = 'hello again'

// Add attribute

newDiv.setAttribute('title', 'hello div')


// Creating text node

var newDivText = document.createTextNode('Hello world')
//console.log(newDivText)

newDiv.appendChild(newDivText)

//console.log(newDiv)

var container = document.querySelector('header .main')
var h1 = document.querySelector('header h1');
console.log(newDiv)

container.insertBefore(newDiv, h1)
//console.log(container)
newDiv.style.color='white'

var newDiv2 = document.createElement('div')
newDiv2.className= 'hello'
newDiv2.id = 'hello again'
var newDivText2 = document.createTextNode('Hello world')
newDiv2.appendChild(newDivText2)

var item = document.querySelector('div .items')
var li = document.querySelector('div li')
item.insertBefore(newDiv2, li)

