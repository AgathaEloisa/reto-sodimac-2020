let userData = [];

const addNewUser = (mail, pass) => {
  let newUser = {
    mail: mail,
    pass: pass
  };
console.log('new user: ', newUser);
userData.push(newUser);
localStorageUserData(userData);
}

const getUserData = () => {
  let storedList = localStorage.getItem('localUserList');
  if(storedList == null){
    userData = [];
  } else {
    userData = JSON.parse(storedList);
  }
  return userData;
}

const localStorageUserData = (userList) => {
  localStorage.setItem('localUserList', JSON.stringify(userList));
}