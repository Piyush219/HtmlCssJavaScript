const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users'); 

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();

    if(nameInput.value ==='' || emailInput.value ==='' ){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields'
        setTimeout(()=> msg.remove(), 3000)
        //alert('Please enter fields');
    } else{
        console.log('success')
    }

    
    localStorage.setItem('Name:', nameInput.value)
    localStorage.setItem('Email:', emailInput.value)

    /* var array = JSON.parse(localStorage.getItem('Name:') || '[]');
    array.push(nameInput);
    localStorage.setItem('Name:', JSON.stringify(array));

    var earray = JSON.parse(localStorage.getItem('Email:') || '[]');
    earray.push(emailInput);
    localStorage.setItem('Email:', JSON.stringify(earray)); */
    //const li = document.createElement('li');
   //  li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    //userList.appendChild(li);

    //
    nameInput.value = '';
    emailInput.value = '';

}