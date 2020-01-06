export const userFiles = () => {
    document.getElementById('root').innerHTML =
    `
        <div class="container_user-files" class="row">
            <div class="form_user-files"> 
                <div class="search-date row">
                    <p class="col-2">Rango de fechas</p>

                    <input type="date"/><i class="fas fa-calendar-alt"></i>
                    <input type="date"/><i class="fas fa-calendar-alt"></i>

                    <!-- make new file button -->
                    <button id="btnSearch" class="btn btn-outline-secondary col-2 offset-4" type="submit">Buscar</button>
                <!-- 2input y 1btn -->
                </div>           
                <!-- <div class="form-table col-12"> -->

                <!-- Files table -->

                    <table class="table table-bordered col-12">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>
                                <a href="#/login" data-target="#login" data-toggle="modal">Botón</a>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>
                                <a href="#/login" data-target="#login" data-toggle="modal">Botón</a>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td ">Larry the Bird</td>
                            <td> 
                                <a href="#/login" data-target="#login" data-toggle="modal">Botón</a>
                            </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- make new file button -->
                    <button id="btnNewFile" class="btn btn-outline-secondary col-2 offset-9" type="submit">Crear archivo</button>

                <!-- </div> -->
            </div>
        </div>
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