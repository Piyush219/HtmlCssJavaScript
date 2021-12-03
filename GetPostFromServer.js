const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


//-----------Get To Show in the Starting of the page from server----------------------

document.addEventListener('DOMContentLoaded', () => {

  axios.get("https://crudcrud.com/api/7407dc3d72f748df82e22dfcbd329484/firstappointmentdata")  
    .then((response) =>{
      for(var i =0; i<response.data.length;i++){
        addNewLineElement(response.data[i])
      }
    })
    .catch((err) => {
      console.log(err)

  // for (i = 0; i < localStorage.length; i++) {
  //   let details = (localStorage.getItem(localStorage.key(i)))
  //   let newDetails = JSON.parse(details)
  //   const li = document.createElement('li');
  //   addNewLineElement(newDetails)
  // }
})
})




// axios.get("https://crudcrud.com/api/7407dc3d72f748df82e22dfcbd329484/firstappointmentdata")  
//     .then((response) =>{
//       // console.log(response)
//       // console.log(response.data)
//       // addNewLineElement(response.data)
//       response.data.map((item)=>{
//         addNewLineElement(item)
//       })
//     })
//     .catch((err) => {
//       console.log(err)
//     })

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields'
    setTimeout(() => msg.remove(), 3000)
    //alert('Please enter fields');
  } else {
    console.log('success')
  }

  let obj = {
    name: nameInput.value,
    email: emailInput.value
  };

//-----------------Post to store on the server------------------
  axios.post("https://crudcrud.com/api/7407dc3d72f748df82e22dfcbd329484/firstappointmentdata",obj)
    .then((response) => {
      addNewLineElement(response.data)
      //console.log(response)
    })
    .catch((err) => {
      console.log(err)
    }) 
  //localStorage.setItem("myObj",obj)  // Data stores as string

  /* let myObj_serialized = JSON.stringify(obj);

  localStorage.setItem(`userdetails${obj.email}`, myObj_serialized)

  let myObj_deserialized = JSON.parse(localStorage.getItem("MyObj"))  // Converting string back into Onject

  console.log(myObj_deserialized)

  nameInput.value = '';
  emailInput.value = '';

  addNewLineElement(obj); */

}

function addNewLineElement(obj) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${obj.name} : ${obj.email}`));

  userList.appendChild(li);

  console.log(document.createElement("i"));
  const btnEdit = document.createElement("input");
  btnEdit.id = "edit";
  btnEdit.type = "button";
  btnEdit.value = "Edit User";
  btnEdit.addEventListener("click", () => {
    console.log(obj);
    document.getElementById("name").value = obj.name;
    document.getElementById("email").value = obj.email;
    li.remove();
  });
  btnEdit.className = "delete";
  btnEdit.style.border = "2px solid green";
  btnEdit.style.float = 'right'
  //console.log(btnEdit);
  li.appendChild(btnEdit);

  const btnDel = document.createElement("input");
  btnDel.type = "button";
  btnDel.value = "Delete User";
  btnDel.className = "delete";
  btnDel.style.border = "2px solid red";
  btnDel.style.float = 'right'
  //console.log(btnDel);
  li.appendChild(btnDel);
  btnDel.addEventListener("click", () => {
    localStorage.removeItem("userdetails" + obj.email);
    li.remove();
  });

  console.log(li);

  userList.appendChild(li);
}


