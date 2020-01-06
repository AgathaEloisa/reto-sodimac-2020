import { router } from './router.js';

const initApp = () => {
    router();
}

window.addEventListener('load', initApp);