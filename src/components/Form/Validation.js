const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword=/(?=(.*[0-9]))(?=.*[a-z])(?=(.*)).{6,10}/;

export  function validation(userData) {
    let errors = {};
    
    if(!userData.username) errors.username = 'Debe ingresar un usuario';
    else if(userData.username.length > 35) errors.username = 'El usuario debe tener 35 caracteres como máximo';
    else if(!regexEmail.test(userData.username)) errors.username = 'El usuario debe ser un email valido'
    
    if(userData.password.length < 6 && userData.password.length > 10) errors.password = 'El password debe contener entre 6 y 10 caracteres';
    else if(!regexPassword.test(userData.password)) 
        errors.password = 'El password debe contener al menos 1 numero';

    return errors;
     
}