import React from "react";


const Registrate =() => {
return (
  
    <div className=" container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
    <div class='col-5 m-3  rounded-3 shadow'>
       
    <form class="row g-3">
  <div class="col-md-6 ">   
 
  <label for="inputNombre" class="form-label ">Nombre</label>
    <input type="text" class="form-control " placeholder="" aria-label="Nombre"/>
  </div>  
  <div class="col-6">
    <label for="inputApellido" class="form-label">Apellido</label>
    <input type="text" class="form-control" placeholder="" aria-label="Apellido"/>
  </div>
  <div class="col-6">
    <label for="inputCurso" class="form-label">Curso</label>
    <input type="text" class="form-control" id="inputCurso" placeholder="ej 2B"/>
  </div>
  <div class="col-md-6">
    <label for="inputNickName" class="form-label">Nick Name</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-12">
    <label for="inputEmail" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>

  <div class="col-md-6">
    <label for="inputContraseña" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="inputContraseña"/>
  </div>
  <div class="col-md-6">
    <label for="inputContraseña2" class="form-label">Repetir Contraseña</label>
    <input type="password" class="form-control" id="inputContraseña2"/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Descripción</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Registrarme</button>
  </div> 
</form>
</div>
</div>


)

}
export default Registrate; 