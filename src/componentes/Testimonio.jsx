import React from 'react'; //siempre se importa para un archivo jsx
import '../stylesheets/Testimonio.css'

function Testimonio(props){ //Todad las funciones inician en mayuscula //ESTO ES UN COMPONENTE FUNCIONAL //recibe los props
  return(
    <div className='contenedor-testimonio'>
      <img  
        className='imagen-testimonio' //en js no es class sino className
        src={require(`../imagenes/testimonio-${props.imagen}.png`)} //Esta es la forma de llamr una imagen desde javascript // se usan comillas invertidas para insertar codigo de js `
        alt='Foto de cara' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div> 
    </div>
  );     
}

export default Testimonio;