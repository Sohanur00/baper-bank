// step 1 add click evend handler 

document.getElementById('btn-submit').addEventListener('click',function(){

    // step 2 get the email addres  inside the email input field
    // always remember to use .value to get next from a input filed
    const emailfield =document.getElementById('user-email');
    const email =emailfield.value;

   
// step 3 get pasword

/*
3.a set id on the element 
3.b get element 
3.c get the value from the element

*/ 


const paswordField = document.getElementById('user-password');
const password = paswordField.value;
// denzar : do not verify email password on the cliend side 
// step 4 verify email and pa ssword
// console.log(email,password);
if(email === 'sontan@bap.com'  && password ==='secret'){

    window.location.href='bank.html'

}else{
alert('invalid user ')

}

 
})