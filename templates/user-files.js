import { login } from './login.js'

export const userFiles = () => {
    document.getElementById('root').innerHTML =
    `
    <a href="#/login" data-target="#login" class="btn btn-primary btn-lg" data-toggle="modal">Botón</a>
    ` 

    let aa = document.getElementById('root').innerHTML +=
    
    `   <!-- Modal -->
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            ...
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
        </div>
    </div>`

    // para el cambio de hash en el navegador
    // let changeHash = 
    // document.getElementById('kk').addEventListener('click', () => {
    //     window.location.hash = '#/kk';
    // })

    };