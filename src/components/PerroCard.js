import React from 'react';

export const PerroCard = (
    {
    nombre,
    numerochip,
    raza,
    sexo,
    fechanacimiento,
    nombrepadre,
    registropadre,
    nombremadre,
    registromadre,
    registroperro,
    dueno1,
    dueno2,
   } ) => {
    return(
        <div className="card ms-3" style={{maxWidth: 540}}>
                <div className="row no-gutters">
                    
                    <div className="col-md-4">
                   
                    </div>    
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                        <h5 className="card-title">
                            Nombre :{nombre}
                        </h5>
                        <p className="card-text">
                            Numero de chip: {numerochip}
                        </p>
                        <p className="card-text">
                        Su padre es: {nombrepadre}
                        </p>
                  </div>
            </div>
        
         </div>
           
        
    )
}