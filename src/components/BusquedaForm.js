import React, {useState} from 'react';

const BusquedaForm = (props) => {
    const initialStateValues ={
      
        registroperro:'',
       
    };
    let valor = '';
    
    const handleInputChange =(e) =>{
        const {name,value} =e.target;
        console.log(e.target.value);
        valor = e.target.value;
       // setValues({...values,[name]:value});
       console.log(valor);
        
    }; 

   

    const handleSubmit = e => {
        e.preventDefault();
        console.log(valor);
        props.buscar(valor);
      
        
    }

    return (
        
        
    <form className = "card card-body" onSubmit= {handleSubmit}>
        

        <div className = "form-group input-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="registro del perro"
          name="registro perro"
          onChange={handleInputChange}
          >
          </input>

          <button className="btn btn-primary btn-block">
          Buscar
        </button>

        </div>
    </form>
    )
}
export default BusquedaForm;
