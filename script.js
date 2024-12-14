let Submit=document.getElementById('submit')
Submit.addEventListener('click', (event)=>{
    event.preventDefault();
    

let name=document.querySelector('#name').value
let exampleInputEmail=document.querySelector('#exampleInputEmail').value
let warName=document.querySelector('#warName')
let phone= document.querySelector('#phone').value
let age= document.querySelector('#Age').value
age=parseInt(age)
let successmsg=document.querySelector('#sucess')





const indiaPhoneRegex = /^(\+91[-.\s]?)?[6-9]\d{9}$/;
let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
warName.style.display='none'


if(name.length<=2||name.length>=50  ){
    
    warName.style.display='block'
    warName.innerHTML="enter a valid name";
    successmsg.style.display='none'
    return false
}
if (  !filter.test(exampleInputEmail)){



    warName.style.display='block'
    warName.innerHTML='enter a valid email address'
    successmsg.style.display='none'
   return false

}

if (!indiaPhoneRegex.test(phone)){

      warName.style.display='block'
    warName.innerHTML='enter a valid phone number'
    successmsg.style.display='none'
    return false
}
if (age <= 18 || age >= 120 || age==undefined) {
    warName.style.display = 'block';
    warName.innerHTML = 'Enter a valid age';
    successmsg.style.display='none'
    return false
}


function updateInputField() {
   
    const gender = document.querySelector('input[name="gender"]:checked');
    
   
    const inputField = document.getElementById('inputField');
    
   
    if (gender) {
        inputField.value = gender.value 
    } else {
        inputField.value = ''; 
    }
    
}
updateInputField();

if(true){
    successmsg.style.display='block'
    successmsg.innerHTML="successfully registered"
}


})

