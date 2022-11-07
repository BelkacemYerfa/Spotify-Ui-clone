
//JS code
const Email = document.getElementById('inputEmail');
const Password = document.getElementById('inputPassword');
const LinkToGo = document.getElementById('link');
const TextWarning = document.getElementById('Warning');
const btn = document.getElementById('btn');


const obj = {
 'email' : 'b_yerfa@estin.dz',
 'password' : 'BYLKA8881'
}
btn.addEventListener('click' , ()=> {
 if((Email.value === obj.email) && (Password.value === obj.password)){
  LinkToGo.href = '../../../Web APP/Home/index.html';
 } 
 else{
  TextWarning.style.display = 'block';
 }
})
