export const login = () => {
  document.getElementById('root').innerHTML = 
    `
      <div class="container" class="row">
        <div class="form col-8 offset-2"> 
          <div class="row">
              <div id="inputMail" class="col-5 offset-3">
                <input type="email" name="e-mail" id="userEmail" placeHolder="e-mail">
                <p id="inputMailP"></p>
              </div>
            </div>
            <div class="row">
              <div id="inputPass" class="col-5 offset-3">
                <input type="password" name="password" id="userPass" placeHolder="Contraseña">
                <p id="inputPassP"></p>
              </div>
            </div>
            <div class="row">
              <div class="col-1 offset-5"> 
              <button id="btnEnter" class="btn btn-outline-secondary" type="submit">Entrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `

  let userEmail = document.getElementById('userEmail');
  let userPass = document.getElementById('userPass');
  let emailValue = '';
  let passValue = '';

  document.getElementById('btnEnter').addEventListener('click', () => {
    emailValue = userEmail.value;
    passValue = userPass.value;

    // email
    if(validateEmail(emailValue) === true){
      console.log('e-mail: ',emailValue)
      document.getElementById('inputMailP').innerHTML = '';
    } else {
      document.getElementById('inputMailP').innerHTML = 'ingrese un correo válido';
    }
    
    // pass
    if(validatePass(passValue) === true){
      console.log('Password: ', passValue);
      document.getElementById('inputPassP').innerHTML = '';
    } else {
      document.getElementById('inputPassP').innerHTML = 'la contraseña no es válida';
    }
    
    // Take user values and save data in local storage, and change the hash
    if(validateEmail(emailValue) === true && validatePass(passValue) === true){
      addNewUser(emailValue, passValue);
      window.location.hash = '#/user-files';
    }

})

  // -----------------------------------------------

  // Email validate
  const validateEmail = (emailValue) => {
    if(emailValue.length === 0 || emailValue === '' || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(emailValue)){
      return false;
    }
    return true;
  }

  // Password validate
  const validatePass = (passValue) => {
    if(passValue.length === 0 || passValue.length < 6){
      return false;
    }
    return true;
  }

};