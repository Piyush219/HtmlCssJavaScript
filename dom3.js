console.dir(document)
console.log(document.URL)
console.log(document.title)
console.log(document.body)
console.log(document.links)
console.log(document.all)

var headTitle = document.getElementById('header-title')

console.log(headTitle)

headTitle.innerHTML = '<h2> Changing Header</h2>'

headTitle.style.borderBottom = 'solid 3px #000'
headTitle.style.backgroundColor = 'green'
headTitle.style.color = 'white'

var addItem = document.getElementById('add-item')

addItem.style.color = 'green'
addItem.style.fontWeight= ' 1000'

var liItems = document.querySelector('.items')
liItems.firstElementChild.style.color = 'pink'
liItems.lastElementChild.style.color = 'red'

