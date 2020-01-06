// import files of th views
import { login } from './templates/login.js';
import { userFiles } from './templates/user-files.js';
import { fileDetail } from './templates/file-detail.js';
import { addNewFile } from './templates/add-new-file.js';

const changeRoute = ( hash ) => {
    if (hash === '' || hash === '#/' || hash === '#/login' || hash === '#/user-files' || hash === '#/file-detail' || hash === '#/new-file')
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
        case 'file-detail':
            fileDetail();
            break
        case 'new-file':
            addNewFile();
            break
        default:
            rootContainer.innerHTML = `<p>Error 404</p>`
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