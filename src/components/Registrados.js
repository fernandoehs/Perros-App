import React,{useEffect,useState} from 'react';
import{db} from '../firebase';
//import BusquedaForm from './BusquedaForm';

export const Registrados = () => {

        const [links,setLinks]=useState([]);
         //db.collection('perros').where('registroperro','==',linkObject).onSnapshot((querySnapshot)=>{
        const getlinks=()=>{ 
           db.collection('perros').onSnapshot((querySnapshot)=>{
               const docs=[];
               querySnapshot.forEach((doc)=>{
                   
                   docs.push({...doc.data(), id:doc.id});
               });
               setLinks(docs);
           });
         
        };

        useEffect(() => {
            getlinks();
        }, [])
    return(
        <div>
            <h1>Lista de Registrados</h1>
            <div className="col-md-8" >
                {links.map(link=>{
                   return <div key={link.id}>
                         <h1 >{link.nombre}</h1>
                         </div>
                })}
                       
            </div>

         </div>
        
    )
}

   
