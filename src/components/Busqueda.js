
import{db} from '../firebase';
import BusquedaForm from './BusquedaForm';


export const Busqueda = (props) => {
 
    
    const buscar= (linkObject)=>{
        console.log(linkObject);
         db.collection('perros').where('registroperro','==',linkObject).onSnapshot((querySnapshot)=>{
         
         const items=[];
         querySnapshot.forEach((doc)=>{
            items.push(doc.data());
         });
         console.log(items);

         console.log(JSON.stringify(items));
       
         var data=JSON.stringify(items);

    

        
       

      
     
            
          
    
         
         });
        console.log('Buscando Valor');
       // console.log(linkObject);
        //console.log(JSON.stringify());
    }

    return <div>
    <BusquedaForm buscar={buscar}/>
    </div>
}

//export default Busqueda;