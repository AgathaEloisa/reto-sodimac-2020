export const userFiles = () => {
    document.getElementById('root').innerHTML =
    `
        <div class="container_user-files" class="row">
            <div class="form_user-files"> 
                <div class="search-date row">
                    <p class="col-2">Rango de fechas</p>

                    <input class="col-2" type="date"/><i class="fas fa-calendar-alt"></i>
                    <input class="col-2" type="date"/><i class="fas fa-calendar-alt"></i>

                    <!-- make new file button -->
                    <button id="btn-search" class="btn btn-outline-secondary col-2 offset-3" type="submit">Buscar</button>
                <!-- 2input y 1btn -->
                </div>           
                <!-- <div class="form-table col-12"> -->

                <!-- Files table -->

                    <table class="table table-bordered col-12">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody id="res">

                        </tbody>
                    </table>

                    <button type="button" class="btn btn-outline-secondary col-2 offset-9" data-toggle="modal" data-target="#btnNewFile" data-whatever="@mdo">Crear archivo</button>
            </div>
        </div>
    ` 
        //  Print table with data elements. tiene que ir ligado al botón del filtro
         document.querySelector('#btn-search').addEventListener('click', getData());
          function getData () {
            const xhttp = new XMLHttpRequest();
            xhttp.open('GET', 'files.json', true);
            xhttp.send();
            xhttp.onreadystatechange = function(){
              if(this.readyState == 4 && this.status == 200){
                let data = JSON.parse(this.responseText);
                let res = document.querySelector('#res');
                res.innerHTML = '';
                for(let elem of data){
                  res.innerHTML += 
                  `
                    <tr>
                    <th scope="row"> ${ elem.id } </th>
                    <td> ${ elem.title } </td>
                    <td>
                        <a href="#/login" data-target="#login" data-toggle="modal">Detalle</a>
                    </td>
                    </tr>
                  `
                  document.getElementById('root').innerHTML +=
    
                  `   <!-- Modal -->
                  <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                          <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalCenterTitle"> ${ elem.title } </h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                          </div>
                          <div class="modal-body">
                          ${ elem.detail }
                          </div>
                          <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                      </div>
                      </div>
                  </div>`;
                }
              }
            }
           };

           // Modal add new file
        document.getElementById('root').innerHTML +=
        ` 
        <div class="modal fade" id="btnNewFile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Crear archivo</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form id="new-element" method="POST" action="#/add-new-file">
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Nombre</label>
                  <input type="text" class="form-control" id="recipient-name" name="title" autofocus required>
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Contenido:</label>
                  <textarea class="form-control" id="message-text" name="detail" required></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button id="saveData" type="submit" class="btn btn-secondary" data-dismiss="modal" value="save new file">guardar </button>
            </div>
          </div>  
        </div>
      </div>
         `;

    };