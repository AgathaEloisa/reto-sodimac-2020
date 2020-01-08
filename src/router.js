// import files of th views
import { login } from './templates/login.js';
import { userFiles } from './templates/user-files.js';

const changeRoute = ( hash ) => {
    if (hash === '' || hash === '#/' || hash === '#/login' || hash === '#/user-files')
        return showViews(hash);    
    }

export const showViews = ( hash ) => {
    const route = hash.slice(2);
    const rootContainer = document.getElementById('root');

    switch (route) {
        case '':
            login();
            break
        case '#/':
            login();
            break
        case 'login':
            login();
            break
        case 'user-files':
            userFiles();
            break
        default:
            rootContainer.innerHTML = `<p>Error 404</p>`;
    }
};

export const router = () => {
    window.addEventListener('load', changeRoute(window.location.hash));
    if ('onhashchange' in window){
        window.onhashchange = () => {
            changeRoute(window.location.hash);
        }
    }
};