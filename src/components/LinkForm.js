import React, {useState} from 'react';

const LinkForm = (props) => {
    const initialStateValues ={
        nombre: '',
        numerochip:'',
        raza:'',
        sexo:'',
        fechanacimiento: '',
        nombrepadre:'',
        registropadre: '',
        nombremadre:'',
        registromadre:'',
        registroperro:'',
        dueno1:'',
        dueno2:'',
    };
    const [values,setValues]= useState(initialStateValues);
    
    const handleInputChange =(e) =>{
        const {name,value} =e.target;
        console.log(e.target.value);
        setValues({...values,[name]:value});
        
    }; 

   

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
        props.addOrEdit(values);
        setValues({...initialStateValues});
        
    }

    return (
        
        
    <form className = "card card-body" onSubmit= {handleSubmit}>
        

        <div className = "form-group input-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="nombre del perro"
          name="nombre"
          onChange={handleInputChange}
          value={values.nombre}>
          
          </input>
        </div>

        <div className = "form-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="numero de registro"
          name="numeroregistro"
          onChange={handleInputChange}
          value={values.numeroregistro}>
          </input>
        </div>

        <div className = "form-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="raza"
          name="raza"
          onChange={handleInputChange}
          value={values.raza}>
          </input>
        </div>

        <div className = "form-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="sexo"
          name="sexo"
          onChange={handleInputChange}
          value={values.sexo}>
          </input>
        </div>

        <div className = "form-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="fecha de nacimiento"
          name="fechanacimiento"
          onChange={handleInputChange}
          value={values.fechanacimiento}>
          </input>
        </div>

        <div className = "form-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="nombre del padre"
          name="nombrepadre"
          onChange={handleInputChange}
          value={values.nombrepadre}>
          </input>
        </div>

          <div className = "form-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="numero de registro del padre"
          name="registropadre"
          onChange={handleInputChange}
          value={values.registropadre}>
          </input>
        </div>

        <div className = "form-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="nombre de la madre"
          name="nombremadre"
          onChange={handleInputChange}
          value={values.nombremadre}>
          </input>
        </div>
        
          <div className = "form-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="numero de registro de la madre"
          name="registromadre"
          onChange={handleInputChange}
          value={values.registromadre}>
          </input>
        </div>

        <div className = "form-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="numero de chip"
          name="numerochip"
          onChange={handleInputChange}
          value={values.numerochip}>
          </input>
        </div>

        <div className = "form-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="dueño 1"
          name="dueno1"
          onChange={handleInputChange}
          value={values.dueno1}>
          </input>
        </div>

        <div className = "form-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="dueño 2"
          name="dueno2"
          onChange={handleInputChange}
          value={values.dueno2}>
          </input>
        </div>

        <button className="btn btn-primary btn-block">
          Guardar
        </button>

        
      </form>
   
    );
};

export default LinkForm;
