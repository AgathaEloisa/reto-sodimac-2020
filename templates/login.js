export const login = () => {
  document.getElementById('root').innerHTML = 
    `
      <div class="container-login" class="row">
        <div class="form-login col-8 offset-2"> 
          <div class="row">
              <div id="inputMail" class="input col-4 offset-4">
                <input type="email" name="e-mail" id="userEmail" placeHolder="e-mail">
                <p id="inputMailP" class="error-message"></p>
              </div>
            </div>
            <div class="row">
              <div id="inputPass" class="input col-4 offset-4">
                <input type="password" name="password" id="userPass" placeHolder="Contraseña">
                <p id="inputPassP" class="error-message"></p>
              </div>
            </div>
            <div class="row">
              <div class="col-2 offset-5"> 
              <button id="btnEnter" class="btn btn-outline-secondary" type="submit">Entrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    // variables
  let userEmail = document.getElementById('userEmail');
  let userPass = document.getElementById('userPass');
  let emailValue = '';
  let passValue = '';

  // Button event
  document.getElementById('btnEnter').addEventListener('click', () => {
    emailValue = userEmail.value;
    passValue = userPass.value;

    // Email error handling
    if(validateEmail(emailValue) === true){
      console.log('e-mail: ',emailValue)
      document.getElementById('inputMailP').innerHTML = '';
    } else {
      document.getElementById('inputMailP').innerHTML = '<span style="font-weight: bold">*</span> ingrese un correo válido';
      // window.location.hash = '#/login'; 
    }
    
    // Password error handling
    if(validatePass(passValue) === true){
      console.log('Password: ', passValue);
      document.getElementById('inputPassP').innerHTML = '';
    }else {
      document.getElementById('inputPassP').innerHTML = '<span style="font-weight: bold">*</span> la contraseña no es válida';
    }
    
    // Take user values and save data in local storage, and change the hash
    if(validateEmail(emailValue) === true && validatePass(passValue) === true){
      addNewUser(emailValue, passValue);
      window.location.hash = '#/user-files';
    }

})

  // ----- input Validations -----

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